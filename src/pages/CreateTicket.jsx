import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';

const {Title, Text} = Typography;

export const CreateTicket = () =>{
    useHideMenu(false);

    const newTicket = () => {

    }

    return(
        <React.Fragment>          
            <Row>
                <Col span={14} offset={6} align="center">
                    <Title level={3}>
                        Push for generating a new ticket
                    </Title>
                    <Button 
                        type="primary"
                        shape="round"
                        icon={<DownloadOutlined />}
                        size="large"
                        onClick={newTicket}
                    >                        
                        Generate
                    </Button>
                </Col>
            </Row>       
            <Row style={{marginTop:100}}>
                <Col span={14} offset={6} align="center">
                    <Text level={2}>Your number is :</Text>
                    <br/>
                    <Text 
                        type="success"
                        style={{fontSize:55}}
                    >
                        56
                    </Text>
                </Col>
            </Row>     
        </React.Fragment>
    )
}