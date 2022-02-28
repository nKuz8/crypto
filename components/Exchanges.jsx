import React from 'react';
import {Avatar, Col, Collapse, Row, Typography} from "antd";
import {useGetExchangesQuery} from "../services/cryptoApi";
import Loader from "./Loader";
import millify from "millify";
import HTMLReactParser from "html-react-parser";

const {Panel} = Collapse
const {Text} = Typography

const Exchanges = () => {
    const {data, isFetching} = useGetExchangesQuery()

    if(isFetching) return <Loader/>

    return (
        <>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Collapse>
                {data?.data?.exchanges.map(item => (
                    <Panel key={item.id} showArrow={false} header={(
                        <Row>
                            <Col span={6}>
                                {item.rank}. <Avatar src={item.iconUrl} className="exchange-image"/>
                                <Text strong>{item.name}</Text>
                            </Col>
                            <Col span={6}>${millify(item.volume)}</Col>
                            <Col span={6}>{millify(item.numberOfMarkets)}</Col>
                            <Col span={6}>{millify(item.marketShare)}%</Col>
                        </Row>
                    )}>
                        {HTMLReactParser(item.description || '')}
                    </Panel>
                ))
                }
            </Collapse>
        </>
    );
};

export default Exchanges;