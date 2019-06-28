import * as React from 'react'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import BasicCard from '../components/BasicCard'


/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { breakpoints } from '../utils/breakpoints'
import { pageContentStyles, thinnerPageGridContainer } from '../utils/commonStyles'

import studioBg from '../assets/studio/hero.jpg'
import discord from '../assets/studio/discord.png'
import matrix from '../assets/studio/riot.png'
import gitter from '../assets/studio/gitter.png'


const AboutPage: React.FunctionComponent = () => (
  <Layout title="About">
    <PageHero
    	title="The Studio"
    	subtitle="Join in on the conversation."
    	showLink
    	linkText = "Join The Studio (via Discord)"
    	linkPointsTo = "https://discord.gg/tdvNzjW"
      backgroundImage= { studioBg }
	/>
	<div css={ pageContentStyles }>
		<div>
			<h1>What is The Studio?</h1>
			<p>
				The Studio is our hotspot for communicating between fans, developers, and others alike. We're available through Discord, Matrix.org, and Gitter.im, whatever your preference may be.
			</p>
		</div>
		<div css={ thinnerPageGridContainer }>
      <BasicCard
        title="Discord"
        cardDescription="Discord is the original place where all the magic happens in The Studio. Emojis, roles, and more alike, Discord has been a great home for The Studio since inception."
        color="#7289DA"
        strictPadding
        image={ discord }
        darkText
        link="https://discord.gg/tdvNzjW"
       />
      <BasicCard
        title="Matrix.org"
        cardDescription="Matrix is a decentralized messaging system that ties all of The Studio together. Matrix works with any app and doesn't require sign-in to view any of our rooms."
        color="#fafafa"
        strictPadding
        image={ matrix }
        link="https://chat.aliceos.app"
       />
      <BasicCard
        title="Gitter.im"
        cardDescription="Gitter.im is a developer-focused chat system that shows live GitHub activity while interacting with The Studio. It's easy to get started by signing in with a GitHub or GitLab account."
        color="#ed1965"
        strictPadding
        image={ gitter }
        darkText
        link="https://gitter.im/projectalicedev/"
      />
    </div>
	</div>
  </Layout>
)

export default AboutPage
