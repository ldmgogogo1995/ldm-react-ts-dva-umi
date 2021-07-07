// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useRef } from "react"

export function useConstractor(cb = () => { }) {
    const ref = useRef<boolean>(false)
    // 标记一下 如果执行过就不再执行
    if (ref.current) return
    cb()
    ref.current = true
}