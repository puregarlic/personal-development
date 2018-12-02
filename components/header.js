import posed from 'react-pose'
import styled from 'styled-components'
import React from 'react'
import { ChevronsDown } from 'react-feather'

export const Header = styled.div`
  min-height: 100vh;
  padding-bottom: 0.5em;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  color: white;
  font-size: 5em;
  font-weight: 600;
  font-family: Inter UI, sans-serif;

  @media (max-width: 415px) {
    font-size: 2em;
    hyphens: auto;
    padding: 0 0.5em;
  }
`

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  width: 100%;
`

export const Arrows = () => (
  <ArrowsContainer>
    <ChevronsDown size={48} />
    <ChevronsDown size={48} />
    <ChevronsDown size={48} />
  </ArrowsContainer>
)

export const PosedHeader = posed(Header)({
  enter: { opacity: 1, delay: 750 },
  exit: { opacity: 0 }
})
