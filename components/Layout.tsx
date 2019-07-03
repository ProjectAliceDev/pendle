import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from './Navbar';
import Footer from './Footer';

/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';

const globalStyles = css({
  'html, body': { 
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    position: 'relative',
    margin: 0,
    padding: 0,
    fontFamily: "Inter, Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
  }
});

const mainPageStyles = css({
  display: 'inline-flex',
  flexDirection: 'column',
  minHeight: "100vh",
  height: "100%",
  width: "100%"
})

const contentStyles = css({
  position: "relative",
  height: "100%",
  flexGrow: 4,
  padding: 64,
})

const contentStylesNoPadding = css({
  position: "relative",
  height: "100%",
  flexGrow: 4,
})

type Props = {
  title?: string,
  useContentPadding?: boolean
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
  useContentPadding = false
}) => (
  <div>
    <Global styles={ globalStyles }/>
    <Head>
      <title>{ title } | AliceOS </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,800&display=swap" rel="stylesheet"/>
      <link href="https://rsms.me/inter/inter.css" rel="stylesheet"/>
    </Head>
    <div css={ mainPageStyles }>
      <Navbar/>
      <div id = "pa-content" css={ useContentPadding ? contentStyles: contentStylesNoPadding }>
        {children}
      </div>
      <Footer/>
    </div>
  </div>
)

export default Layout
