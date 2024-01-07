import React, { useEffect, useState } from 'react'
import CryptoList from './CryptoList';
import Pagebar from './Pagebar';

const Pagination = () => {
    const [page, setPage] = useState(1);
    const [coins, setCoins] = useState([]);
    const getCoinsList = async () => {
        const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=' + page + '?x_cg_demo_api_key=CG-ECsLC1HyQe8KWJqHovMx7XSt');
        const json = await data.json();
        console.log(json);
        setCoins(json);
    }
    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const innerHeight = window.innerHeight;
        // if (innerHeight + scrollTop + 1 >= scrollHeight) {
        //     setPage(page => page + 1)
        // }

    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        getCoinsList();

    }, [page])

    return (
        <div>
            <h1 className='text-2xl font-bold'>Pagination Crypto Gallery </h1>
            <CryptoList coins={coins}/>
            <Pagebar setPage={setPage} page={page}/>
        </div>
    )
}

export default Pagination
