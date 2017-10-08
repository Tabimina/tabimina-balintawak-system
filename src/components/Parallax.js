import styled from 'styled-components'

export const ParallaxContainer = styled.div`
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`

const ParallaxLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  `

export const ParallaxLayerBack = styled(ParallaxLayer)`
  transform: translateZ(-1px) scale(2);
`

export const ParallaxLayerFront = styled(ParallaxLayer)`
  transform: translateZ(0);
`

export const ParallaxGroup = styled.div`
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
  // transform: translate3d(700px, 0, -800px) rotateY(30deg);
`