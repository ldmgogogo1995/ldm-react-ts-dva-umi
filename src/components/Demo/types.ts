export enum Actions {
    ADD = "ADD",
    REMOVE = "REMOVE",
    EDIT = 'EDIT',
    RESET = 'RESET'
}
export type Item = {
    id: string
    name: string
}
export interface IAction {
    type: Actions,
    payload: Item|string
}
export type IReducer = (initState: Array<Item>, action: IAction) => Array<Item>