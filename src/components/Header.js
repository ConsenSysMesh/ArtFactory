import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import styled from 'styled-components'

import SignupModal from './modals/SignupModal';

const MenuWrapper = styled.div`
  border-bottom: 1px solid #e6e4e4;
`
const Logo = styled.p`
  font-size:20px;
  color: black;
  text-decoration: none;
`

class Header extends Component {
  state = {
    isArtistDataKey: null
  }

  displayAccountNumber() {
    // TODO: Implement logic to display address if user is already registered as artist
    const { account } = this.props;
    return this.isArtist() ? `${account.slice(0, 7)}...${account.slice(-3)}` : 'Start'
  }

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const { nickname, email } = this.state

    const contract = drizzle.contracts.ArtFactory;
    const isArtistDataKey = contract.methods["signedUp"].cacheCall(drizzleState.accounts[0])
    this.setState({ isArtistDataKey });
  }

  isArtist() {
    const { ArtFactory } = this.props.drizzleState.contracts;

    const isArtistRequest = ArtFactory.signedUp[this.state.isArtistDataKey];
    return isArtistRequest ? isArtistRequest.value : false;
  }

  OnAccountNumberClick = () => {
    this.signupModal.handleOpen();
  }

  render() {
    return(
      <div>
      <MenuWrapper>
        <Menu secondary size="large">
          <Menu.Item>
            <a href="/">
              <Logo>ArtFactory</Logo>
            </a>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item >
              <Button primary inverted onClick={this.OnAccountNumberClick}>{this.displayAccountNumber()}</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </MenuWrapper>
      <SignupModal
        ref={ instance => { this.signupModal = instance } }
        drizzle={ this.props.drizzle }
        drizzleState={ this.props.drizzleState }
      />
      </div>
    )
  }

}

export default Header;
