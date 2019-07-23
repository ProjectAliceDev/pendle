import * as React from 'react'
import Layout from '../../components/Layout'
import PageHero from '../../components/PageHero'
import BasicCard from '../../components/BasicCard'
import MiniNavbar from '../../components/MiniNavbar'

import { NextPage } from 'next';

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { pageContentStyles, pageGridContainer, pageSectionStyles } from '../../utils/commonStyles'
import previewPageImage from '../../assets/preview/preview.png'
import previewPageDevice from '../../assets/preview/devices.jpg'
import whatsNextDocs from '../../assets/preview/docs.png'
import whatsNextApps from '../../assets/preview/docs-appkit.png'


const previewWarningStyles = css({
	backgroundColor: "#ffedb2",
	borderColor: "#b38f18",
	borderWidth: 0.25,
	borderStyle: "solid",
	borderRadius: 6,
	paddingLeft: 24,
	paddingRight: 24,
	paddingTop: 16,
	paddingBottom: 16,
})

const PreviewPage: NextPage = () => {
  return (
    <Layout title="Download AliceOS Developer Beta">
      <PageHero
    	title="Download the preview"
    	subtitle="Try the developer beta and build for AliceOS."
    	showLink
    	linkText = "Download"
    	linkPointsTo = "https://github.com/ProjectAliceDev/aliceos/releases/latest/"
      	backgroundImage= { previewPageImage }
      	noBlur
		/>
      <div css={ pageContentStyles }>
        <div css={ pageSectionStyles(false) }>
          <h1>Download the developer beta.</h1>
          <p>
            Ready to try the developer beta for AliceOS Prospect Park? Get started with the latest release today and try out the beta.
          </p>
          <div css={ pageSectionStyles(true) }>
          	<img src={ previewPageDevice }/>
          </div>
        </div>
        <div css={ pageSectionStyles(false) }>
      		<h2>Get started</h2>
      		<p>Getting started with AliceOS Prospect Park couldn't be easier. Just download the version for your Ren'Py SDK and drag it into your visual novel project's game folder.</p>
      		<div css = { previewWarningStyles }>
      			<p><b>Note:</b> AliceOS Prospect Park is pre-release software. Features and improvements are not in their complete state and may change over time. <b>Do not install AliceOS Prospect Park on a production-ready visual novel project.</b></p>
      			<p>More information on what's changed can be found in <a href="https://nextdocs.aliceos.app/AliceOS-Release-Notes/">AliceOS's release notes.</a></p>
      		</div>
      	</div>
        <div css={ pageSectionStyles(false) }>
          <h2>Migrating from AliceOS 1.0.0?</h2>
          <p>Remove the Applets, CoreServices, Frameworks, and Resources directories before installing AliceOS Prospect Park Beta. You may also need to modify any existing code inside your project to the proper methods and classes in the new beta before continuing.</p>
          <div css = { previewWarningStyles }>
            <p><b>Note:</b> Back up your project before starting the upgrade process to AliceOS Prospect Park. The installation and usage methods have greatly changed and may not work for you if the upgrade fails.</p>
          </div>
        </div>
        <div css = { pageSectionStyles(true) }>
          <h1>Finished downloading AliceOS?</h1>
        	<div css={ pageGridContainer }>
    			<BasicCard
  	            title="Learn about what's new."
  	            cardDescription="Read the release notes on the latest developer beta release and get to know AliceOS a bit."
  	            color="#ffe693"
  	            strictPadding
  	            link="https://nextdocs.aliceos.app/AliceOS-Release-Notes/"
  	            image={ whatsNextDocs }
  	            />
            <BasicCard
              title="Start writing apps for AliceOS."
              cardDescription="Learn more about the new app system and how you can start writing your own third-party apps for the AliceOS platform."
              color="#ffe693"
              strictPadding
              link="https://nextdocs.aliceos.app/AppKit/"
              image={ whatsNextApps }
              />
        	</div>
        </div>
      </div>
    </Layout>
  )
}

export default PreviewPage