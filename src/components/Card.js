const Card = ({coin}) => {
  return (
    <div className="w-40 mx-6 my-1 border px-6 py-2 rounded-lg">
      <img  alt="logo" loading="lazy" src={coin.image}/>
      <h1 className="text-xl">{coin.id}</h1>
      <h1 className="text-lg">$ {coin.current_price}</h1>
    </div>
  )
}

export default Card
// image="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
// current_price=43861
// id = Bitcoin