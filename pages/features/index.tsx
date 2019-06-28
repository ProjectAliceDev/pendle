import * as React from 'react'
import Layout from '../../components/Layout'
import PageHero from '../../components/PageHero'
import BasicCard from '../../components/BasicCard'


/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { breakpoints } from '../../utils/breakpoints'
import { pageContentStyles, pageGridContainer } from '../../utils/commonStyles'

import featuresHeroImage from '../../assets/sysbg.png'
import appletsFeature from '../../assets/applets.jpg'
import notifsFeature from '../../assets/aliceos-notify.png'
import privacyFeature from '../../assets/aliceos-privacy.png'
import customFeature from '../../assets/custom/3.png'


const AboutPage: React.FunctionComponent = () => (
  <Layout title="Features">
    <PageHero
    	title="AliceOS Features"
    	subtitle="Meet your new Ren'Py framework."
    	showLink
    	linkText = "Get Started"
    	linkPointsTo = "https://docs.aliceos.app/master/index.html"
      backgroundImage= { featuresHeroImage }
	/>
	<div css={ pageContentStyles }>
		<div css={ pageGridContainer }>
       <BasicCard
            title="Pick an applet. Any applet."
            cardDescription="AliceOS is extensible by nature with Applets, custom extensions and apps for the AliceOS ecosystem. Whether you're playing music, sending messages to your crush, or writing the next script, Applets make it happen."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            imageOnTop
            image={ appletsFeature }
            />
          <BasicCard
            title="Rich notifications. So rich you won't miss a beat."
            cardDescription="AliceOS comes with its own notification framework that allows developers and users to stay informed. Applets and system services alike use notifications to express ideas, display information, or even make a request. Notifications are also user-controlled, giving the user ultimate control over which notifications can be seen."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ notifsFeature }
            />
          <BasicCard
            title="You're in control. Always."
            cardDescription="Privacy and security matter. That's why AliceOS comes with its own security policy, SEAlice. Applets can only access your files and system when you allow it to, and developers can add additional privacy and security settings for a more secure experience."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            imageOnTop
            image={ privacyFeature }
            />
          <BasicCard
            title="All the same. But yet so different."
            cardDescription="AliceOS provides a familiar experience across projects and games. Want something a little less vanilla? Developers can customize AliceOS through fonts and colors or redesign UI elements entirely!"
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
