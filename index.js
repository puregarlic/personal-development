import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

import jpeg from './assets/me2.jpeg'

import { Image } from './components/image'
import { Content, Section, Footer } from './components/content'
import { Wrapper } from './components/wrapper'
import { PosedHeader } from './components/header'
import { Name, Heading, Paragraph, Highlight } from './components/text'

class Website extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameVisible: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        nameVisible: true
      })
    }, 750)
  }

  render() {
    const { nameVisible } = this.state

    return (
      <Wrapper>
        <PosedHeader pose={nameVisible ? 'enter' : 'exit'}>
          <Image src={jpeg} />
          Hey, my name is <Name>Graham Barber.</Name>
        </PosedHeader>
        <Content>
          <Section>
            <Heading>All About Me</Heading>
            <Paragraph>
              European perch glowlight danio earthworm eel fire bar danio, "flabby whalefish tailor
              Pacific hake." Broadband dogfish sea devil longnose sucker wormfish, banded killifish
              giant sea bass eulachon.
            </Paragraph>
            <Paragraph>
              Kingfish hatchetfish gar, regal whiptail catfish bowfin sea bass smelt loach minnow
              South American darter whiting galjoen fish. Sweeper stonefish sixgill shark pikeperch
              American sole rohu threadsail goosefish weeverfish clown triggerfish Ragfish. Southern
              grayling seamoth silverside, <Highlight>oceanic whitetip shark</Highlight>,
              daggertooth pike conger scat pikeperch Norwegian Atlantic salmon. Amur pike, armoured
              catfish, warmouth? Giant wels rough scad barred danio betta; lyretail mud cat
              thornyhead lampfish stickleback sea devil European perch. Plunderfish goldeye
              fingerfish flier denticle herring Rabbitfish dragonfish Jack Dempsey fathead sculpin
              barracuda catla barracudina platy gulper eel. Snailfish daggertooth pike conger tui
              chub sockeye salmon dorado surgeonfish: buri; walleye pollock, tubeshoulder cuskfish.
            </Paragraph>
          </Section>
          {/* <Section>
            <Footer>
              <Highlight>Copyright 2018 Graham Barber</Highlight>
            </Footer>
          </Section> */}
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
