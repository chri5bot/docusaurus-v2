import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/Layout"

import media from "../styles/media"

import logo from "../images/home/banner_bg_1.png"

const Background = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.background});
  background-size: contain;
  background-repeat: no-repeat;
`

const MainTitle = styled.h1`
  color: #008de6;
  ${media.md`
    font-size: 300%;
  `}
`

const SubTitle = styled.h2`
  color: #008de6;
`

const SectionButton = styled.div`
  margin-top: 20px;
`

const Button = styled(Link)`
  border: 1px solid #008de6;
  border-radius: 3px;
  color: #008de6;
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
`

function Home() {
  return (
    <Layout showMenu={false}>
      <Background background={logo}>
        <MainTitle>Skypostal Developers</MainTitle>
        <SubTitle>Easy to Integrate Logistics API</SubTitle>
        <SectionButton>
          <Button to="/api">API-BOX</Button>
          <Button to="/api">API-TEST</Button>
        </SectionButton>
      </Background>
    </Layout>
  )
}

export default Home
