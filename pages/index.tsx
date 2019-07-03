import * as React from 'react'
import Layout from '../components/Layout'
import FrontpageHero from '../components/FrontpageHero'
import BasicCard from '../components/BasicCard'

import { NextPage } from 'next';


/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { pageContentStyles, pageGridContainer } from '../utils/commonStyles'
import frontpageHeroImage from '../assets/preview/hero.jpg'
import dokiDokiForces from '../assets/custom/3.png'
import techPreviewImage from '../assets/custom/2.png'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home">
      <FrontpageHero
        title="AliceOS Prospect Park"
        subtitle="The framework you love, now calling your name."
        backgroundImageLocation={ frontpageHeroImage }
        callToActionText="See the preview"
        callToActionLink="/prospect-park-preview/"
        showPreviewText
        largeText
      />
      <div css={ pageContentStyles }>
        <div css={ pageGridContainer }>
          <BasicCard
            title="AliceOS Technical Preview"
            cardDescription="More control, power, and a spring cleaning. Ready to download."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            link="https://github.com/ProjectAliceDev/aliceos/releases/tag/1.0.0beta2"
            image={ techPreviewImage }
            />
          <BasicCard
            title="Now showing: Doki Doki Forces"
            cardDescription="Now embracing AliceOS as the staple framework"
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ dokiDokiForces }
            link="https://old.reddit.com/r/DDLCMods/comments/byzhd5/doki_forces_the_sound_test_roof_demoteaser_now/"
            />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
