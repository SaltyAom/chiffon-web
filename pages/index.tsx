import PageLayout from "layouts/page"

import Summary from "components/common/summary"
import History from "components/common/history"

const Dashboard = () => {
	return (
		<PageLayout>
			<Summary />
			<History />
		</PageLayout>
	)
}

export default Dashboard