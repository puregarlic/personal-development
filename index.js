import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { PoseGroup } from 'react-pose'
import ScrollTrigger from 'react-scroll-trigger'

import jpeg from './assets/me2.jpeg'

import { Image } from './components/image'
import { Content, Section, Footer, PosedSubSection, SubSectionGroup } from './components/content'
import { Wrapper } from './components/wrapper'
import { PosedHeader, Arrow } from './components/header'
import { Name, Heading, Paragraph, Highlight } from './components/text'

class Website extends Component {
  constructor(props) {
    super(props)
    this.state = {
      one: false,
      two: false,
      three: false,
      chevronVisible: false
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        chevronVisible: !this.state.chevronVisible
      })
    }, 1100)
  }

  reveal(section) {
    this.setState({
      [section]: true
    })
  }

  render() {
    const { one, two, three, chevronVisible } = this.state

    return (
      <Wrapper>
        <PosedHeader initialPose="exit" pose="enter">
          <Image src={jpeg} />
          Hey, my name is <Name>Graham Barber.</Name>
          <Arrow visible={chevronVisible} />
        </PosedHeader>
        <Content>
          <Section title="My Background">
            <ScrollTrigger onEnter={() => this.reveal('one')}>
              <SubSectionGroup pose={one ? 'enter' : ''}>
                <PosedSubSection title="Raised with self-awareness" initialPose="exit">
                  Raised by a civil engineer and a librarian, I've been trained from an early age to
                  seek my own answers and constantly evaluate how I appear to others, how my actions
                  will affect my future, and how my actions might affect those around me.{' '}
                  <Highlight>
                    It's never good enough for me to simply take an action — I need to be
                    consciously aware of the reasoning behind it.
                  </Highlight>
                </PosedSubSection>
                <PosedSubSection title="Trained for attention to detail" initialPose="exit">
                  The part of Ohio where I come from was academically rigorous, so I was pushed from
                  the beginning by my parents, my teachers, and my peers to perform high-quality
                  work. When I moved to Oregon, I found out that the standards weren't as high, but{' '}
                  <Highlight>
                    I discovered I can differentiate myself from others by always giving my best
                    effort.
                  </Highlight>
                </PosedSubSection>
                <PosedSubSection title='Former "idea guy"' initialPose="exit">
                  In high school, I was well known for coming up with bold, creative ideas for video
                  games and software. Early on, I swore that I would never learn to program, because
                  there would always be someone else who would be willing and capable of doing so
                  for me. By the end of high school, I wisened up, and figured out that{' '}
                  <Highlight>
                    if anybody is going to bring my ideas to life, it's going to have to be myself.
                  </Highlight>
                </PosedSubSection>
              </SubSectionGroup>
            </ScrollTrigger>
          </Section>
          <Section title="Team Skills">
            <ScrollTrigger onEnter={() => this.reveal('two')}>
              <SubSectionGroup pose={two ? 'enter' : ''}>
                <PosedSubSection title="Problem solving" initialPose="exit">
                  I'm adept at taking an obstacle and breaking it down into smaller, solvable
                  portions — a practice called computational thinking. Whether it's a scheduling
                  issue, a conflict of interest, or a difficult class assignment, I will find a
                  solution. <Highlight>There's no such thing as an impossible challenge.</Highlight>
                </PosedSubSection>
                <PosedSubSection title="Technical expertise" initialPose="exit">
                  Whether it's IT troubleshooting, programming, graphic design, or merely finding
                  information, <Highlight>I possess the skills needed to execute</Highlight> using
                  the technology available. And if what I possess isn't enough, I know how to
                  leverage my network to find someone who can help.
                </PosedSubSection>
                <PosedSubSection title="Public speaking" initialPose="exit">
                  After years of sharing my ideas with friends and family, I put the time in to
                  learn how to present them in a professional format. I've developed a skill for
                  rephrasing ideas in an easier-to-understand form, and{' '}
                  <Highlight>I've grown comfortable presenting to an audience.</Highlight>
                </PosedSubSection>
              </SubSectionGroup>
            </ScrollTrigger>
          </Section>
          <Section title="My Background">
            <ScrollTrigger onEnter={() => this.reveal('three')}>
              <SubSectionGroup pose={three ? 'enter' : ''}>
                <PosedSubSection title="Some other thing" initialPose="exit">
                  European perch glowlight danio earthworm eel fire bar danio, "flabby whalefish
                  tailor Pacific hake." Broadband dogfish sea devil longnose sucker wormfish, banded
                  killifish giant sea bass eulachon.
                </PosedSubSection>
                <PosedSubSection title="Some other thing" initialPose="exit">
                  European perch glowlight danio earthworm eel fire bar danio, "flabby whalefish
                  tailor Pacific hake." Broadband dogfish sea devil longnose sucker wormfish, banded
                  killifish giant sea bass eulachon.
                </PosedSubSection>
                <PosedSubSection title="Some other thing" initialPose="exit">
                  European perch glowlight danio earthworm eel fire bar danio, "flabby whalefish
                  tailor Pacific hake." Broadband dogfish sea devil longnose sucker wormfish, banded
                  killifish giant sea bass eulachon.
                </PosedSubSection>
              </SubSectionGroup>
            </ScrollTrigger>
          </Section>
          <Section>
            <Footer>
              <Highlight>Made with ❤️ by Graham Barber</Highlight>
            </Footer>
          </Section>
        </Content>
        <style>{`
          body {
            margin: 0;
          }
        `}</style>
      </Wrapper>
    )
  }
}

render(<Website />, document.getElementById('app'))
