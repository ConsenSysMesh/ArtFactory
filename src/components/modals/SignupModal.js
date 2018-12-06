import React, { Component } from 'react'
import { Button, Modal, Icon, Form} from 'semantic-ui-react'
import getTransactionStatus from '../../utils/getTransactionStatus'

class SignupModal extends Component {
  state = {
    modalOpen: false,
    email: null,
    nickname: null,
    createArtistId: null,
  }

  handleOpen  = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  handleSignup = async () => {
    const { drizzle, drizzleState } = this.props;
    const { nickname, email } = this.state

    const contract = drizzle.contracts.ArtFactory;

    const createArtistId = contract.methods["createArtist"]
                                   .cacheSend(nickname, email, { from: drizzleState.accounts[0]});

    this.setState({ createArtistId });
  }

  render() {
    const transactionStatus = getTransactionStatus(this.props.drizzleState, this.state.createArtistId)
    return(
      <Modal open={this.state.modalOpen} onClose={this.handleClose} >
        <Modal.Header>Create A New Account</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field required>
                <label>Nickname</label>
                <input placeholder='Nickname' onChange={(e) => {this.setState({nickname: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Email</label>
                <input placeholder='Email' onChange={(e) => {this.setState({email: e.target.value})}} />
              </Form.Field>
            </Form>
          </Modal.Description>

          <h3>{!!transactionStatus && `Transaction status: ${transactionStatus}`}</h3>

        </Modal.Content>

        <Modal.Actions>
          <Button color='green' onClick={this.handleSignup} inverted>
            <Icon name='checkmark'/> Signup
          </Button>

          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='close'/> Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}

export default SignupModal
