import React from 'react'

const ShimmerUI = () => {
    const demoCoins = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    return (
        <div className="flex flex-wrap justify-center h-full">
            {demoCoins.map((coin) => (
                <div className="w-48 mx-6 my-2 border px-6 py-2 rounded-lg">
                    <img src={process.env.PUBLIC_URL + '/blurebitcoin.webp'} />
                    <h1 className="text-xl">bitcoin</h1>
                    <h1 className="text-lg">$ 000</h1>
                </div>
            ))}
        </div>
    )
}

export default ShimmerUI
