const getCoinsList = async (page) => {
    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=' + page + '?x_cg_demo_api_key=CG-ECsLC1HyQe8KWJqHovMx7XSt');
    const json = await data.json();
    // console.log(json);
    if(json) return json;
}
export default getCoinsList;