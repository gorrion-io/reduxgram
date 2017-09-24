import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Media from "react-responsive";

import { PhotoListContainer } from "@src/containers/photo-list";
import { PhotoContainer } from "@src/containers/photo";
import { SearchBarContainer } from "@src/containers/search-bar";

export class App extends Component {

    readonly widthThreshold = 960;

    render() {
        return (
            <div>
                <Media maxWidth={this.widthThreshold}>
                    <Switch >
                        <Route path="/:profileName/:photoId" component={PhotoContainer} />
                        <Route path="/:profileName" component={PhotoListContainer} />
                    </Switch>
                </Media>
                <Media minWidth={this.widthThreshold+1}>
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "35vw", position: "relative" }}>
                            <Route path="/:profileName" component={PhotoListContainer} />
                        </div>
                        <div style={{ width: "65vw", position: "relative" }}>
                            <Route path="/:profileName/:photoId" component={PhotoContainer} />
                        </div>
                    </div>
                </Media>
                <Route exact path="/" component={SearchBarContainer} />
            </div>
        );
    }
}
