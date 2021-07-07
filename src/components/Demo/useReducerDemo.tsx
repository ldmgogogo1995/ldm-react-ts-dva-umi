
import React, { useCallback, useReducer, useState } from 'react'
import { FuncComp } from "@/types/commen";
import Modal from 'antd/lib/modal/Modal';
import { Button, Input, Form } from 'antd';
import { reducer, initName, calcuInitState } from './utils'
import { Actions, IReducer, Item, } from './types';

const Demo: FuncComp = () => {
    const [state, dispatch] = useReducer<IReducer, string>(reducer, initName, calcuInitState)
    const [visible, setVisible] = useState<boolean>(false)
    const [form] = Form.useForm()
    const handleAdd = () => {
        form.validateFields().then((val) => {
            dispatch({
                type: Actions.ADD,
                payload: val as Item
            })

        }).then(setVisible.bind(this, false))
    }
    const handleDel = useCallback((id: string) => {
        dispatch({
            type: Actions.REMOVE,
            payload: id
        })
    }, [])
    return <div className='todolist'>
        {state.map(item => <div key={item.id}><Button onClick={() => { setVisible(true) }}>添加</Button> <Input key={item.id} value={item.name} /> <Button type='dashed' onChange={() => handleDel(item.id)}>删除</Button></div>)}
        <Modal visible={visible} title='todolist' footer={[
            <Button type='primary' key='submit' onClick={handleAdd}>
                确定
            </Button>
            ,
            <Button onClick={() => setVisible(false)} key='cancel'>
                取消
            </Button>
        ]} onCancel={() => setVisible(false)} >
            <Form form={form} >
                <Form.Item label='静静的努力' name='id' rules={[{ required: true, message: '请填写id' }, {
                    validator: (_, val) => {
                        if (state.find(item => item.id === val)) {
                            return Promise.reject(new Error('已存在该单据'))
                        }
                        return Promise.resolve()

                    }
                }]}>
                    <Input />
                </Form.Item>
                <Form.Item label='慢慢的变强' name='name'>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>


    </div>
}
export default Demo