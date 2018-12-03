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
                  seek my own answers and to constantly evaluate how I appear to others, how my
                  actions will affect my future, and how my actions might affect those around me.{' '}
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
                  for me. By the end of high school and many failed projects, I wisened up, and
                  figured out that{' '}
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
                  solution. <Highlight>There's no such thing as an impossible challenge,</Highlight>{' '}
                  especially for a team.
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
                  rephrasing ideas into language that non-experts can understand, and{' '}
                  <Highlight>I've grown comfortable presenting to an audience.</Highlight>
                </PosedSubSection>
              </SubSectionGroup>
            </ScrollTrigger>
          </Section>
          <Section title="Teamwork Philosophy">
            <ScrollTrigger onEnter={() => this.reveal('three')}>
              <SubSectionGroup pose={three ? 'enter' : ''}>
                <PosedSubSection title="Know what makes your team tick" initialPose="exit">
                  The best teams are those where the team members understand each others'
                  backgrounds.{' '}
                  <Highlight>
                    Understanding your peers' stories and communicating your own creates a safe,
                    productive team.
                  </Highlight>{' '}
                  Whether I'm in a group or working with team members one-on-one, I always put time
                  into uncovering their values and backgrounds. This gives me the added bonus of
                  being able to eliminate discontent among team members — if one team member is
                  upset at another, often times I can put the attacked team member's perspective
                  into terms that the upset team member can understand and empathize with.
                </PosedSubSection>
                <PosedSubSection title="Give everybody a stake" initialPose="exit">
                  You can't motivate someone to do something that won't benefit them in the end. As
                  such, especially in a team,{' '}
                  <Highlight>
                    you need to make sure that every team member feels like they are contributing to
                    the end goal of a project.
                  </Highlight>{' '}
                  I check in with each of my team members to ensure that they feel like they're
                  adding to the project's value. If they don't feel that way, then our team is not
                  reaching its maximum potential, so I either find work that they find is more
                  valuable, or I help them find the value in their work.
                </PosedSubSection>
                <PosedSubSection title="Be a little skeptical" initialPose="exit">
                  "Healthy skepticism" is a useful tool in a diverse team.{' '}
                  <Highlight>
                    Being skeptical of a commonly-accepted idea among the group provides an
                    opportunity for other, possibly trampled-upon ideas to come to the surface,
                  </Highlight>{' '}
                  contributing to the group's discussion and perspectives — also ensuring that your
                  team understands why they're doing what they're doing. So, I play devil's advocate
                  when there are alternatives to our selected approach, or I believe there are
                  underrepresented ideas within the team.
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
