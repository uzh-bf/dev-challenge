# DBF Development Challenge - Requirements

## Constraints

Your application must satisfy the following basic constraints:

- It must be based on `React` and initialized with `create-react-app`.
- It must apply the `react-kanban` library for logic related to Kanban interactions. We recommend using the `uncontrolled` version of the board to save you a lot of boilerplate.
- It must satisfy the acceptance criteria of all high-priority user stories (as defined below), plus one additional user story of your choosing. Any further work is optional, but we encourage you to invest some time into styling the application.

Besides these basic requirements, you may use any libraries or tools you like. For example, you could apply libraries and frameworks like `Semantic UI` or `Material UI` to help with styling.

## User Stories

### User Story 1: Kanban Board - Overview

- required: board
  - dragging cards around, adding and removing cards -> use uncontrolled
  - capabilities: reading documentation, working with props, understanding controlled/uncontrolled
  - hint: using additional props for add card and remove card (!)

### User Story 2: Kanban Board - Task Card

- required: card
  - create react component for single card
  - show properties as defined in example data (title, description, assignee, due date, priority)
  - capabilities: creating a react component, (styling)
