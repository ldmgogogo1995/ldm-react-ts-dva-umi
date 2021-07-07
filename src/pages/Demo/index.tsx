import usePersistFn from "@/customHooks/usePersisFn"
import useUpdateEffect from "@/customHooks/useUpdateEffect"
import { Card, Input, Row, Col, Button } from "antd"
import React, { useRef, useState } from 'react'
import { useCallback } from "react"
const DemoPage = () => {
    const [count, setCount] = useState<number>(0)
    const showCountCommon = useCallback(() => {
        console.log('看看这个count是多少呢:', count)
    }, [count])
    const showCountPersistFn = usePersistFn(() => {
        console.log('看看这个count是多少呢usePersistFn:', count)
    })
    return <Card>
        <button onClick={() => setCount((x) => x + 1)}>
            Add
        </button>
        <div style={{ marginTop: 32 }}>
            <ExpensiveTree showCount={showCountCommon} />
        </div>
        <div style={{ marginTop: 32 }}>
            <ExpensiveTree showCount={showCountPersistFn} />
        </div>
    </Card>
}
const ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {
    const renderCountRef = useRef(0)
    renderCountRef.current += 1
    return <div>
        <p>Render Count：{renderCountRef.current}</p>
        <button type='button' onClick={showCount} >showParentCount</button>

    </div>
})
export default DemoPage