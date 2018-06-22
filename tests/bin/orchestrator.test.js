const Orchestrator = require('../../bin/orchestrator.js')

test('Init: should call "createProject()" if the second argument is equal "create"', () => {
	Orchestrator.createProject = jest.fn()
	const fs = jest.fn()
	expect(Orchestrator.init(["create"])).toEqual(undefined)
	expect(Orchestrator.createProject).toHaveBeenCalledTimes(1)
})

test('Init: should call "create()" if the second argument is equal "create"', () => {
	Orchestrator.create = jest.fn()
	expect(Orchestrator.init(["new"])).toEqual(undefined)
	expect(Orchestrator.create).toHaveBeenCalledTimes(1)
})

test('Init: should call "Article" class if the second argument is equal "new" and third is equal "post', () => {
	let postArticle = {}
	Orchestrator.create = jest.fn()
	postArticle.post = jest.fn()
	expect(Orchestrator.init(["new", "post"])).toEqual(undefined)
	expect(Orchestrator.create).toHaveBeenCalledTimes(1)
	expect(postArticle.post).toHaveBeenCalledTimes(1)
})