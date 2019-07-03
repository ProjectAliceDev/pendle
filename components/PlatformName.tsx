import React, { Component } from 'react';
import Link from 'next/link';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import facepaint from 'facepaint';
import { breakpoints } from '../utils/breakpoints'


interface PlatformNameProps {
	title: string
    subtitle: string
    backgroundImageLocation?: string
    showPreviewText?: boolean
}

const platformNameRootStyles = css(breakpoints({
	paddingTop: 84,
	paddingBottom: 200,
	paddingLeft: [32, "5%", "15%"],
	paddingRight: [32, "5%", "15%"],
	textAlign: "center",
	backgroundColor: "#333",
	color: "white",
	backgroundPosition: "center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat"
}))

const frontpagePreviewButtonStyles = css({
	color: "#ffcc22",
	borderColor: "#ffcc22",
	borderWidth: 0.25,
	borderStyle: 'solid',
	borderRadius: 4,
	paddingTop: 2,
	paddingBottom: 2,
	textAlign: 'center',
	fontSize: '0.9em',
	textShadow: '0 0 8px #777',
	boxShadow: '0 0 2px #999',
	width: 'auto',
	maxWidth: 116,
	marginLeft: 'auto',
	marginRight: 'auto',
})

const platformNameTitleStyles = css({
	fontSize: '1.5em',
	textShadow: '0 0 8px #333',
	lineHeight: '1.0em',
	marginBottom: 0,
	fontWeight: 400,
})

const platformNameSubtitleStyles = css({
	marginTop: 0,
	marginBottom: 2,
	fontSize: '6em',
	textShadow: '0 0 6px #333',
	fontWeight: 700,
})

export const PlatformNameComponent: React.FC<PlatformNameProps> = (props) => {
	return (
		<div css={ platformNameRootStyles } style={ { backgroundImage: `url(${ props.backgroundImageLocation })`} }>
			{ props.showPreviewText? 
				<div css={ frontpagePreviewButtonStyles }>
					Coming soon
				</div>: null }
			<h1 css={ platformNameTitleStyles }>{ props.title }</h1>
			<p css={ platformNameSubtitleStyles }>{ props.subtitle }</p>
		</div>
	)
}

export default PlatformNameComponent;