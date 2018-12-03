import styled from 'styled-components'

export const Name = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  text-decoration: underline;

  @media (max-width: 500px) {
    font-size: 2.5em;
  }

  @media (max-width: 500px) {
    font-size: 2em;
  }
`

export const Heading = styled.h1`
  font-size: 4em;
  font-family: Inter UI, sans-serif;
  text-decoration: underline;

  @media (max-width: 550px) {
    font-size: 3.5em;
  }

  @media (max-width: 415px) {
    font-size: 3em;
  }

  @media (max-width: 320px) {
    font-size: 2em;
  }
`

export const SubHeading = styled.h2`
  font-size: 2em;
  font-family: Inter UI, sans-serif;
  margin-top: 1.5em;
  margin-bottom: 0.5em;

  @media (max-width: 320px) {
    font-size: 1.5em;
    margin-top: 1em;
  }
`

export const Paragraph = styled.p`
  font-size: 1.5em;
  font-family: Spectral, serif;

  @media (max-width: 415px) {
    font-size: 1em;
  }
`

export const Highlight = styled.span`
  color: #8d0b93;
  font-weight: 700;
`
