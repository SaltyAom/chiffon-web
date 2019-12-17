import Document, { Head, Main, NextScript } from "next/document"

import { StyleSheetServer } from "aphrodite"

import rootStyles from 'libs/rootStyles'

export default class ChiffonDocument extends Document {
	static async getInitialProps({ renderPage }) {
		const { html, css } = StyleSheetServer.renderStatic(() => renderPage())

        return { ...html, css, ids: css.renderedClassNames }
	}

	constructor(props) {
		super(props)
        
		const { __NEXT_DATA__, ids } = props
		if (ids)
			__NEXT_DATA__.ids = this.props.ids
	}

	render() {
		return (
			<html>
				<Head>
					<style
						data-aphrodite
						dangerouslySetInnerHTML={{
							__html: this.props.css.content += rootStyles
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}