import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Homepage from "../Views/Homepage";
import KanbanBoard from "../Views/KanbanBoard";

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div>
                        <Route
                            path="/kanban"
                            exact
                            render={() => (
                                <KanbanBoard/>
                            )}
                        />
                        <Route
                            path="/homepage"
                            exact
                            render={() => (
                                <Homepage/>
                            )}
                        />
                        <Route path="/" exact render={() => <Redirect to={"/homepage"} />} />
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}
/*
* Don't forget to export your component!
 */
export default AppRouter;
