import React, { FC } from 'react';


/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const subNavbarRootStyles = css({
	backgroundColor: "#fafafa",
	height: 76,
	textAlign: "center",
	display: "flex",
})

const subNavbarInnerRegionStyles = css({
	maxWidth: 1500,
	marginLeft: "auto",
	marginRight: "auto",
	textAlign: "center",
	borderBottomColor: "#666",
	borderBottomWidth: 0.25,
	borderBottomStyle: "solid",
	display: "flex",
	'& div': {
		paddingLeft: 16,
		paddingRight: 16,
	}
})

const SubNavbar: FC = (props) => {
	return (
		<div id = "pa-subnavbar" css={ subNavbarRootStyles }>
			<div css={ subNavbarInnerRegionStyles }>
				{ props.children }
			</div>
		</div>
	)
}

export default SubNavbar