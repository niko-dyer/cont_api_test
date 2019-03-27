import React from 'react'
import { Card } from 'semantic-ui-react'
import { AccountConsumer } from '../providers/AccountProvider'

const Account = () => (
    <AccountConsumer>
        {value => (
            <Card>
                <Card.Content>
                    <Card.Header>{ value.fullName }</Card.Header>
                    <Card.Meta>
                        { value.username }
            </Card.Meta>
                </Card.Content>
                <Card.Content>
                    <p>Email: {value.email}</p>
                </Card.Content>
            </Card>
        )}
    </AccountConsumer>
)

export default Account