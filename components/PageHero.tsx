import React, { FC } from 'react';
import Link from 'next/link';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import facepaint from 'facepaint';

interface PageHeroProps {
	backgroundImage?: string
	title: string
	subtitle?: string
	showLink?: boolean
	linkText?: string
	linkPointsTo?: string
}

const breakpoints = facepaint([
	'@media(min-width: 420px)',
  	'@media(min-width: 768px)',
  	'@media(min-width: 1120px)'
])

const pageHeroRootStyles = css({
	position: "relative",
	backgroundColor: "#333",
	color: "white",
	height: "100%",
	zIndex: 1,
})

const pageHeroBackgroundStyles = css({
	height: "inherit",
	position: 'absolute',
	top: 0,
	width: "100%",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	zIndex: -1,
	filter: "blur(24px)",
	overflow: "hidden"
})

const pageHeroContentStyles = css(breakpoints({
	paddingLeft: [24, 48, 128],
	paddingRight: [24, 48, 128],
	paddingTop: 32,
	paddingBottom: 32,
	zIndex: 1,
	display: ["grid", "grid", "flex"],
	verticalAlign: "middle"
}))

const pageHeroTextStyles = css({
	display: "block",
	flexGrow: 1,
	textShadow: "0 0 2px rgba(0, 0, 0, 0.1)"
})

const pageHeroTitleStyles = css({
	fontSize: '2.75em',
	fontWeight: 900,
	marginBottom: 0,
})

const pageHeroSubtitleStyles = css({
	fontSize: '1.25em',
	fontWeight: 700,
	marginTop: 0,
})

const pageHeroButtonStyles = css({
	backgroundColor: "rgba(0, 0, 0, 0.3)",
	borderColor: "rgba(0, 0, 0, 0.2)",
	borderWidth: 0.25,
	borderStyle: "solid",
	borderRadius: 4,
	verticalAlign: "middle",
	color: "white",
	textAlign: "center",
	'& p': {
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 8,
		marginBottom: 8,
		fontWeight: 500,
		fontSize: '1.05em'
	}
})

const pageHeroButtonBase = { 
	textDecoration: "none",
	marginTop: "auto",
	marginBottom: "auto"
}

const PageHero: FC<PageHeroProps> = (props) => {
	return(
		<div id="pa-pagehero" css={ pageHeroRootStyles }>
			<div css={ pageHeroBackgroundStyles } style={ {backgroundImage: `url(${ props.backgroundImage })`} }></div>
			<div css={ pageHeroContentStyles }>
				<div css={ pageHeroTextStyles }>
					<h1 css={ pageHeroTitleStyles }> { props.title } </h1>
					<p css={ pageHeroSubtitleStyles }> { props.subtitle } </p>
				</div>
				{
					props.showLink? 
					<Link href={ props.linkPointsTo? props.linkPointsTo: "" }>
						<a style={ pageHeroButtonBase }>
							<div css={ pageHeroButtonStyles }>
								<p> { props.linkText? props.linkText: "Learn more" } </p>
							</div>
						</a>
					</Link>: null
				}
			</div>
		</div>
	)
}

export default PageHero;