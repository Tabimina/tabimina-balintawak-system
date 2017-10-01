import React from 'react'
import styled from 'styled-components';
import Link from 'gatsby-link'

const HeaderTitle = styled.h1`
  font-size: 2.4em;
  color: white;
  padding: 20px 10px;
`;

const HeaderWrapper = styled.div`
  position: relative;
  height: 300px;
  background-color: #34495E;
`;

export default () => (
  <div>
    <HeaderWrapper>
      <Link to="/">
        <HeaderTitle>
          Tabimina Balintawak System
        </HeaderTitle>
      </Link>
    </HeaderWrapper>
  </div>
)
