import { PlusOutlined } from '@ant-design/icons';
// import {
//     Button,
//     DatePicker,
//     Form,
//     Input,
//     Upload,
// } from 'antd';
// import { useState } from 'react';
// import { useNavigate } from 'react-router';
// import axios from '../Utils/Axios';

// export default function AddUser() {
//     const [fileList, setFileList] = useState([])
//     const nav = useNavigate()
//     const handleForm = (value) => {
//         const formData = new FormData()
//         formData.append('email', value.email)
//         formData.append('password', value.password)
//         formData.append('name', value.name)
//         formData.append('phone', value.phone)
//         formData.append('dateOfBirth', value.dateOfBirth.toString())
//         formData.append('myfile', fileList[0].originFileObj)

//         axios.post('/users', formData).then(res => {
//             console.log('res', res)
//             nav('/')
//         }).catch(err => {
//             console.log('err', err);
//         })
//     }
//     const getFile = (e) => {
//         console.log('upload', e);
//         setFileList([e.fileList.pop()])

//         if (Array.isArray(e)) {
//             return e
//         }
//         return e && e.fileList
//     }
//     return (
//         <>

//             <Form
//                 onFinish={handleForm}

//                 labelCol={{
//                     span: 4,
//                 }}
//                 wrapperCol={{
//                     span: 14,
//                 }}
//                 layout="horizontal"
//                 style={{
//                     maxWidth: 600,
//                 }}
//             >
//                 <Form.Item name='email' label="Email">
//                     <Input />
//                 </Form.Item>

//                 <Form.Item name='password' label="Password">
//                     <Input />
//                 </Form.Item>

//                 <Form.Item name='name' label="Ho va ten">
//                     <Input />
//                 </Form.Item>

//                 <Form.Item name='phone' label="So dien thoai">
//                     <Input />
//                 </Form.Item>

//                 <Form.Item name='dateOfBirth' label="Ngay sinh">
//                     <DatePicker format="DD/MM/YYYY" />
//                 </Form.Item>


//                 <Form.Item name='myfile' label="Upload" getValueFromEvent={getFile}>
//                     <Upload
//                         name='avatar'
//                         className='avatar-uploader'
//                         listType="picture-card"
//                         beforeUpload={() => false}
//                         fileList={fileList}
//                     >
//                         <PlusOutlined />

//                     </Upload>
//                 </Form.Item>
//                 <Button type="primary" htmlType='submit' icon={<PlusOutlined />} size={"large"}>
//                     them moi
//                 </Button>
//             </Form>
//         </>
//     )
// }

import React from "react";
// import '../../assets/css/Form.css';
import axios from 'axios';
import {
    Button,
    DatePicker,
    Form,
    Input,

} from 'antd';

// function RegisterTemplate({
//     handleChange,
//     values,
//     // formErrors,
// })
// const Slider = () => {
//     const signUpButton = document.getElementById('signUp');
//     const signInButton = document.getElementById('signIn');
//     const container = document.getElementById('container');

//     signUpButton.addEventListener('click', () => {
//         container.classList.add("right-panel-active");
//     });

//     signInButton.addEventListener('click', () => {
//         container.classList.remove("right-panel-active");
//     });
// }
export default function AddUser() {


    const handleSubmit = (value) => {
        console.log('value', value);

        const formData = new FormData()
        formData.append('fullName', value.fullName)
        formData.append('email', value.email)
        formData.append('password', value.password)
        formData.append('birthday', value.birthDay)

        axios.post('https://621f1457311a705914ff929e.mockapi.io/users', formData).then(res => {
            console.log('res', res);
        }).catch(err => {
            console.log('err', err);
        })
    }

    return (

        // <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
        <div className="container" id="container">
            <div className="form-container sign-up-container">
                <Form
                    onFinish={handleSubmit}

                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <Form.Item name='email' label="Email">
                        <Input />
                    </Form.Item>

                    <Form.Item name='password' label="Password">
                        <Input />
                    </Form.Item>

                    <Form.Item name='fullName' label="Ho va ten">
                        <Input />
                    </Form.Item>



                    <Form.Item name='birhtDay' label="Ngay sinh">
                        <DatePicker format="DD/MM/YYYY" />
                    </Form.Item>

                    <Button type="primary" htmlType='submit' icon={<PlusOutlined />} size={"large"}>
                        Sign Up
                    </Button>
                </Form>

            </div>
        </div>


    );
};