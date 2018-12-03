import posed from 'react-pose'
import styled from 'styled-components'
import React from 'react'
import { ChevronDown } from 'react-feather'

export const Header = styled.div`
  min-height: 100vh;
  padding: 0 0.5em 0 0.5em;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  color: white;
  font-size: 5em;
  font-weight: 600;
  font-family: Inter UI, sans-serif;

  @media (max-width: 650px) {
    padding: 0;
    font-size: 3em;
  }

  @media (max-width: 500px) {
    font-size: 2em;
    hyphens: auto;
    padding: 0 0.5em;
  }

  @media (max-width: 320px) {
    align-items: center;
    text-align: center;
  }
`

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  width: 100%;
`

export const Chevron = posed(ArrowsContainer)({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
})

export const Arrow = ({ visible }) => (
  <Chevron pose={visible ? 'enter' : 'exit'}>
    <ChevronDown size={48} />
  </Chevron>
)

export const PosedHeader = posed(Header)({
  enter: { opacity: 1, delay: 750 },
  exit: { opacity: 0 }
})
