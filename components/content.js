import posed from 'react-pose'
import styled from 'styled-components'
import React, { forwardRef } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

import { Heading, SubHeading, Paragraph } from './text'

export const Content = styled.div`
  background: white;
  padding: 3em;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 415px) {
    padding: 1rem;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: block;
`

export const Section = ({ title, children }) => (
  <Container>
    {title && <Heading>{title}</Heading>}
    {children}
  </Container>
)

export const SubSection = forwardRef(({ title, children, ...props }, ref) => (
  <div ref={ref} {...props}>
    <SubHeading>{title}</SubHeading>
    <Paragraph>{children}</Paragraph>
  </div>
))

export const PosedSubSection = posed(SubSection)({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
})

export const SubSectionGroup = posed.div({
  enter: { opacity: 1, staggerChildren: 500, delay: 500 },
  exit: { opacity: 0 }
})

export const Footer = styled.div`
  font-size: 1em;
  /* margin-top: 5rem; */
  margin: 1em;
  font-family: Inter UI, sans-serif;
  text-align: center;
  display: block;
`
