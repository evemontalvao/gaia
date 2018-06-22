const fs = require('fs-extra')
const colors = require('colors/safe')

const handleArticles = (articlesDirectory) => {
	directoryExists = fs.ensureDir(articlesDirectory)

	if(!directoryExists) {
		return new Error(colors.red(`Articles directory not found, please run "gaia create"`))
	}

	
}

module.exports = handleArticles