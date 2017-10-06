import { RootAction } from "@src/redux/action-shapes";
import { RootState } from "@src/redux/root-state";

export type Reducer<State> = (state: State|undefined, action: Readonly<RootAction>) => State;

export interface Dispatch {
    <ReturnType = any, ExtraArgument = undefined>(thunkAction: ThunkAction<ReturnType, ExtraArgument>): ReturnType;
    <ActionType extends RootAction>(action: ActionType): ActionType;
}

export type ThunkAction<ReturnType, ExtraArgument = undefined> = (dispatch: Dispatch, getState: () => RootState, extraArgument?: ExtraArgument) => ReturnType;
