import React, { Component } from 'react'
import styled from 'styled-components'
import hero from '../assets/hero.jpg'
import ms from '../typography'
import Button from '../components/Button'
import Layout from '../components/Layout'
import { BrowserConsumer } from '../context/BrowserContext'
import { viewportWidthLarge, headerHeightLarge } from '../constants'
import './index.css'

const HeroSection = styled.div`
  position: relative;
  z-index: -1;
  margin-top: 0;

  &.large {
    margin-top: -${headerHeightLarge}px;
  }
`

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  padding: 0 2em;
  font-size: 0.75em;

  &.large {
    top: ${headerHeightLarge}px;
    font-size: 1em;
  }
`

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
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
  margin-top: -10px;
`

const Section = styled.section`
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

const Hero = ({ isLarge }) => {
  const largeClass = isLarge ? 'large' : ''

  return (
    <HeroSection className={largeClass}>
      <HeroImg src={hero} />

      <HeroContent className={largeClass}>
        <HeroTitle>
          <TabiminaTitle>TABIMINA</TabiminaTitle>
          <BalintawakTitle>BALINTAWAK</BalintawakTitle>
        </HeroTitle>

        <HeroButton>
          Join Now
        </HeroButton>
      </HeroContent>
    </HeroSection>
  )
}

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <BrowserConsumer>
          {
            ({ viewportWidth }) => {
              const isLarge = viewportWidth > viewportWidthLarge

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
