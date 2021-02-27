import React from 'react';
import { useRequest } from 'umi'
import { PageContainer } from '@ant-design/pro-layout';
import { ColumnsType } from 'antd/es/table';
import { UserListItem } from './data'
import { getUserList } from './service'
import {
  Table
} from 'antd'
import { FuncComp } from '@/types/commen';

const AuthList: FuncComp = () => {
  const { data, loading, error } = useRequest(getUserList)
  const columns: ColumnsType<UserListItem> = [
    {
      title: '序号',
      dataIndex: 'sequence',
      render: (...arg) => arg[2] + 1
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '账号',
      dataIndex: 'account',
      key: 'account'
    }, {
      title: '密码',
      dataIndex: 'password',
      key: 'password'
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (text: string, record: UserListItem) => (<>
        <a onClick={() => seeDetail(record)}>查看</a>
        <a onClick={()=>edit(record)}>编辑</a>
      </>)
    }
  ]
  /*-----------------------自定义方法--------------------------*/
  const seeDetail = React.useCallback((record: UserListItem) => {
    console.log('查看详情')
  }, [])
  const edit = React.useCallback((record: UserListItem) => {
    console.log('修改账号信息');

  }, [])
  if (error) {
    return <div>
      请求出错啦！原因如下：{error}
    </div>
  } else {
    return <PageContainer>


      <Table
        dataSource={data}
        columns={columns}
        loading={loading}
        rowKey='id'
      />
    </PageContainer>;
  }

};
export default AuthList