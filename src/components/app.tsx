import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { PhotoListContainer } from "@src/containers/photo-list";
import { PhotoContainer } from "@src/containers/photo";
import { SearchBarContainer } from "@src/containers/search-bar";
import { MobileView, DesktopView } from "@src/components/media-queries";

export class App extends Component {

    readonly leftToRightColumnRatio = 2 / 5;

    ColumnContainer = styled.div`
        display: flex;
        flex-direction: row;
    `;

    Column = styled.div`
        position: relative;
    `;

    LeftColumn = styled(this.Column)`
        width: ${this.leftToRightColumnRatio * 100}vw;
    `;

    RightColumn = styled(this.Column)`
        width: ${(1 - this.leftToRightColumnRatio) * 100}vw;
    `;

    render() {
        const { ColumnContainer, LeftColumn, RightColumn } = this;

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
