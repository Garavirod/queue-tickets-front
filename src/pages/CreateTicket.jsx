import React, { useContext, useState } from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../Context/SocketContext';

const {Title, Text} = Typography;

export const CreateTicket = () =>{
    useHideMenu(false);

    const { socket } = useContext( SocketContext );
    const [ticket, setTicket] =useState(null);

    const newTicket = () => {
        socket.emit('request-ticket',null,(ticket)=>{
            // console.log(ticket);
            setTicket(ticket);
        });
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
                        onClick={()=>newTicket()}
                    >                        
                        Generate
                    </Button>
                </Col>
            </Row> 
            {
                ticket 
                && 
                (
                    <Row style={{marginTop:100}}>
                        <Col span={14} offset={6} align="center">
                            <Text level={2}>Your number is :</Text>
                            <br/>
                            <Text 
                                type="success"
                                style={{fontSize:55}}
                            >
                                {ticket.number}
                            </Text>
                        </Col>
                    </Row>     
                )
            }      
        </React.Fragment>
    )
}