/** 
 * columns中render函数类型
*/
export type RenderFunction<T>=(text:string,record:T,index:number)=>React.ReactNode