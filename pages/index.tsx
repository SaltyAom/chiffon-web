import PageLayout from "layouts/page"

import Summary from "components/common/summary"
import History from "components/common/history"

const Dashboard = () => {
	return (
		<PageLayout>
			<Summary />
			<History date="today" withPreload />
			<History date="yesterday" />
			<History date="this week" />
		</PageLayout>
	)
}

export default Dashboard