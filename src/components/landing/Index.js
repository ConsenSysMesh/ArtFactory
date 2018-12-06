import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
// import { Redirect } from 'react-router'

const BackgroundContainer = styled.div `
  background-image: linear-gradient(to right, #D3959B , #BFE6BA);
  height: 420px;
`

class HomeIndex extends Component {
  componentDidMount() {
  }

  render() {
    return(
      <Fragment>
        <BackgroundContainer>
          <div className="center">

            <h2>Welcome to ArtFactory!</h2>

          </div>
        </BackgroundContainer>

      </Fragment>
    )
  }
}

export default HomeIndex;
