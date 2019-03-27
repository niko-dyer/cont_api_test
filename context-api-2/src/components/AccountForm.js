import React from 'react'
import { Form } from 'semantic-ui-react'
import { AccountConsumer } from '../providers/AccountProvider'

class AccountForm extends React.Component {
    state = { 
        fullName: this.props.fullName, 
        username: this.props.username, 
        email: this.props.email 
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (e) => {
        e.preventDefault()
        const account = { ...this.state }
        this.props.updateAccount(account)
    }

    render() {
        const { fullName, username, email } = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    label='New Name'
                    type='text'
                    name='fullName'
                    value={fullName}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='New Username'
                    type='text'
                    name='username'
                    value={username}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='New Email'
                    type='text'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                />
                <Form.Button color='blue'>Save</Form.Button>
            </Form>
        )
    }
}

const ConnectedAccountForm = (props) => {
    return (
        <AccountConsumer>
            { value => (
                <AccountForm 
                    { ...props }
                    fullName={value.fullName}
                    username={value.username}
                    email={value.email}
                    updateAccount={value.updateAccount}
                />
            )}
        </AccountConsumer>
    )
}

export default ConnectedAccountForm