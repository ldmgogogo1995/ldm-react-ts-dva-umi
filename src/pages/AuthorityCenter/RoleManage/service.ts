/** 
 * 接口存放
*/
import { request } from 'umi'
/** 
 * 请求用户列表
*/
export const getUserList = async (): Promise<any> => request('/api/user/list')

/** 
 * 请求用户详情
*/
export const getUserDetail = async (id: number): Promise<any> => request('/api/user/detail', { params: { id } })