import { css } from "libs/aphrodite"
import {
    profile,
    __profile_isOpen,
	profileImage,
	profileName,
	__profileName_isOpen
} from "./styles"

import TProfileBadge from "./types"

const ProfileBadge: TProfileBadge = ({ profileIcon, name, isOpen }) => {
	const applyState = (rootState, activeState) =>
		isOpen
			? { className: css(rootState, activeState) }
			: { className: css(rootState) }

	return (
		<button {...applyState(profile, __profile_isOpen)}>
			<img className={css(profileImage)} src={profileIcon} alt={name} />
			<h1 {...applyState(profileName, __profileName_isOpen)}>
				{name}
			</h1>
		</button>
	)
}

export default ProfileBadge
