import { useState, useCallback } from 'react'
import useUpdateEffect from '../useUpdateEffect'
/** 
 * 创建webStorage
 * @author 罗大明😁
 * @since 2021-07-07
*/
export interface IFuncUpdater<T> {
    (previousState?: T): T
}

export interface IFuncStorage {
    (): Storage
}
export type StorageStateResult<T> = [T | undefined, (value?: T | IFuncUpdater<T>) => void];
export type StorageStateResultHasDefaultValue<T> = [T, (value?: T | IFuncUpdater<T>) => void];
function isFunction<T>(obj: any): obj is T {
    return typeof obj === 'function'
}
export const createUseStorageState = (nullishStorage: Storage | null) => {
    //重载
    function useStorageState<T = undefined>(key: string): StorageStateResult<T>;
    function useStorageState<T>(
        key: string,
        defaultValue: T | IFuncUpdater<T>
    ): StorageStateResultHasDefaultValue<T>
    //实现
    function useStorageState<T>(key: string, defaultValue?: T | IFuncUpdater<T>) {
        return defaultValue
    }
}
const updateState = useCallback()