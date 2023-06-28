import { useState } from "react"
import { useParams } from "react-router"
import { useFetching } from "../Utils/UtilHook"
import { Card, Button, Modal, Input, Form, Upload } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import axios from "../Utils/Axios";
import { useCallback } from "react"
const { Meta } = Card
export default function UserDetail() {
    const [userDetail, setUserDetail] = useState(null)
    const { idUser } = useParams()
    const [fileList, setFileList] = useState([])
    const [form] = Form.useForm()

    const handleFetching = useCallback(res => {
        setUserDetail(res.data.data)
    }, [])
    useFetching(`/users/${idUser}`, handleFetching)
    const [isModalOpen, setIsModalOpen] = useState(false);



    const save = (value) => {
        const formData = new FormData()
        formData.append('email', value.email)
        formData.append('name', value.name)

        if (fileList.length > 0) {
            formData.append('myfile', fileList[0].originFileObj)

        }
        axios.put(`/users/${idUser}`, formData).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    const showModal = () => {
        setIsModalOpen(true);
        form.setFieldValue({
            name: userDetail.name,
            email: userDetail.email
        })
    };

    const getFile = (e) => {
        console.log('upload', e);
        setFileList([e.fileList.pop()])

        if (Array.isArray(e)) {
            return e
        }
        return e && e.fileList
    }

    const upload = <Form.Item name='myfile' label="Upload" getValueFromEvent={getFile}>
        <Upload
            name='avatar'
            className='avatar-uploader'
            listType="picture-card"
            beforeUpload={() => false}
            fileList={fileList}
        >
            <PlusOutlined />

        </Upload>
    </Form.Item>

    return (userDetail ? <>

        <Button type="primary" onClick={showModal}>
            Update User
        </Button>
        <Form
            form={form}
            onFinish={save}
        >
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={isModalOpen ? upload : <img alt={userDetail.name} src={userDetail.avatar} />}
            >

                {isModalOpen ?
                    <Form.Item name='name' label="Name">
                        <Input type='text' />
                    </Form.Item>
                    : <p>{userDetail.name}</p>}

                {isModalOpen ?
                    <Form.Item name='email' label="Email">
                        <Input typeof="text" />
                    </Form.Item>
                    : <p>{userDetail.email}</p>}

                {isModalOpen ? <Button type="primary" htmlType="submit" onClick={() => { }}>Save</Button> : null}

            </Card>
        </Form>

    </> : null

    )
}