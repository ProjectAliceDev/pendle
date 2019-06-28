import React, { FC } from 'react';
import Link from 'next/link';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface BasicCardProps {
	title: string
	cardDescription: string
	color?: string
	darkText?: boolean
	link?: string
	image?: string
	noShadow?: boolean;
	imageOnTop?: boolean;
	strictPadding?: boolean;
}

const basicCardRootStyles = (
	color: string | undefined, 
	darkText: boolean | undefined, 
	noShadow: boolean | undefined
	) => {
	return css({
		backgroundColor: color? color: "#fff",
		color: darkText? "white": "black",
		padding: 32,
		borderRadius: 6,
		boxShadow: noShadow? "none": "0 4px 8px #666",
		textAlign: "center",
		transition: "box-shadow 0.10s",
		display: "inline-flex",
		flexDirection: "column",
		position: "relative",
		alignSelf: "center",
		height: "100%",
		maxHeight: 500,


		'&:hover': {
			boxShadow: noShadow? "none": "0 8px 16px #666",
		}
	})
}

const basicCardImageContainerStyles = (strictPadding: boolean | undefined) => { 
	return css({
		paddingLeft: strictPadding? 8: 24,
		paddingRight: strictPadding? 8: 24,
		paddingBottom: strictPadding? 8: 24,
		position: "relative"
	})
}

const basicCardImageStyles = css({
	width: "100%",
	height: "auto",
	maxHeight: 250,
	marginBottom: 8,
	alignSelf: "center",
	borderRadius: 4,

})

const basicCardTitleStyles = css({
	fontWeight: 700,
	fontSize: '1.75em',
	marginBottom: 0,
	marginTop: 0,
	flexGrow: 1,
})

const basicCardDescriptionStyles = css({
	marginTop: 4,
	textAlign: "left",
})

const BasicCard: FC<BasicCardProps> = (props) => {
	return (
		<div style={ { width: "100%", height: "100%" } }>
		<Link href={ props.link }>
			<a style= { { textDecoration: "none" } }>
				<div id="pa-basic-card" css={ basicCardRootStyles(props.color? props.color: "#fff", props.darkText, props.noShadow) }>
					{ props.image && props.imageOnTop? <div css={ basicCardImageContainerStyles(props.strictPadding) }><img src={ props.image } css={ basicCardImageStyles }/></div>: null }
					<div style= { { flexGrow: 1, } }>
						<p css={ basicCardTitleStyles }>{ props.title }</p>
						<p css={ basicCardDescriptionStyles }>{ props.cardDescription }</p>
					</div>
					{ props.image && !props.imageOnTop? <div css={ basicCardImageContainerStyles(props.strictPadding) }><img src={ props.image } css={ basicCardImageStyles }/></div>: null }
				</div>
			</a>
		</Link>
		</div>
	)
}

export default BasicCard;