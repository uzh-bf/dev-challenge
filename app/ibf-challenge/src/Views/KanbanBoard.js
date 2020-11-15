import Board from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import "../index.css";
import React from "react";
import {Header} from "semantic-ui-react";

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
        },
        {
            id: 4,
            title: "Production",
            cards: [
                {
                    id: 6,
                    title: "Task6",
                    description: "Description6",
                    assignee: "Max Muster",
                    priority: "HIGH",
                    due_date: "2020-10-17"
                },
                {
                    id: 7,
                    title: "Task7",
                    description: "Description7",
                    assignee: "Philip Flury",
                    priority: "HIGH",
                    due_date: "2020-10-17"
                },
            ]
        }
    ]
};

/**
 * Kanban Board Component
 * @returns {*}
 * @constructor
 */
function KanbanBoard() {
    return (
        <Board
            initialBoard={board} // Ensures uncontrolled Board
            renderColumnHeader={({ title, cards }) => ( // Custom Header that displays amount of cards in column
                <Header as='h3'>
                    {`${title}: ${cards.length}`}
                </Header>
            )}
        />
    );
}

export default KanbanBoard;