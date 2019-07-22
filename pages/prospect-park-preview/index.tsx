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
import previewPageDesktop from '../../assets/preview/desktop.png'
import previewPageSetup from '../../assets/preview/setup-assistant.png'
import previewPageUpdate from '../../assets/preview/update.png'


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
        <a href="https://nextdocs.aliceos.app">View the docs</a>
        <a>Coming soon</a>
      </MiniNavbar>
      <PlatformNameComponent
        title="AliceOS 2.0.0"
        subtitle="Prospect Park"
        backgroundImageLocation={ previewPageImage }
      />
      <div css={ pageContentStyles }>
        <div css={ pageSectionStyles(true) }>
          <h1>Now calling your name.</h1>
          <p>
            AliceOS Prospect Park brings amazing new features and improvements to the robust framework you already know and love. Features such as Desktop, Inventories, and Express Setup make the experience much better, and developers will absolutely enjoy working with AliceOS Prospect Park.
          </p>
          <img src={ previewPageDevice }/>
        </div>
        <div css={ pageGridContainer }>
          <BasicCard
            title="A redefined design that matters."
            cardDescription="AliceOS Prospect Park has been redesigned from the ground up, focusing on clarity, simplicity, and elegants. Permission requests are now front and center, notifications take on a dark shade, and the new Inter typeface helps bring readability and clarity. AliceOS has never looked this good before."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ previewPageDesign }
            imageOnTop
            />
          <BasicCard
            title="Meet your new desktop."
            cardDescription="AliceOS Prospect Park brings a brand-new Desktop core service to easily view and run any AliceOS apps. With a simple, sleek design, it's easy to get what you need done without hassle. And with the new app system for AliceOS, developing apps that work with the Desktop couldn't be simpler."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ previewPageDesktop }
            />
          <BasicCard
            title="Set up your game. Faster."
            cardDescription="The brand-new Setup Assistant is ready for action. With the new Express Mode, Setup is just as easy as reading your game's agreement and making a player name. And, with the new bootloader, Setup will run automatically for you on first boot."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ previewPageSetup }
            />
          <BasicCard
            title="Super easy to install. And even easier to update."
            cardDescription="AliceOS Prospect Park has been redesigned to be completely portable for any Ren'Py game. All it takes to install it is just adding a single file. And every new AliceOS release works with the latest versions of the Ren'Py SDK that's available, meaning that you can both update Ren'Py and AliceOS without issue."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ previewPageUpdate }
            imageOnTop
            />
        </div>
      </div>
    </Layout>
  )
}

export default PreviewPage
