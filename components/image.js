import React from 'react'
import styled from 'styled-components'

export const Image = styled.img`
  border-radius: 50%;
  /* width: 3em; */
  width: 300px;
  margin-bottom: 1rem;
  box-shadow: 3px 7px 21px #00000077;
  border: 1rem solid white;

  @media (max-width: 415px) {
    width: 200px;
  }
`
