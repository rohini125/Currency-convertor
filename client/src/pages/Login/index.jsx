import React from 'react';
import { Col, Form, Row } from "antd";
import {useNavigate} from "react-router-dom"

function Login() {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div className="bg-primary flex items-center justify-center h-screen">
            <div className="card w-400 p-2">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl">Payment-Login</h1>

            
            </div>
            <hr />
            <Form layout="vertical" onFinish={onFinish} >
                <Row gutter={16}>
            
                    <Col span={24}>
                        <Form.Item lable="Email" name="email">
                            <input type="text" />
                        </Form.Item>
                    </Col>
                   
                    <Col span={24}>
                        <Form.Item lable="Password" name="password">
                            <input type="password" />
                        </Form.Item>
                    </Col>

                    
                </Row>
                
                    <button className="primary-contained-btn w-100" type="submit">
                        Login
                    </button>
                    <h1 className="text-5m underline mt-2" onclick ={()=>navigate('/register')}> 
                         Not a member , Click Here to Register 
                    </h1>
            </Form>
            </div>
        </div>
    );
}

export default Login;