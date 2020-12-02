import React from 'react';
import { Typography, Row, Col, Card, Tag, Divider, List } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
const {Title, Text} = Typography;

const data = [
    {
        ticketNo: 33,
        escritorio: 3,
        agente: 'Fernando Herrera'
    },
    {
        ticketNo: 34,
        escritorio: 4,
        agente: 'Melissa Flores'
    },
    {
        ticketNo: 35,
        escritorio: 5,
        agente: 'Carlos Castro'
    },
    {
        ticketNo: 36,
        escritorio: 3,
        agente: 'Fernando Herrera'
    },
    {
        ticketNo: 37,
        escritorio: 3,
        agente: 'Fernando Herrera'
    },
    {
        ticketNo: 38,
        escritorio: 2,
        agente: 'Melissa Flores'
    },
    {
        ticketNo: 39,
        escritorio: 5,
        agente: 'Carlos Castro'
    },
];



export const Queue = () =>{
    useHideMenu(false);
    return(
        <React.Fragment>
            <Title level={2}>
                Dispatching client
            </Title>
            <Row>
                <Col span={12}>
                    <List
                        dataSource={data.slice(0,3)}
                        renderItem={ item => (
                            <List.Item>
                                <Card
                                    style={{width:300, marginTop:16}}
                                    actions={[
                                        <Tag color="volcano"> { item.agente } </Tag>,
                                        <Tag color="pink"> Desktop :  { item.escritorio } </Tag>,
                                    ]}

                                >
                                    <Title>N° { item.ticketNo }</Title>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>

                <Col span={12}>
                    <Divider>History</Divider>
                    <List
                        dataSource={data.slice(3)}
                        renderItem={ item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={`Ticket N° ${item.ticketNo}`}
                                    description = {
                                        <React.Fragment>
                                            <Text type="secondary">On desktop </Text>
                                            <Tag color="magenta" >{item.ticketNo}</Tag>
                                            <Text type="secondary">Agent </Text>
                                            <Tag color="blue" >{item.agente}</Tag>
                                        </React.Fragment>
                                    }
                                />
                            </List.Item>
                        ) }
                    />
                </Col>
                
            </Row>
        </React.Fragment>
    )
}