import { Fragment, memo } from "react"

import HeaderTools from "components/common/headerTools"

import TPageLayout from "./types"

const PageLayout: TPageLayout = memo(({ children }) => (
	<Fragment>
		<HeaderTools name="Dashboard" />
		{children}
	</Fragment>
))

export default PageLayout
