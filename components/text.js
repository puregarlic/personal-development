import styled from 'styled-components'

export const Name = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  text-decoration: underline;

  @media (max-width: 415px) {
    font-size: 2.5em;
  }
`

export const Heading = styled.h1`
  font-size: 4em;
  font-family: Inter UI, sans-serif;
  text-decoration: underline;

  @media (max-width: 415px) {
    font-size: 3em;
  }
`

export const SubHeading = styled.h2`
  font-size: 2em;
  font-family: Inter UI, sans-serif;
`

export const Paragraph = styled.p`
  font-size: 1.5em;
  font-family: Inter UI, sans-serif;

  @media (max-width: 415px) {
    font-size: 1.5em;
  }
`

export const Highlight = styled.span`
  /* background-clip: text;
  -webkit-background-clip: text; */
  /* color: transparent; */
  /* background-image: linear-gradient(-225deg, #ff057c 0%, #8d0b93 50%, #321575 100%); */
  color: #8d0b93;
  font-weight: 600;
`
