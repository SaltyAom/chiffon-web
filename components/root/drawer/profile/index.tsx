import { css } from "libs/aphrodite"
import {
	profile,
	__profile_isOpen,
	profileImage,
	profileFigure,
	__profileFigure_preload,
	profileName,
	__profileName_isOpen,
	__profileName_preload
} from "./styles"

import TProfileBadge from "./types"

const ProfileBadge: TProfileBadge = ({
	profileIcon,
	name,
	isOpen,
	preload = false
}) => {
	const applyState = (rootState, activeState) =>
		isOpen
			? { className: css(rootState, activeState) }
			: { className: css(rootState) }

	if (preload)
		return (
			<button {...applyState(profile, __profile_isOpen)}>
				<figure className={css(profileFigure, __profileFigure_preload)} />
				<div {...applyState([profileName, __profileName_preload], __profileName_isOpen)} />
			</button>
		)

	return (
		<button {...applyState(profile, __profile_isOpen)}>
			<figure className={css(profileFigure)}>
				<img className={css(profileImage)} src={profileIcon} alt={name} />
			</figure>
			<h1 {...applyState(profileName, __profileName_isOpen)}>
				{name}
			</h1>
		</button>
	)
}

export default ProfileBadge
