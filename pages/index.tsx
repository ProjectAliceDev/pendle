import * as React from 'react'
import Layout from '../components/Layout'
import FrontpageHero from '../components/FrontpageHero'
import BasicCard from '../components/BasicCard'

import { NextPage } from 'next';


/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { pageContentStyles, pageGridContainer } from '../utils/commonStyles'
import frontpageHeroImage from '../assets/hero/hero.jpg'
import devicesImage from '../assets/devices.jpg'
import dokiDokiForces from '../assets/custom/3.png'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home">
      <FrontpageHero
        title="AliceOS Prospect Park"
        subtitle="The framework you love, now calling your name."
        backgroundImageLocation={ frontpageHeroImage }
        callToActionText="Upgrade now"
        callToActionLink="/prospect-park/"
        largeText
      />
      <div css={ pageContentStyles }>
        <div css={ pageGridContainer }>
          <BasicCard
            title="Doki Doki Forces. Now in Prospect Park"
            cardDescription="This DDLC mod has been updated with AliceOS Prospect Park*"
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ dokiDokiForces }
            link="https://old.reddit.com/r/DDLCMods/comments/byzhd5/doki_forces_the_sound_test_roof_demoteaser_now/"
            />
          <BasicCard
            title="Prospect Park has landed."
            cardDescription="Get AliceOS Prospect Park today and start building great visual novel experiences."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ devicesImage }
            link="./download"
            />
        </div>
      </div>
      <div css={ pageContentStyles }>
        <small>*Doki Doki Forces is not an official Project Alice mod and is displayed here as a partnered mod.</small>
      </div>
    </Layout>
  )
}

export default IndexPage
