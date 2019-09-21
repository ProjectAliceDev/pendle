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
import previewPageInventories from '../../assets/preview/inventories.png'
import previewPageScreenkit from '../../assets/preview/screenkit.png'
import previewPageSetup from '../../assets/preview/setup-assistant.png'
import previewPageUpdate from '../../assets/preview/update.png'


const PreviewPage: NextPage = () => {
  return (
    <Layout title="Prospect Park (Coming soon)">
      <MiniNavbar
        title="AliceOS Preview"
        buttonText="Try the beta"
        buttonLink="./download"
        transparent
      >
        <a href="https://nextdocs.aliceos.app">View the docs</a>
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
            title="An entirely new desktop with new apps."
            cardDescription="AliceOS Prospect Park brings a brand-new Desktop core service to easily view and run any AliceOS apps. With a simple, sleek design, it's easy to get what you need done without hassle. And with the new app system for AliceOS, developing apps that work with the Desktop couldn't be simpler."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ previewPageDesktop }
            />
          <BasicCard
            title="An inventory both developers and players will love."
            cardDescription="AliceOS Prospect Park brings a new app called Inventories that makes it easy, fun, and fast to add an inventory system to any game. Developers will love how easy it is to get started with an inventory, and players will get to access their items in a fun way through both the HUD and app."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ previewPageInventories }
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
        <BasicCard
            title="A brand new setup assistant. Now ready for express checkout."
            cardDescription="The brand-new Setup Assistant is ready for action. Built around modularity, it's easy to add new steps to the assistant. The Setup Assistant also deeply integrates with the bootloader, meaning less code to call. And, with the new Express Mode, players will get to their game faster with just typing their player name."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ previewPageSetup }
            imageOnTop
        />
        <BasicCard
            title="Interfaces that are easy to use. And implement."
            cardDescription="AliceOS Prospect Park brings the brand-new ScreenKit framework, an easy way for developers to create beautiful user interfaces that work with AliceOS. Built on top of Ren'Py's screen language, it couldn't be faster to make great UIs. And, for players, it couldn't be better using them."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image={ previewPageScreenkit }
        />
        </div>
      </div>
    </Layout>
  )
}

export default PreviewPage
