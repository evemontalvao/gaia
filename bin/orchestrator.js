#!/usr/bin/env node
const Article = require("../lib/actions/PostArticle")
const fs = require('fs-extra')
const colors = require('colors/safe')
const path = require('path')
const rootProject = path.join(__dirname, '../')
const config = require(`${rootProject}/config/config.json`)

class Create {
	constructor() {
		this.action = process.argv.slice(2)
		this.init(this.action)
	}

	init(actions) {
		console.log(actions)
		switch(actions[0]) {
			case "create":
			this.createProject()
			break
			case "new":
			this.create(actions)
			break
			default:
			console.log(colors.yellow("Invalid action! Please see the docs by running gaia --info"))
		}
	}

	createProject() {
		let source = path.join(__dirname, '../') + '/struct'
		let dist = `${process.cwd()}/`

		try {
			fs.copy(source, dist)
			console.log(colors.cyan('Gaia structure was succesfully created!'))
		} catch (err) {
			console.error(err)
		}
	}

	create(actions) {
		console.log(actions[1])
		switch(actions[1]) {
			case "post":
			const postArticle = new Article();
			postArticle.post(config)
			break
		}
	}
}

module.exports = new Create

