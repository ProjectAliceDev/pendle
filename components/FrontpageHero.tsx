import React, { Component } from 'react';
import Link from 'next/link';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import facepaint from 'facepaint';
import { breakpoints } from '../utils/breakpoints'


interface FrontpageHeroProps {
	title: string
    subtitle: string
    callToActionText: string
    callToActionLink: string
    backgroundImageLocation?: string
    dontShowCallToAction?: boolean
}

const frontpageHeroRootStyles = css(breakpoints({
	paddingTop: 76,
	paddingBottom: 216,
	paddingLeft: [32, "5%", "15%"],
	paddingRight: [32, "5%", "15%"],
	textAlign: "center",
	backgroundColor: "#333",
	color: "white",
	backgroundPosition: "center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat"
}))

const frontpageHeroTitleStyles = css({
	fontSize: '2.5em',
	textShadow: '0 0 8px #333',
	lineHeight: '1.0em',
})

const frontpageHeroSubtitleStyles = css({
	fontSize: '1.25em',
	textShadow: '0 0 6px #333'
})

const frontpageCallToActionStyles = css({
  	fontSize: "1.25em",
  	color: "rgb(255, 204, 0)",
	'&:hover': {
	  color: "#ffdb64",
	}
})

export const FrontpageHero: React.FC<FrontpageHeroProps> = (props) => {
	return (
		<div css={ frontpageHeroRootStyles } style={ { backgroundImage: `url(${ props.backgroundImageLocation })`} }>
			<h1 css={ frontpageHeroTitleStyles }>{ props.title }</h1>
			<p css={ frontpageHeroSubtitleStyles }>{ props.subtitle }</p>
			{
				props.dontShowCallToAction? null:
				<Link href={ props.callToActionLink }>
					<a css={ frontpageCallToActionStyles }>
						{ props.callToActionText } &rsaquo;
					</a>
				</Link>
			}
		</div>
	)
}

export default FrontpageHero;