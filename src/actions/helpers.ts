import { ThunkAction } from "@src/types/redux";
import { RootAction } from "@src/actions/interfaces";

// type ActionCreator<T extends DispatchFunction | ActionFuncion> = T;
type ActionFuncion = (...args: any[]) => RootAction;
type DispatchFunction = (...args: any[]) => ThunkAction<void|Promise<void>>;

export function createActionCreator<F extends DispatchFunction | ActionFuncion>(actionCreator: F): F;
export function createActionCreator(param: any) { return param; }
