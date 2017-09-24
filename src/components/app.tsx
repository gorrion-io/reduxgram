import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { PhotoListContainer } from "@src/containers/photo-list";
import { PhotoContainer } from "@src/containers/photo";
import { SearchBarContainer } from "@src/containers/search-bar";

export class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/:profileName/:photoId" component={PhotoContainer} />
                    <Route path="/:profileName" component={PhotoListContainer} />
                    <Route path="/" component={SearchBarContainer} />
                </Switch>
            </div>
        );
    }
}
