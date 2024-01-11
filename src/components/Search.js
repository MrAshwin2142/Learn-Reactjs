import { useEffect, useRef, useState } from "react";

const Search = () => {
    const [coins, setCoins] = useState();
    const [trending, setTrendin] = useState([])
    const coinSearch = useRef();
    const getTrendingCoins = async () => {
        const data = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const json = await data.json();
        // console.log(json?.coins);
        const coinData = json?.coins.map((coin) => {
            return {
                image: coin.item.large,
                name: coin.item.name,
                id:coin.item.id
            }
        });
        console.log(coinData)
        setTrendin(coinData)
        setCoins(coinData);
    }
    const handleClick = async () => {
        console.log("click")
        const query = coinSearch?.current?.value;
        if (query) {
            const data = await fetch('https://api.coingecko.com/api/v3/search?query='+query);
            const json = await data.json();
            const coinData = json?.coins.map((coin) => {
                return {
                    image: coin.large,
                    name: coin.name,
                    id:coin.id
                }
            });
            setCoins(coinData)
        } else {
            setCoins(trending);
        }
    }
    useEffect(() => {
        getTrendingCoins()
    }, [])
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <input ref={coinSearch} type="text" placeholder="Search Coins..." className="w-96 p-2 rounded-l-lg text-lg text-black" />
                <button className="w-36 bg-blue-600 p-2 text-lg rounded-r-lg " onClick={handleClick}>Search</button>
            </form>
            <div>
                {coins?.map((coin) => (
                    <div key={coin.id} className="flex justify-between m-3 border-b-2 border-l-2 p-2 rounded-lg">
                        <div>
                            <img className="w-14" src={coin.image} />
                        </div>
                        <div className="text-right text-3xl my-auto">
                            <h1>{coin.name}</h1>
                            {/* <h1>{coin.item.data.price}</h1> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Search;