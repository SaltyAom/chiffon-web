import { Fragment, memo } from "react"

import Workspace from "components/root/workspace"
import HeaderTools from "components/common/headerTools"
import WorkArea from "components/common/workArea"

import TPageLayout from "./types"

const PageLayout: TPageLayout = memo(({ children }) => (
	<Fragment>
		<Workspace workspace={<WorkArea />}>
			<HeaderTools name="Dashboard" />
			{children}
		</Workspace>
	</Fragment>
))

export default PageLayout
