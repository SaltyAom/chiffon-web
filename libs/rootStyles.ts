const rootStyles = new String(`
	:root {
		--primary-900: #176474;
		--primary-800: #1f8c60;
		--primary-700: #24a572;
		--primary-600: #28b87e;
		--primary-500: #3cc08b;
		--primary-400: #71d4ac;
		--primary-300: #b3ead4;
		--primary-200: #d5f4e7;
		--primary-100: #f4fcf9;

		--content: #333;
		--fade: #757575;
		--mist: #efeff4;

		--link: #007aff;

		--background: #fff;
		--root: #fff;
	}

	* {
		font-family: Helvetica;
		box-sizing: border-box;
	}

	::selection, ::-webkit-selection {
		background-color: rgba(0,123,255,.25);
	}

	body {
		margin: 0;
		background-color: var(--background);
	}

	#__next {
		display: flex;
	}
`).replace(/ |\t|\n/g, "")

export default rootStyles