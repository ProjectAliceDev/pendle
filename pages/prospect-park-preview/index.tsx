import * as React from 'react'
import Layout from '../../components/Layout'
import PlatformNameComponent from '../../components/PlatformName'
import BasicCard from '../../components/BasicCard'
import MiniNavbar from '../../components/MiniNavbar'

import { NextPage } from 'next';

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { pageContentStyles, pageGridContainer, pageSectionStyles } from '../../utils/commonStyles'
import previewPageImage from '../../assets/preview/hero.jpg'
import previewPageDevice from '../../assets/preview/devices.jpg'
import previewPageDesign from '../../assets/preview/perms.png'


const PreviewPage: NextPage = () => {
  return (
    <Layout title="Prospect Park (Coming soon)">
      <MiniNavbar
        title="AliceOS Preview"
        buttonText="Read the docs"
        buttonLink="https://nextdocs.aliceos.app"
        transparent
        hideButton
      >
        <a disabled>Coming soon</a>
      </MiniNavbar>
      <PlatformNameComponent
        title="AliceOS"
        subtitle="Prospect Park"
        backgroundImageLocation={ previewPageImage }
      />
      <div css={ pageContentStyles }>
        <div css={ pageSectionStyles(true) }>
          <h1>Now calling your name.</h1>
          <p>
            AliceOS Prospect Park brings amazing new features and improvements to the robust framework you already know and love. Features such as Desktop, Inventories, and Express Setup make the experience much better, and developers will absolutely love working with AliceOS Prospect Park.
          </p>
          <img src={ previewPageDevice }/>
        </div>
        <div css={ pageGridContainer }>
          <BasicCard
            title="A redefined design that matters."
            cardDescription="AliceOS Prospect Park has been redesigned from the ground up, focusing on clarity, simplicity, and elegants. Permission requests are now front and center, notifications take on a dark shade, and the new Inter typeface helps bring readability and clarity."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ previewPageDesign }
            imageOnTop
            />
          <BasicCard
            title="Now showing: Doki Doki Forces"
            cardDescription="Now embracing AliceOS as the staple framework"
            color="#fafafa"
            noShadow={ true }
            strictPadding
            link="https://old.reddit.com/r/DDLCMods/comments/byzhd5/doki_forces_the_sound_test_roof_demoteaser_now/"
            />
        </div>
      </div>
    </Layout>
  )
}

export default PreviewPage
