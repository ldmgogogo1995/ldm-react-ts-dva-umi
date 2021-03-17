import React from 'react'


export type Props<P = {}> = P & React.PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>;
export type FuncComp<P = {}> = React.FC<Props<P>>