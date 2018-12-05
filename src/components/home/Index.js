import React, { Component, Fragment } from 'react';
import { Segment, Card, Container, Grid, List, Header } from 'semantic-ui-react';
import styled from 'styled-components'
import { Redirect } from 'react-router'


const BackgroundContainer = styled.div `
  background-image: linear-gradient(to right, #D3959B , #BFE6BA);
  height: 420px;
`

class HomeIndex extends Component {
  state = { loading: true, drizzleState: null, isCityDataKey: null };

  componentDidMount() {
  }

  render() {

    return(
      <Fragment>
        <BackgroundContainer>
          <div className="ui vertical masthead center aligned segment">
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <div className="text">
              <h1 className="ui inverted header">
                Test

              </h1>
            </div>
          </div>
        </BackgroundContainer>

      </Fragment>
    )
  }
}

export default HomeIndex;
