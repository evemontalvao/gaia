const handleArticles = require(`${process.cwd()}/lib/helpers/handleArticles`)
const config = require(`${process.cwd()}/config/config.json`)

test('handleArticle should end process if directory does not exist', () => {
	expect(handleArticles(`${process.cwd()}/src/_article`)).toThrowError(`Articles directory not found, please run "gaia create"`)
})
