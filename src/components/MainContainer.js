import InfiniteScroll from "./InfiniteScroll"
import Pagination from "./Pagination"

const MainContainer = () => {
    return (
        <div className="bg-black pb-4">
            <div>
                <button className="font-bold border my-4 mx-2 px-4 py-2 rounded-lg bg-opacity-50 bg-slate-400">Infinite Scroll</button>
                <button className="font-bold border my-4 mx-2 px-4 py-2 rounded-lg bg-opacity-50 bg-slate-400">Pagination</button>
            </div>
            <div className="border rounded-lg m-4 p-4">
                <InfiniteScroll />
                {/* <Pagination/> */}
            </div>
        </div>
    )
}

export default MainContainer
