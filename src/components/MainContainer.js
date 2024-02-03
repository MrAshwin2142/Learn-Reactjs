import { NavLink, Outlet } from "react-router-dom"

const MainContainer = () => {
    return (
        <div className="box-border min-h-screen  bg-black pb-4 text-white text-center h-full">
            <div>
                <button className="font-bold border my-4 mx-2 px-4 py-2 rounded-lg bg-opacity-50 hover:bg-opacity-90 bg-slate-400"><NavLink to='/'>Home</NavLink></button>
                <button className="font-bold border my-4 mx-2 px-4 py-2 rounded-lg bg-opacity-50 hover:bg-opacity-90 bg-slate-400"><NavLink to='/infintescroll'>InfiniteScroll</NavLink></button>
                <button className="font-bold border my-4 mx-2 px-4 py-2 rounded-lg bg-opacity-50 hover:bg-opacity-90 bg-slate-400"><NavLink to='/pagination'>Pagination</NavLink></button>
                <button className="font-bold border my-4 mx-2 px-4 py-2 rounded-lg bg-opacity-50 hover:bg-opacity-90 bg-slate-400"><NavLink to='/formvalidation'>From Validation</NavLink></button>
                <button className="font-bold border my-4 mx-2 px-4 py-2 rounded-lg bg-opacity-50 hover:bg-opacity-90 bg-slate-400"><NavLink to='/search'>Search</NavLink></button>
                <button className="font-bold border my-4 mx-2 px-4 py-2 rounded-lg bg-opacity-50 hover:bg-opacity-90 bg-slate-400"><NavLink to='/counter'>Counter</NavLink></button>
            </div>
            <div className="box-border  bg-black border rounded-lg flex items-center justify-center m-4 px-4">
                <Outlet />
            </div>
        </div>
    )
}

export default MainContainer
