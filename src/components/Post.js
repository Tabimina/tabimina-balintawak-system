import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: white;
  padding: 30px;
`

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 10px;
`

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  border: 2px solid;
`

const Content = styled.div`
  margin: 20px 0;
`

const Button = styled.button`
  background: black;
  color: white;
`

export default props =>
  <Wrapper>
    <Title>{props.title}</Title>

    <Image>Blog Image</Image>

    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis ullamcorper feugiat. Curabitur
      ut rhoncus mauris, in vestibulum eros. Fusce sed interdum urna. Maecenas tempor dictum eros, sit amet porttitor urna pharetra eget. Duis at turpis turpis. Duis lobortis est quis diam lobortis iaculis. Pellentesque pharetra metus a magna egestas tempus. Integer id est rutrum ex mollis scelerisque. Nulla posuere nibh nec tellus cursus hendrerit.
    </Content>

    <Button>
      read more
    </Button>
  </Wrapper>