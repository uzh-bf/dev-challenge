import React from 'react'
import { Card } from 'semantic-ui-react'

/**
 * Custom Card that displays the task
 */
class CustomCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:  null,
            title: this.props.title,
            description: this.props.description,
            assignee: this.props.assignee,
            priority: this.props.priority,
            due_date: this.props.due_date
        };
    }



    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{this.state.title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{this.state.priority}</span>
                    </Card.Meta>
                    <Card.Description>
                        {this.state.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {`Assigned to: ${this.state.assignee}`}
                </Card.Content>
                <Card.Content extra>
                    {`Due: ${this.state.due_date}`}
                </Card.Content>
            </Card>
        )
    }
}
export default CustomCard