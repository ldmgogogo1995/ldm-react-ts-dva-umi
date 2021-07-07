import { useCallback, useEffect, useState } from "react"

const getWidowSize = (normalNumber: number): SizeType => window.innerWidth > normalNumber ? 'large' : 'small'

type SizeType = 'large' | 'small'

const useWidowSize = (initSize: number): SizeType => {
    const [size, setSize] = useState<SizeType>(() => getWidowSize(initSize))
    const handler = useCallback(() => {
        setSize(() => getWidowSize(initSize))
    }, [])
    useEffect(() => {
        window.addEventListener('resize', handler)
        return () => {
            window.removeEventListener('resize', handler)
        }
    }, [])
    return size
}

export default useWidowSize