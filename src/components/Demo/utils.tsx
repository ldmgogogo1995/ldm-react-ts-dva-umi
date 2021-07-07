/* eslint-disable @typescript-eslint/no-use-before-define */

import { IAction, IReducer, Item } from "./types"

export const initName = 'luodaming'

export const reducer: IReducer = (initState: Array<Item>, action: IAction) => {
    switch (action.type) {
        case 'ADD':
            if (typeof action.payload === 'string') {
                return [...initState]
            }
            return [...initState, action.payload];
        case 'RESET':
            if (typeof action.payload === 'string') {
                return [...initState]
            }
            return calcuInitState(action.payload?.name)
        default:
            return calcuInitState(initName)
    }

}
export const calcuInitState = (name?: string): Array<Item> => ([{
    id: `11${name}`,
    name: name ?? '暂无名称'
}])