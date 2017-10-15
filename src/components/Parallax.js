import styled from 'styled-components'

export const ParallaxContainer = styled.div`
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`

export const ParallaxSection = styled.div`
  /* Needed for children to be absolutely positioned relative to the parent. */
  position: relative;
  /* The height of the container. Must be set, but it doesn't really matter what the value is. */
  height: 100vh;

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    /*
    * Move the pseudo-element back away from the camera,
    * then scale it back up to fill the viewport.
    * Because the pseudo-element is further away, it appears
    * to move more slowly, like in real life.
    * */
    transform: translateZ(-1px) scale(2);
    /* Keep the image from overlapping sibling elements. */
    z-index: -1;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${({ url }) => url });
  }
`

// export const ParallaxGroup = styled.div`
//   position: relative;
//   height: 100vh;
//   transform-style: preserve-3d;
// `