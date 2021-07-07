import { useEffect, useRef } from 'react'

/** 
 * 初次不执行的useEffct
 * @author  luodaming
 * @since 2021-07-07
*/
const useUpdateEffect: typeof useEffect = (effect, deps) => {
    const isMounted = useRef<boolean>(false)
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
        } else {
            return effect()
        }
    }, deps)
}
export default useUpdateEffect