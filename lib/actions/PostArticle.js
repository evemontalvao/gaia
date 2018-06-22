const fs = require('fs')
const nunjucks = require('nunjucks')
const Showdown = require('showdown')
const markdown = new Showdown.Converter()
const YAML = require('yamljs')
let template, content, date, postExists


class Article {
	constructor() {
		this.articles = fs.readdirSync(`${process.cwd()}/src/_articles`);
	}
	post(config, article) {
		if(typeof article == 'string' && !article.length) return
		article = this.articles.shift()
		content = this.parseArticle(`${process.cwd()}/src/_articles/${article}`)
		template = fs.readFileSync(`${process.cwd()}/src/_templates/index.html`, 'utf8')
		content = nunjucks.renderString(template, content)
		article = article.replace('yml', 'html')
		date = new Date().getTime()
		postExists = this.checkIfExists(article, date)

		fs.writeFileSync(`${process.cwd()}/public/posts/${article}`, content, 'utf8')

	}

	parseArticle(article) {
		
	}

	checkIfExists(article, date) {

	}
}

module.exports = Article;


