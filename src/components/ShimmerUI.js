import React from 'react'

const ShimmerUI = () => {
    const demoCoins = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    return (
        <div className="flex flex-wrap justify-center h-full">
            {demoCoins.map((coin) => (
                <div className="w-48 mx-6 my-2 border px-6 py-2 rounded-lg flex flex-col justify-center">
                    <div className='h-32 w-full bg-gray-700 p-2 rounded-3xl'>.</div>
                    <h1 className="text-xl w-10/12 bg-gray-700 rounded-lg my-2 px-6 h-1/12 mx-auto">.</h1>
                    <h1 className="text-lg w-10/12 bg-gray-700 rounded-lg text-start px-6 h-1/12 mx-auto">.</h1>
                </div>
            ))}
        </div>
    )
}

export default ShimmerUI
