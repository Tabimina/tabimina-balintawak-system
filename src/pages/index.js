import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import hero from '../assets/hero.jpg'
import Button from '../components/Button'
import {
  ParallaxContainer,
  ParallaxGroup,
  ParallaxLayerBack,
  ParallaxLayerFront,
} from '../components/Parallax'

const HeroImgHeight = '320px'

const HeroImg = styled.img`
  transform: scale(1.5);
`

const HeroContent = styled(ParallaxLayerFront)`
  padding-top: 50px;
  padding-left: 50px;
`

const HeroButton = styled(Button)`
  font-size: 1.44em;
  margin: 20px 0;
`

const HeroImgWrapper = styled(ParallaxLayerBack)`
  // height: ${HeroImgHeight};
  background-color: black;
  opacity: 0.7;
`

const HeroTitle = styled.h1`
  color: white;
`

const TabiminaTitle = styled.div`
  font-size: 3.472em;
`

const BalintawakTitle = styled.div`
  font-size: 2.411em;
`

const AboutBack = styled(ParallaxLayerBack)`
  background-color: #F7B769;
`

const AbountFront = styled(ParallaxLayerFront)`
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 2.488em;
`

const SystemBack = styled(ParallaxLayerBack)`
  background-color: #424B54;
`

const SystemFront = styled(ParallaxLayerFront)`
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 2.488em;
`

const HeroSection = (props) => (
  <ParallaxGroup>
    <HeroImgWrapper>
      <HeroImg src={hero} />
    </HeroImgWrapper>

    <HeroContent>
      <HeroTitle>
        <TabiminaTitle>Tabimina</TabiminaTitle>
        <BalintawakTitle>Balintawak System</BalintawakTitle>
      </HeroTitle>

      <HeroButton>
        Join Now
      </HeroButton>
    </HeroContent>
  </ParallaxGroup>
)

const AboutSection = () => (
  <ParallaxGroup>
    <AboutBack />

    <AbountFront>
      <h1>About</h1>
    </AbountFront>
  </ParallaxGroup>
)

const SystemSection = () => (
  <ParallaxGroup>
    <SystemBack />

    <SystemFront>
      <h1>System</h1>
    </SystemFront>
  </ParallaxGroup>
)


export default class IndexPage extends Component {
  render() {
    return (
      <ParallaxContainer>
        <HeroSection />
        <AboutSection />
        <SystemSection />
      </ParallaxContainer>
    )
  }
}
