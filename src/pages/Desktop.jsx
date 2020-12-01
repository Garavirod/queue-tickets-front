import React from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
export const Desktop = () =>{


    const Close = () =>{

    }


    const NextTicket = () =>{

    }

    return(
        <React.Fragment>
            <Title level={2}>Desktop page</Title>
            <Row>
                <Col span={ 20 }>
                    <Title level={3}>Rodrigo</Title>
                    <Text>You are working in desktop : </Text>
                    <Text type="success">34</Text>
                </Col>

                <Col span={ 4 } align="roght">
                    <Button
                        type="danger"
                        shape="round"
                        onClick = {()=>Close()}
                        >
                        <CloseCircleOutlined />
                        Close
                    </Button>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col>
                <Text>Your dispatching ticket number : </Text>
                <Text 
                    type="danger"
                    style={{fontSize:20}}
                >55</Text>
                </Col>
            </Row>

            <Row>
                <Col
                    offset = { 18 }
                    span = { 6 }
                    align = "right" 
                >
                    <Button 
                        type="primary"
                        shape="round"
                        onClick = { NextTicket } >
                        <ArrowRightOutlined />
                        Next ticket
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    )
}