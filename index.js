import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { PoseGroup } from 'react-pose'
import ScrollTrigger from 'react-scroll-trigger'

import jpeg from './assets/me2.jpeg'

import { Image } from './components/image'
import { Content, Section, Footer, PosedSubSection, SubSectionGroup } from './components/content'
import { Wrapper } from './components/wrapper'
import { PosedHeader, Arrows } from './components/header'
import { Name, Heading, Paragraph, Highlight } from './components/text'

class Website extends Component {
  constructor(props) {
    super(props)
    this.state = {
      one: false,
      two: false,
      three: false
    }
  }

  reveal(section) {
    this.setState({
      [section]: true
    })
  }

  render() {
    const { one, two, three } = this.state

    return (
      <Wrapper>
        <PosedHeader initialPose="exit" pose="enter">
          <Image src={jpeg} />
          Hey, my name is <Name>Graham Barber.</Name>
          <Arrows />
        </PosedHeader>
        <Content>
          <Section title="My Background">
            <ScrollTrigger onEnter={() => this.reveal('one')}>
              <SubSectionGroup pose={one ? 'enter' : ''}>
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
          <Section title="My Background">
            <ScrollTrigger onEnter={() => this.reveal('two')}>
              <SubSectionGroup pose={two ? 'enter' : ''}>
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
