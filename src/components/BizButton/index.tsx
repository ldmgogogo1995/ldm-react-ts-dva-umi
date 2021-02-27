import { FuncComp } from '@/types/commen'
import * as React from 'react'
import { Button } from 'antd'
type IProps = {
    content: string | React.ReactNode
    className:string
}
const BizButton: FuncComp<IProps> = ({
    content,
    className
}) => {

    return (
        <Button className={className}>
            {content}
        </Button>
    )
}
export default BizButton