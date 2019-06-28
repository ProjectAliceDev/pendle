import React, { FC } from 'react';
import Link from "next/link";

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface SubnavbarItemProps {
	icon: string
	name: string
	linksTo: string
}

const subNavbarItemName = css({
	textDecoration: "none",
	color: "#333",
	fontWeight: 700,
	fontSize: "0.75em",
	marginTop: 0,
	paddingTop: 0,
	position: "relative",
	bottom: 8,
})

const subNavbarIcon = css({
	position: "relative",
	top: 8,
	height: 48,
	width: "auto",
	paddingBottom: 8,
	marginBottom: 0
})

const SubnavbarItem: FC<SubnavbarItemProps> = (props) => {
	return (
		<div id="pa-subnavbar-item">
			<Link href={ props.linksTo } css={ { textDecoration: "none"} }>
				<a style={ {textDecoration: "none"} }>
					<div>
						<img src={ props.icon } css={ subNavbarIcon }/>
						<p css={ subNavbarItemName }>{ props.name }</p>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default SubnavbarItem;