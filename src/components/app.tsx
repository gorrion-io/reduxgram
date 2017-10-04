import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { PhotoListContainer } from "@src/containers/photo-list";
import { PhotoContainer } from "@src/containers/photo";
import { SearchBarContainer } from "@src/containers/search-bar";
import { MobileView, DesktopView } from "@src/components/helpers/media-queries";
import { ColumnContainer, LeftColumn, RightColumn } from "@src/components/helpers/layout";

export class App extends Component {

    render() {
        return (
            <div>
                <MobileView>
                    <Switch>
                        <Route path="/:profileName/:photoId" component={PhotoContainer} />
                        <Route path="/:profileName" component={PhotoListContainer} />
                    </Switch>
                </MobileView>
                <DesktopView>
                    <ColumnContainer>
                        <LeftColumn>
                            <Route path="/:profileName" component={PhotoListContainer} />
                        </LeftColumn>
                        <RightColumn>
                            <Route path="/:profileName/:photoId" component={PhotoContainer} />
                        </RightColumn>
                    </ColumnContainer>
                </DesktopView>
                <Route exact path="/" component={SearchBarContainer} />
            </div>
        );
    }
}
