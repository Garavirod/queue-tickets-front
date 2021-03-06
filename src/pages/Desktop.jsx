import React, { useState, useContext } from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useHideMenu } from '../hooks/useHideMenu';
import { getDataUserStorage } from '../helpers/utils';
import { Redirect, useHistory } from 'react-router-dom';
import { SocketContext } from '../Context/SocketContext';

const { Title, Text } = Typography;
export const Desktop = () =>{
    const history = useHistory();
    useHideMenu(true);
    const {socket} = useContext(SocketContext);
    const [userData] = useState(getDataUserStorage());
    const [ticket, setTicket] = useState(null);

    if(!userData.agent || !userData.desktop){
        return  <Redirect to="/access"/>
    }

    const Close = () =>{
        localStorage.removeItem('agent');
        localStorage.removeItem('desktop');
        history.replace('/access');        
    }


    const NextTicket = () =>{
        socket.emit('next-dispatch', userData, ( ticket )=>{
            console.log(ticket);
            setTicket(ticket);
        });
    }

    return(
        <React.Fragment>
            <Title level={2}>Desktop page</Title>
            <Row>
                <Col span={ 20 }>
                    <Title level={3}>{userData.agent}</Title>
                    <Text>You are working in desktop : </Text>
                    <Text type="success">{userData.desktop}</Text>
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
            {
                ticket && 
                (
                    <Row>
                        <Col>
                        <Text>Your dispatching ticket number : </Text>
                        <Text 
                            type="danger"
                            style={{fontSize:20}}
                        >{ticket.number}</Text>
                        </Col>
                    </Row>
                )
            }

            <Row>
                <Col
                    offset = { 18 }
                    span = { 6 }
                    align = "right" 
                >
                    <Button 
                        type="primary"
                        shape="round"
                        onClick = {()=>NextTicket()} >
                        <ArrowRightOutlined />
                        Next ticket
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    )
}