import * as React from 'react'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import BasicCard from '../components/BasicCard'
import MiniNavbar from '../components/MiniNavbar'

import { NextPage } from 'next';

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { pageContentStyles, pageGridContainer, pageSectionStyles } from '../utils/commonStyles'
import previewPageImage from '../assets/hero/pr.jpg'
import whatsNextDocs from '../assets/cards/docs.png'
import whatsNextApps from '../assets/cards/docs-appkit.png'


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
    <Layout title="Download AliceOS">
      <PageHero
    	title="Download AliceOS"
    	subtitle="Get started with AliceOS and write apps."
    	showLink
    	linkText = "Download"
    	linkPointsTo = "https://github.com/ProjectAliceDev/aliceos/releases/latest/"
      	backgroundImage= { previewPageImage }
		/>
      <div css={ pageContentStyles }>
        <div css={ pageSectionStyles(false) }>
          <h1>Download AliceOS Prospect Park.</h1>
          <p>
            Ready to try AliceOS Prospect Park? Get started with the latest release today and try it out in your visual novel. Just download the version for your Ren'Py SDK and drag it into your visual novel project's game folder.</p>
      	</div>
		<div css={ pageSectionStyles(false) }>
          <h2>Migrating from AliceOS Prospect Park Developer Beta?</h2>
          <p>Upgrading couldn't get any easier. Simply download the AliceOS package and replace the RPA file from the old beta with the new release.</p>
        </div>
        <div css={ pageSectionStyles(false) }>
          <h2>Migrating from AliceOS 1.0.0?</h2>
          <p>Remove the Applets, CoreServices, Frameworks, and Resources directories before installing AliceOS Prospect Park Beta. You may also need to modify any existing code inside your project to the proper methods and classes in the new beta before continuing.</p>
          <div css = { previewWarningStyles }>
		  	<p><b>Note:</b> AliceOS Prospect Park is a major overhaul of the AliceOS framework and contains breaking changes against older versions of AliceOS. Read the documentation fully and back up your project before starting the upgrade process to AliceOS Prospect Park.</p>
          </div>
        </div>
        <div css = { pageSectionStyles(true) }>
          <h1>Finished downloading AliceOS?</h1>
        	<div css={ pageGridContainer }>
    			<BasicCard
  	            title="Learn about what's new."
  	            cardDescription="Read the release notes on the latest release and get to know AliceOS a bit."
  	            color="#ffe693"
  	            strictPadding
  	            link="https://nextdocs.aliceos.app/Release-Notes/"
  	            image={ whatsNextDocs }
  	            />
            <BasicCard
              title="Start writing apps for AliceOS."
              cardDescription="Learn more about the new app system and how you can start writing your own third-party apps for the AliceOS platform."
              color="#ffe693"
              strictPadding
              link="https://nextdocs.aliceos.app/Develop-Apps/"
              image={ whatsNextApps }
              />
        	</div>
        </div>
      </div>
    </Layout>
  )
}

export default PreviewPage