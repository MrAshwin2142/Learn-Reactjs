
const Pagebar = ({ setPage, page }) => {
    let pageNumber = [];
    for (let i = 1; i <= 10; i++) {
        pageNumber.push(i);
    }

    return (
        <div className="m-4">
            {pageNumber.map((num, i) => (
                <button className="mx-2 border px-3 py-1 rounded-md" onClick={() => { setPage(i + 1) }}>{num}</button>
            ))}
            
        </div>
    )
}

export default Pagebar
