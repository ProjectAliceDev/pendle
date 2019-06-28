import React, { FC } from 'react';
import Link from 'next/link';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface MiniNavbarProps {
	title: string;
	buttonText: string;
	buttonLink: string;
	children?: any;
	icon?: string;
}

const miniNavbarRootStyles = css({
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0.8)",
	position: "absolute",
	top: 0,
	display: "flex",
	width: "100%"
})

const miniNavbarInnerRegionStyles = css({
	display: "flex",
	borderBottomColor: "#333",
	borderBottomWidth: 0.25,
	borderBottomStyle: "solid",
	maxWidth: 850,
	marginLeft: "auto",
	marginRight: "auto",
	height: "100%",
	width: "100%",
	paddingLeft: 16,
	paddingRight: 16,
})

const miniNavbarTitleStyles = css({
	fontWeight: 700,
	marginTop: 12,
})

const miniNavbarLogoStyles = css({
	height: 48,
	width: 'auto',
	paddingRight: 4,
})

const miniNavbarLinkStyles = css({
	display: "flex",
	marginTop: 12,
	'& a': {
		marginTop: 2,
		textDecoration: "none",
		color: "#333",
		paddingLeft: 8,
		paddingRight: 8,
		fontSize: '0.9em'
	},
	'& a:hover': {
		color: "#999"
	}
})

const miniNavbarButtonStyles = css({
	background: "linear-gradient(#ffdb64, #ffcc22)",
	backgroundColor: "#ffdb64",
	borderColor: "#b38f18",
	borderWidth: 1,
	borderStyle: "solid",
	color: "#333",
	borderRadius: 8,
	paddingLeft: 12,
	paddingRight: 12,
	paddingTop: -4,
	paddingBottom: -4,
	fontSize: '1em',

	'& p': {
		textDecoration: "none !important",
		marginTop: 0,
		marginBottom: 0,
		fontWeight: 600
	}
})

const navbarButtonStyle = { textDecoration: "none", fontSize: '0.95em', marginTop: -0.5 }

const MiniNavbar: FC<MiniNavbarProps> = (props) => {
	return (
		<div id="pa-mininavbar" css={ miniNavbarRootStyles }>
			<div css={ miniNavbarInnerRegionStyles }>
				<div style = { { flexGrow: 1, display: "flex" } }>
					{ props.icon? <img src={ props.icon } css={ miniNavbarLogoStyles }/>: null }
					<p css={ miniNavbarTitleStyles }> { props.title } </p>
				</div>
				<div id="pa-mininavbar-links" css={ miniNavbarLinkStyles }>
					{ props.children }
					<Link href={ props.buttonLink }>
						<a style={ navbarButtonStyle }>
							<div css= { miniNavbarButtonStyles }>
								<p> { props.buttonText } </p>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default MiniNavbar