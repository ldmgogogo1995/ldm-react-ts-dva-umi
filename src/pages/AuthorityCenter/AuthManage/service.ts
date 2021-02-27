/** 
 * 接口存放
*/
import {request} from 'umi'
export const getUserList = async():Promise<any> => request('/api/user/list')