import React, { useEffect, useState } from 'react'
import CryptoList from '../CryptoList';
import Pagebar from './Pagebar';
import ShimmerUI from './ShimmerUI';

const Pagination = () => {
    const [page, setPage] = useState(1);
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const getCoinsList = async () => {
        const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=' + page + '?x_cg_demo_api_key=CG-ECsLC1HyQe8KWJqHovMx7XSt');
        const json = await data.json();
        const data1 = await fetch('https://leetcode.com/ashwinDhangar/', { mode: 'no-cors' });
        console.log(data1.html);
        // const json1=  await data1.json();
        setCoins(json);
        setLoading(false);
    }
    useEffect(() => {
        getCoinsList();
        setLoading(true);
    }, [page])

    return (
        <div className='w-full h-10/12'>
            <h1 className='text-2xl font-bold'>Pagination Crypto Gallery </h1>
            {/* {loading && <Loading />} */}
            {loading ? <ShimmerUI /> : <CryptoList coins={coins} />}
            {/* <ShimmerUI/> */}
            {/* <CryptoList coins={coins} /> */}
            <Pagebar setPage={setPage} page={page} />
        </div>
    )
}

export default Pagination
