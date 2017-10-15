import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import hero from '../assets/hero.jpg'
import ms from '../layouts/typography'
import Button from '../components/Button'
import {
  ParallaxContainer,
  ParallaxSection,
} from '../components/Parallax'
import colors from '../layouts/colors'

const HeroImgHeight = '320px'

// const HeroSection = styled(ParallaxSection)`
const HeroSection = styled.div`
  position: relative;
  padding: 7vw;
`
const HeroImg = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
`

const HeroButton = styled(Button)`
  font-size: ${ms(4)};
  margin: 20px 0;
`

const HeroTitle = styled.h1`
  color: white;
`

const TabiminaTitle = styled.div`
  font-size: ${ms(13)};
  letter-spacing: 0.15em;
`

const BalintawakTitle = styled.div`
  font-size: ${ms(7)};
  font-weight: 100;
  margin-top: -15px;
`

const Section = styled.section`
  height: 500px;
`

const AboutSection = styled.div`
  background: black;
  opacity: 0.9;
`

const AboutContent = styled.div`
  max-width: 450px;
  color: white;
  padding: 100px 40px 40px 40px;
`

const AboutContentTitle = styled.h2`
  font-size: ${ms(10)};
`

const AboutContentParagraph = styled.p`
  margin: 20px 0;
  font-size: ${ms(0)};
`

const SystemSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
`

const SystemPanel = styled.div`
  flex: 1 0 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${colors.arsenic};
  color: white;
  font-size: ${ms(5)};
  cursor: pointer;

  &::after {
    content: '';
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${colors.lightRed};
    opacity: 0.6;
  }

  &:hover {
    &::after {
      display: block;
    }
  }
`

const SystemPanelTitle = styled.h2`
  text-align: center;
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50px;
  height: 35px;
  width: 100vw;
  background: rgba(37, 33, 40, 0.7);
  padding: 7px;
  z-index: 99;
`

const HeaderLink = styled(Link)`
  font-size: ${ms(2)};
  color: white;
  margin: 5px;
  font-weight: bold;
`

const Something = styled.div`
  width: 100%;
  height: 300px;
  background: ${colors.lightRed};
`

const Hero = () => (
  <HeroSection>
    <HeroImg src={hero} />

    <HeroTitle>
      <TabiminaTitle>TABIMINA</TabiminaTitle>
      <BalintawakTitle>BALINTAWAK SYSTEM</BalintawakTitle>
    </HeroTitle>

    <HeroButton>
      Join Now
    </HeroButton>
  </HeroSection>
)

const About = () => (
  <AboutSection url={hero}>
    <AboutContent>
      <AboutContentTitle>
        BOB "SILVER" TABIMINA
      </AboutContentTitle>

      <AboutContentParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare mi sit amet dignissim
        ullamcorper. Vivamus posuere eget massa quis porta. Ut suscipit sit amet ex nec placerat. Nam in
        massa pellentesque, sagittis mauris vel, lacinia nisl. Nullam vestibulum, orci in lobortis
        commodo, felis ex varius purus, non finibus nibh quam et purus. Sed mollis tincidunt vulputate. F
        usce risus lectus, faucibus a augue eu, laoreet viverra nisl. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum nec tempus tortor.
        Suspendisse scelerisque convallis mauris sed porta. Donec sed consectetur justo, in mollis elit.
      </AboutContentParagraph>

      <AboutContentParagraph>
        Sed et venenatis risus, sed pretium metus. Donec dapibus ullamcorper tortor a finibus. Suspendisse
        vel orci consequat, molestie sem sed, vehicula nulla. Phasellus congue, lorem in pellentesque
        pellentesque, erat nisi condimentum dui, in luctus est nisl eget dolor. Nulla faucibus mauris
        magna, eu egestas libero commodo at. Nam suscipit tortor leo, pharetra sollicitudin turpis
        vehicula nec. Sed consequat tristique elit eget malesuada. Aenean ac magna pellentesque, consectetur
        neque ut, lacinia dui. Etiam molestie turpis mauris, in vestibulum quam maximus in.
      </AboutContentParagraph>
    </AboutContent>
  </AboutSection>
)

const System = () => (
  <SystemSection>
    <SystemPanel>
      <SystemPanelTitle>ZERO MIND</SystemPanelTitle>
    </SystemPanel>
    <SystemPanel>
      <SystemPanelTitle>STICK</SystemPanelTitle>
    </SystemPanel>
    <SystemPanel>
      <SystemPanelTitle>BOXING</SystemPanelTitle>
    </SystemPanel>
    <SystemPanel>
      <SystemPanelTitle>FORCE MULTIPLIERS</SystemPanelTitle>
    </SystemPanel>
  </SystemSection>
)

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header>
          <HeaderLink to='#system'>
            System
          </HeaderLink>

          <HeaderLink to='#about'>
            About
          </HeaderLink>

          <HeaderLink to='#something'>
            Something
          </HeaderLink>
        </Header>

        <ParallaxContainer>
          <section>
            <Hero />
          </section>

          <section id="system">
            <System />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="something">
            <Something />
          </section>
        </ParallaxContainer>
      </div>
    )
  }
}
