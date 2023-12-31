import { NavLink, Outlet } from "react-router-dom"

const MainContainer = () => {
    return (
        <div className="bg-black pb-4 text-white text-center">
            <div>
                <button className={"font-bold border my-4 mx-2 px-4 py-2 rounded-lg bg-opacity-50 bg-slate-400 "}><NavLink to='/infintescroll'>InfiniteScroll</NavLink></button>
                <button className="font-bold border my-4 mx-2 px-4 py-2 rounded-lg bg-opacity-50 bg-slate-400"><NavLink to='/pagination'>Pagination</NavLink></button>
            </div>
            <div className="border rounded-lg m-4 p-4">
                <Outlet />
            </div>
        </div>
    )
}

export default MainContainer
