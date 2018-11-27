import posed from 'react-pose'
import styled from 'styled-components'

export const Header = styled.div`
  min-height: 78vh;
  padding: 0.5em;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  color: white;
  font-size: 5em;
  font-weight: 600;
  font-family: Inter UI, sans-serif;

  @media (max-width: 360px) {
    font-size: 4em;
    hyphens: auto;
    padding-left: 8px;
  }
`

export const PosedHeader = posed(Header)({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
})
