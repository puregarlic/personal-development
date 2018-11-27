import styled from 'styled-components'

export const Content = styled.div`
  background: white;
  padding: 3em;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 360px) {
    padding: 1em;
  }
`

export const Section = styled.div`
  width: 100%;
  max-width: 1024px;
  display: block;
`

export const Footer = styled.div`
  font-size: 1em;
  margin-top: 5em;
  font-family: Inter UI, sans-serif;
  text-align: center;
  display: block;
`
