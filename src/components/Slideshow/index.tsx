/* eslint-disable jsx-a11y/alt-text */
/** 
 * 轮播图组件
 * @author luodaming
 * @since 2021/05/09 10:19
 * 
 * */
import React, { useEffect, useRef } from 'react'
import './index.less'
import { move } from './utils'

interface Item {
    imgUrl: string;
    key: string
}
type IProps = {
    list: Array<Item>
}

const Slideshow: React.FC<IProps> = ({ list }) => {
    let timer: any = null
    const listRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (listRef.current) {
            timer = setInterval(() => {
                move({ element: listRef.current as HTMLDivElement })
            }, 60)
            move({ element: listRef.current })
        }
        return () => {
            clearInterval(timer)
        }
    })
    return <div className="container">
        <div className="img-list" ref={listRef} style={{ width: `${list.length * 1000}px` }}>
            {list.map(item => <div className="img-item" key={item.key}><img src={item.imgUrl} /></div>)}
        </div>
    </div>
}
export default Slideshow