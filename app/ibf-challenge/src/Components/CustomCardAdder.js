import React from "react";
import {Button, Form, Modal} from "semantic-ui-react";

const CustomCardAdder = ({ column, addCard }) => {

    /**
     * Used to control opening & closing of modal
     */
    const [open, setOpen] = React.useState(false);

    /**
     * Used to save input of form
     */
    const [form, setForm] = React.useState({});

    /**
     * Saves the input of a form field on change
     * @param e
     * @param name
     * @param value
     */
    const onChange=(e,{name, value})=>{
        setForm({...form,[name]:value});
    };

    /**
     * Closes Form
     */
    function closeForm() {
        setOpen(false)
    }

    /**
     * Adds a Card with the form values to the column
     */
    function addTask() {
        addCard(column, { title: form.title, description: form.description, assignee: form.assignee, priority: form.priority, due_date: form.duedate })
    }
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Add Task</Button>}
        >
            <Modal.Header>Add Task</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Input label="Title" name="title" onChange={onChange} placeholder='Title'/>
                    <Form.Input label="Description" name="description" onChange={onChange} placeholder='Description'/>
                    <Form.Input label="Assignee" name="assignee" onChange={onChange} placeholder='Assignee'/>
                    <Form.Input label="Priority" name="priority" onChange={onChange} placeholder='Priority'/>
                    <Form.Input label="Due Date" name="duedate" onChange={onChange} placeholder='DueDate'/>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button
                    content="Confirm"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => {
                        closeForm();
                        addTask();
                    }}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
};

export default CustomCardAdder