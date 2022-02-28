import React, {useEffect, useState} from 'react';
import {useGetCryptosQuery} from "../services/cryptoApi";
import {Card, Col, Input, Row} from "antd";
import {Link} from "react-router-dom";
import millify from "millify";
import Loader from "./Loader";

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 8 : 100;
    const {data: cryptosList, isFetching} = useGetCryptosQuery(count)
    const [searchTerm, setSearchTerm] = useState('')
    const [cryptos, setCryptos] = useState([])

    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin?.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filteredData)
    }, [cryptosList, searchTerm])

    if(isFetching) return <Loader/>

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input
                        placeholder="Search CryptoCurrency"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            )}
           <Row gutter={[32, 32]} className="crypto-card-container">
               {cryptos?.map((coin) => (
                   <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
                        <Link to={`/crypto/${coin.id}`}>
                            <Card
                                title={`${coin.rank}. ${coin.name}`}
                                extra={<img
                                    className="crypto-image"
                                    src={coin.iconUrl}
                                    style={{maxHeight: '30px'}}
                                    alt=''
                                />}
                                hoverable
                            >
                                <p>Price: {millify(coin.price)}</p>
                                <p>Market Cap: {millify(coin.marketCap)}</p>
                                <p>Daily Change: {millify(coin.change)}%</p>
                            </Card>
                        </Link>
                   </Col>
               ))}
           </Row>
        </>
    );
};

export default Cryptocurrencies;