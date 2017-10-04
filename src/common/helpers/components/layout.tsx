import styled from "styled-components";

export const leftToRightColumnRatio = 2 / 5;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Column = styled.div`
    position: relative;
`;

export const LeftColumn = styled(Column)`
    width: ${leftToRightColumnRatio * 100}vw;
`;

export const RightColumn = styled(Column)`
    width: ${(1 - leftToRightColumnRatio) * 100}vw;
`;
