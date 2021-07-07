import * as React from 'react';
import { Modal, Form, Input, Spin } from 'antd'
import { FuncComp } from '@/types/commen';
import { UserListItem } from '../data';
type IProps = {
    data: UserListItem | null
    visible: boolean
    isEdit: boolean
    onClose: () => void
    loading: boolean
}
const RoleDetail: FuncComp<IProps> = ({ visible, isEdit, onClose, data, loading }): React.ReactElement => {
    const [form] = Form.useForm()
    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 16 }
    }
    React.useEffect(() => {
        if (visible) {
            console.log(data, 'form')
            form.setFieldsValue(data)
        }
    }, [visible])
    return (<Modal
        title={`${isEdit ? '修改' : '查看'}角色信息`}
        visible={visible}
        onCancel={onClose}
        destroyOnClose
    >
        <Spin spinning={loading}>
            <Form {...layout} form={form} >
                <Form.Item label="用户名" name="name" >
                    <Input placeholder="请输入" disabled={!isEdit} />
                </Form.Item>
                <Form.Item label="密码" name="password" >
                    <Input placeholder="请输入" disabled={!isEdit} />
                </Form.Item>
                <Form.Item label="账号" name="account" >
                    <Input placeholder="请输入" disabled={!isEdit} />
                </Form.Item>
            </Form>
        </Spin>
    </Modal>)
}
export default RoleDetail