import { useEffect, useState } from "react"
import CryptoList from "./CryptoList";
import Loading from "./Loading";

const InfiniteScroll = () => {
    const [page, setPage] = useState(1);
    const [coins, setCoins] = useState([]);
    const [loading,setLoading]=useState(true);
    
    const getCoinsList = async () => {
        const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=' + page + '?x_cg_demo_api_key=CG-ECsLC1HyQe8KWJqHovMx7XSt');
        const json = await data.json();
        console.log(json);
        setCoins(coins =>[...coins,...json]);
        setLoading(false);
    }
    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const innerHeight = window.innerHeight;
        if (innerHeight + scrollTop + 1 >= scrollHeight) {
            setPage(page => page + 1)
            setLoading(true);
        }

    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        getCoinsList();

    }, [page])
    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold">Infinite Scroll Crypto Gallery</h1>
            <CryptoList coins={coins} />
            {loading && <Loading/>}
        </div>
    )
}

export default InfiniteScroll
