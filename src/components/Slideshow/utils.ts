/**
 * 轮播图工具函数
*/
type moveConfig = {
    element: HTMLDivElement;
    direction?: string;
    step?: number;
}
const move: (config: moveConfig) => void = ({ element, direction = 'left', step = 10 }) => {
    let x = element.offsetLeft
    let y = element.offsetHeight
    element.style.left = x - step + 'px'
    console.log(x, y)
}
const getStyle = (element: any, attr: string) => {
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        return element.currentStyle[attr];
    }
}

export {
    move,
    getStyle
}