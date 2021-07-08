import React, { useState } from 'react';
import { useRequest } from 'umi'
import { PageContainer } from '@ant-design/pro-layout';
import { ColumnsType } from 'antd/es/table';
import {
  Card,
  Divider,
  Table
} from 'antd'
import { FuncComp } from '@/types/commom';
import RoleDetail from './Detail'
import { getUserDetail, getUserList } from './service'
import { UserListItem } from './data'

const RoleManage: FuncComp = () => {
  /* -----------------------state--------------------------*/
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [isShow, setIsShow] = useState<boolean>(false)
  const [detailData, setDetailData] = useState<UserListItem | null>(null)
  // eslint-disable-next-line no-console
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
        <Divider type='vertical' />
        <a onClick={() => edit(record)}>编辑</a>
      </>)
    }
  ]
  /* -----------------------自定义方法--------------------------*/
  const seeDetail = React.useCallback((record: UserListItem) => {
    run(record.id)
    setIsEdit(false)
  }, [])
  const edit = React.useCallback((record: UserListItem) => {
    run(record.id)
    setIsEdit(true)
  }, [])
  const onClose = React.useCallback(() => {
    setIsShow(false)
  }, [])
  /* -----------------------后端请求--------------------------*/
  const { data, loading, error } = useRequest(getUserList)
  const { loading: DeatailLoding, run, } = useRequest(getUserDetail, {
    manual: true,
    onSuccess(data, param) {
      setDetailData(data)
      setIsShow(true)
    }
  })
  if (error) {
    return <div>
      请求出错啦！原因如下：{error}
    </div>
  }
  return <PageContainer>
    <RoleDetail visible={isShow} isEdit={isEdit} onClose={onClose} data={detailData} loading={DeatailLoding} />
    <Table
      dataSource={data}
      columns={columns}
      loading={loading}
      rowKey='id'
    />
    <Card>
    </Card>
  </PageContainer>;


};
export default RoleManage