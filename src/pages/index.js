import React, { Component } from 'react'
import styled from 'styled-components'
import hero from '../assets/hero.jpg'
import ms from '../pages/typography'
import Button from '../components/Button'
import Layout from '../components/Layout'
import colors from './colors'
import { BrowserConsumer } from '../context/BrowserContext'
import { viewportWidthLarge } from '../constants'
import './index.css'

const HeroSection = styled.div`
  padding: 0 7vw;
`
const HeroImg = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  z-index: -1;
  width: 100%;

  &.large {
    top: 0;
  }
`

const HeroButton = styled(Button)`
  font-size: ${ms(4)};
  margin: 20px 0;
`

const HeroTitle = styled.h1`
  color: white;
`

const Content = styled.div`
  background: white;
  padding: 10px 0;

  section + section {
    margin-top: 10px;
  }
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
  position: sticky;
  top: 0;
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  height: 250px;
  background: black;
  padding: 10px;

  @media (min-width: ${viewportWidthLarge}px) {
    height: 350px;
  }
`

const SectionTitle = styled.h1`
  justify-self: center;
  align-self: flex-end;
  color: white;
  font-size: 1.75em;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;

  &.right {
    grid-column: 2;
  }
`

const FontWeightBold = styled.span`
  font-weight: 900;
`

const SectionContent = styled.div`
  grid-row: 2;
  justify-self: center;
  align-self: flex-start;
  color: white;
  padding: 0.75em;
  max-width: 350px;

  &.right {
    grid-column: 2;
  }

  @media (min-width: ${viewportWidthLarge}px) {
    padding: 1.75em;
  }
`

const Hero = ({ isLarge }) => (
  <HeroSection>
    <HeroImg src={hero} className={isLarge ? 'large' : ''} />

    <HeroTitle>
      <TabiminaTitle>TABIMINA</TabiminaTitle>
      <BalintawakTitle>BALINTAWAK</BalintawakTitle>
    </HeroTitle>

    <HeroButton>
      Join Now
    </HeroButton>
  </HeroSection>
)

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <BrowserConsumer>
          {
            ({ viewportWidth }) => {
              const isLarge = viewportWidth > 500

              return (
                <>
                  <Hero isLarge={isLarge} />

                  <Content>
                    <Section>
                      <SectionTitle>
                        <FontWeightBold>Zero</FontWeightBold> Mind
                      </SectionTitle>

                      <SectionContent>
                        <FontWeightBold>Tabimina Balintawak</FontWeightBold> is the only art that would teach how to achieve the zero mind
                        state. This is the missing link of every martial arts.
                      </SectionContent>
                    </Section>

                    <Section>
                      <SectionTitle className="right">
                        <FontWeightBold>Stick</FontWeightBold> Fighting
                      </SectionTitle>

                      <SectionContent className="right">
                        <FontWeightBold>Tabimina Balintawak</FontWeightBold> uses a single 'olisi' as the training tool to bring out the necessary
                        reaction, which are innate within the human body.
                      </SectionContent>
                    </Section>

                    <Section>
                      <SectionTitle>
                        <FontWeightBold>Bare Hands</FontWeightBold> Boxing
                      </SectionTitle>

                      <SectionContent>
                        <FontWeightBold>Tabimina Balintawak</FontWeightBold> teaches how the movements are translated from stick fighting to bare hands and
                        boxing, neutralizing your opponent in the most expeditious manner.
                      </SectionContent>
                    </Section>

                    <Section>
                      <SectionTitle className="right">
                        <FontWeightBold>Force</FontWeightBold> Multipliers
                      </SectionTitle>

                      <SectionContent className="right">
                        <FontWeightBold>Tabimina Balintawak</FontWeightBold> teaches knife fighting, dulo-dulo or any force multipliers. The key is
                        adaptation to the weapon at hand. This is made possible thru the core teaching of the
                        stick art of Tabimina Balintawak.
                      </SectionContent>
                    </Section>
                  </Content>
                </>
              )
            }
          }
        </BrowserConsumer>
      </Layout>
    )
  }
}
