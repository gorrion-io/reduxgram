import { RootAction } from "@src/redux/interfaces";
import { RootState } from "@src/redux/state";

export type Reducer<State> = (state: State|undefined, action: Readonly<RootAction>) => State;

export interface Dispatch {
    <ReturnType = any, ExtraArgument = undefined>(thunkAction: ThunkAction<ReturnType, ExtraArgument>): ReturnType;
    <ActionType extends RootAction>(action: ActionType): ActionType;
}

export type ThunkAction<ReturnType, ExtraArgument = undefined> = (dispatch: Dispatch, getState: () => RootState, extraArgument?: ExtraArgument) => ReturnType;
