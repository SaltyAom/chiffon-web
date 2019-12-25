const rootStyles = new String(`
	@font-face {
		font-family: Roboto;
		src: url("/app/fonts/Roboto-Regular.ttf");
		font-display: swap;
	}

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
		--preload: #f1f2fa;
		--aside: #fff;

		--shadow-color: rgba(198,203,222,.45)
	}

	* {
		font-family: -apple-system, Blinkmacfont, Roboto, Oxygen, Helvetica, "Segoe UI", sans-serif;
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
		overflow: hidden;
	}

	@media (prefers-color-scheme: dark){
		:root {
			--primary-100: #176474;
			--primary-200: #1f8c60;
			--primary-300: #24a572;
			--primary-400: #28b87e;
			--primary-500: #3cc08b;
			--primary-600: #71d4ac;
			--primary-700: #b3ead4;
			--primary-800: #d5f4e7;
			--primary-900: #f4fcf9;	

			--content: #eee;
			--fade: #ccc;
			--mist: #aaa;
	
			--link: #008dff;
		
			--background: #333;
			--root: #555;
			--preload: #777;
			--aside: #282828;

			--shadow-color: rgba(0,0,0,.45)
		}
	}
`).replace(/ |\t|\n/g, "")

export default rootStyles