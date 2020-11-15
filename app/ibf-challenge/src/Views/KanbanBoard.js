import Board from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import "../index.css";
import React from "react";
import {Header} from "semantic-ui-react";

/**
 * Initial Board
 * @type {{columns: [{cards: [{description: string, id: number, title: string}], id: number, title: string}, {cards: [{description: string, id: number, title: string}], id: number, title: string}, {cards: [{description: string, id: number, title: string}], id: number, title: string}]}}
 */
const board = {
    columns: [
        {
            id: 1,
            title: 'Backlog',
            cards: [
                {
                    id: 1,
                    title: 'Add card',
                    description: 'Add capability to add a card in a column'
                },
            ]
        },
        {
            id: 2,
            title: 'In Progress',
            cards: [
                {
                    id: 2,
                    title: 'Add card',
                    description: 'Add capability to add a card in a column'
                },
            ]
        },
        {
            id: 3,
            title: 'Done',
            cards: [
                {
                    id: 3,
                    title: 'Drag-n-drop support',
                    description: 'Move a card between the columns'
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