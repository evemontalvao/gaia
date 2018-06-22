const parseArticle = (article) => {
	article = fs.readFileSync(article, 'utf8')
	article = YAML.parse(article)
	article.content = markdown.makeHtml(article.content)
	return article
}

module.exports = parseArticle