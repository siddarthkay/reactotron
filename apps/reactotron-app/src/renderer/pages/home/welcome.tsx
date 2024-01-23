import React from "react"
import { shell } from "electron"
import styled from "styled-components"
import { reactotronLogo } from "../../images"
import { EmptyState } from "reactotron-core-ui"
import { useAnalytics } from "../../util/analyticsHelpers"

const WelcomeText = styled.div`
  font-size: 1.25em;
`

const Container = styled.div`
  display: flex;
  padding: 4px 8px;
  margin: 20px 0px 50px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => props.theme.backgroundLighter};
  color: ${(props) => props.theme.foreground};
  align-items: center;
  justify-content: center;
  text-align: center;
`

function openDocs() {
  shell.openExternal("https://docs.infinite.red/reactotron/")
}

function Welcome() {
  const { sendExternalLinkAnalyticsEvent } = useAnalytics()

  return (
    <EmptyState image={reactotronLogo} title="Welcome to Reactotron!">
      <WelcomeText>Connect a device or simulator to get started.</WelcomeText>
      <WelcomeText>Need to set up your app to use Reactotron?</WelcomeText>
      <Container onClick={()=>{
        sendExternalLinkAnalyticsEvent("docs")
        openDocs()}}>Check out the docs here!</Container>
    </EmptyState>
  )
}

export default Welcome
