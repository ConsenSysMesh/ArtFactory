import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components'

import SignupModal from './home/SignupModal';

const MenuWrapper = styled.div`
  border-bottom: 1px solid #e6e4e4;
`
const Logo = styled.p`
  font-size:20px;
  color: black;
  text-decoration: none;
`

class Header extends Component {

  displayAccountNumber() {
    const { account } = this.props;
    return account ? `${account.slice(0, 7)}...${account.slice(-3)}` : 'Signup'
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
            <Menu.Item onClick={this.OnAccountNumberClick}>{this.displayAccountNumber()}</Menu.Item>
          </Menu.Menu>
        </Menu>
      </MenuWrapper>
      <SignupModal
        ref={ instance => { this.signupModal = instance } }
      />
      </div>
    )
  }

}

export default Header;
