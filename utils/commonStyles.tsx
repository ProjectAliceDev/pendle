/** @jsx jsx */
import { css } from '@emotion/core'

import breakpoints from './breakpoints'

export const pageContentStyles = css(breakpoints({
  paddingTop: 64,
  paddingBottom: 64,
  paddingLeft: [24, 48, 188],
  paddingRight: [24, 48, 188],
  '& a': {
    textDecoration: "none",
    color: "#ffcc22"
  },
  '& a:hover': {
    color: "#ffdb64"
  }
}))

export const pageGridContainer = css(breakpoints({
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"],
  gridAutoRows: "1fr",
  gridColumnGap: 24,
  gridRowGap: 96,
  width: "100%",
  height: "100%",
  paddingBottom: 64,
}));

export const thinnerPageGridContainer = css(breakpoints({
  display: "grid",
  gridTemplateColumns: ["1fr", "repeat(1, 1fr)", "repeat(3, 1fr)"],
  gridAutoRows: "1fr",
  gridColumnGap: 24,
  gridRowGap: 96,
  width: "100%",
  height: "100%",
  paddingBottom: 64,
}));