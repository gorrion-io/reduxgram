import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { MobileView, DesktopView } from "@src/common/helpers/components/media-queries";
import { PhotoContainer, PhotoListContainer } from "@src/features/photos/containers";
import { ColumnContainer, LeftColumn, RightColumn } from "@src/common/helpers/components/layout";
import { SearchProfileContainer } from "@src/features/home/SearchProfileContainer";

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
                <Route exact path="/" component={SearchProfileContainer} />
            </div>
        );
    }
}
