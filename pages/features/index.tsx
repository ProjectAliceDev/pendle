import * as React from 'react'
import Layout from '../../components/Layout'
import PageHero from '../../components/PageHero'
import BasicCard from '../../components/BasicCard'


/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { breakpoints } from '../../utils/breakpoints'
import { pageContentStyles, pageGridContainer } from '../../utils/commonStyles'

import featuresHeroImage from '../../assets/hero/pr.jpg'
import installFeature from '../../assets/features/update.png'
import appFeature from '../../assets/features/desktop.png'
import privacyFeature from '../../assets/features/perms.png'
import customFeature from '../../assets/custom/3.png'


const AboutPage: React.FunctionComponent = () => (
  <Layout title="Features">
    <PageHero
    	title="About AliceOS"
    	subtitle="Meet your new Ren'Py framework."
    	showLink
    	linkText = "Get Started"
    	linkPointsTo = "https://docs.aliceos.app"
      backgroundImage= { featuresHeroImage }
	/>
	<div css={ pageContentStyles }>
		<div css={ pageGridContainer }>
       <BasicCard
            title="Fast install, faster upgrades."
            cardDescription="AliceOS is easy to install with just adding a single file to your existing Ren'Py visual novel project. And with each new release, all you have to do is just replace that file. AliceOS also builds with the latest Ren'Py SDKs and special editions for projects like mods for Doki Doki Literature Club."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            imageOnTop
            image={ installFeature }
            />
          <BasicCard
            title="Super extensible with apps."
            cardDescription="AliceOS adds great new tools and utilities to let you take advantage of what AliceOS has to offer. AliceOS comes bundled with applications like App Manager and inventories, and developers can make use of AppKit and ScreenKit to create custom apps for AliceOS with ease."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ appFeature }
            />
          <BasicCard
            title="You're in control. Always."
            cardDescription="Privacy and security matter. That's why we bake it directly into AliceOS with AppKit. Apps only have access to the things you want them to with your permission. For developers, it's just as easy to ask and work with permissions."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            imageOnTop
            image={ privacyFeature }
            />
          <BasicCard
            title="Super customizable. Down to the source."
            cardDescription="AliceOS offers easy modularity with frameworks that can be added, modified, or removed in the AliceOS package. And since AliceOS is open-source under the BSD-2-Clause license, anyone can create custom AliceOS packages easily."
            color="#fafafa"
            strictPadding
            noShadow={ true }
            image={ customFeature }
            />
		</div>
	</div>
  </Layout>
)

export default AboutPage
