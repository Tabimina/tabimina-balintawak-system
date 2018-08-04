import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Copyright = styled.div`
  margin-top: auto;
  text-align: center;
`

const Content = styled.div`
  flex: 1;
`

export default props =>
  <Wrapper>
    <Content>
      <div>Contact Us</div>
    </Content>

    <Copyright>
      <span>Copyright &copy; {new Date().getFullYear()}</span>
    </Copyright>
  </Wrapper>