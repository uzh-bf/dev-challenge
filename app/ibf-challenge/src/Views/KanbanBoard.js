import Board from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import "../index.css";
import React from "react";


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

function KanbanBoard() {
    return (
        <Board initialBoard={board} />
    );
}

export default KanbanBoard;