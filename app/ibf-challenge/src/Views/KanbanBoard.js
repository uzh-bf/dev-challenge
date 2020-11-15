import Board from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import "../index.css";
import React from "react";
import {Header, Segment, Button} from "semantic-ui-react";
import CustomCard from "../Components/CustomCard";
import CustomCardAdder from "../Components/CustomCardAdder";
import { Link } from "react-router-dom";

/**
 * Initial Board
 * @type {{columns: [{cards: [{due_date: string, description: string, id: number, assignee: string, title: string, priority: string}, {due_date: string, description: string, id: number, assignee: string, title: string, priority: string}, {due_date: string, description: string, id: number, assignee: string, title: string, priority: string}], id: number, title: string}, {cards: [{due_date: string, description: string, id: number, assignee: string, title: string, priority: string}], id: number, title: string}, {cards: [{due_date: string, description: string, id: number, assignee: string, title: string, priority: string}], id: number, title: string}, {cards: [{due_date: string, description: string, id: number, assignee: string, title: string, priority: string}, {due_date: string, description: string, id: number, assignee: string, title: string, priority: string}], id: number, title: string}]}}
 */
const board = {
    columns: [
        {
            id: 1,
            title: "Backlog",
            cards: [
                {
                    id: 1,
                    title: "Task1",
                    description: "Describtion1",
                    assignee: "Philip Flury",
                    priority: "HIGH",
                    due_date: "2020-10-17"
                },
                {
                    id: 2,
                    title: "Task2",
                    description: "Description2",
                    assignee: "Philip Flury",
                    priority: "HIGH",
                    due_date: "2020-10-17"
                },
                {
                    id: 3,
                    title: "Task3",
                    description: "Description3",
                    assignee: "Max Muster",
                    priority: "HIGH",
                    due_date: "2020-10-17"
                },
            ]
        },
        {
            id: 2,
            title: "In Progress",
            cards: [
                {
                    id: 4,
                    title: "Task4",
                    description: "Description4",
                    assignee: "Philip Flury",
                    priority: "HIGH",
                    due_date: "2020-10-17"
                },
            ]
        },
        {
            id: 3,
            title: "Done",
            cards: [
                {
                    id: 5,
                    title: "Task5",
                    description: "Description5",
                    assignee: "Max Muster",
                    priority: "HIGH",
                    due_date: "2020-10-17"
                },
            ]
        }
    ]
};

/**
 * When the user adds a new card through the default card adder template, this callback will be called
 * passing the updated board and the new card.
 * @param newCard
 */
function onCardNew (newCard) {
    return {
        id: Date.now,
        ...newCard
    }
}

/**
 * Kanban Board Component
 * @returns {*}
 * @constructor
 */
function KanbanBoard() {
    return (
        <Segment>
            <div className="App">
                <Header as='h1'>Kanban Board</Header>
                <Link to="/homepage">
                    <Button>
                        Back to Homepage
                    </Button>
                </Link>
            </div>
            <Board
                initialBoard={board}
                allowAddCard={{ on: "top" }}
                onNewCardConfirm={onCardNew}
                renderCardAdder={CustomCardAdder}
                onCardNew={console.log}
                renderColumnHeader={({ title, cards }) => (
                    <Header as='h3'>
                        {`${title}: ${cards.length}`}
                    </Header>
                )}
                renderCard={({ title, description, assignee, priority, due_date}) => (
                    <CustomCard title={title}
                                description={description}
                                assignee={assignee}
                                priority={priority}
                                due_date={due_date}
                    />
                )}
            />
        </Segment>
    );
}

export default KanbanBoard;