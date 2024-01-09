import Card from "./Card"

const CryptoList = ({coins}) => {
    // console.log("coins",coins)
  return (
    <div className="flex flex-wrap justify-center h-full">
      {coins.map((coin,index)=>(<Card key={index} coin={coin}/>))}
    </div>
  )
}

export default CryptoList
