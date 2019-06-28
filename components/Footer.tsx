import React, { Component } from 'react';
import { Link } from 'next/link';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import facepaint from 'facepaint';

const footerRootStyles = css({
	backgroundColor: "#fafafa",
	padding: 32,
	fontSize: '0.75em',
	// position: 'absolute',
	// bottom: 0,
	// left: 0,
	// right: 0,
	flexGrow: 1
})

const Footer: React.FC = () => {
	return (
		<div id = "pa-footer" css={ footerRootStyles }>
			<p><b>&copy; 2018 - {new Date().getFullYear()} Project Alice.</b></p>
			<p>
				AliceOS, The Angel Returns, and Forgotten is not associated with Team Salvato or Joey Drew Studios and is not an official Bendy and the Ink Machine product.
			</p>
		</div>
	)
}

export default Footer