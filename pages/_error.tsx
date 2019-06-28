import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const errorPageRootStyles = css({
  textAlign: "center",
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 128,
  paddingBottom: 128
})

const titleStyles = css({
  fontSize: '2.75em',
})

const calltoActionStyles = css({
  textDecoration: "none",
  fontSize: "1.25em",
  color: "rgb(255, 204, 0)",
  '&:hover': {
    color: "#ffdb64",
  }
})

const ErrorPage: NextPage = () => {
  return (
    <Layout title="Page Not Found">
      <div css={ errorPageRootStyles }>
        <h1 css={ titleStyles }><b>The page you are looking for <br/> could not be found.</b></h1>
        <Link href="/"><a css={ calltoActionStyles }>Back to homepage &rsaquo;</a></Link>
      </div>
    </Layout>
  )
}

export default ErrorPage
