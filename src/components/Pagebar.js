
const Pagebar = ({ setPage, page }) => {
    let pageNumber = [];
    for (let i = 1; i <= 10; i++) {
        pageNumber.push(i);
    }

    return (
        <div className="m-4">
            {pageNumber.map((num, i) => (
                <button
                    className={page===i+1?"py-1 px-3 m-2 bg-blue-950 border rounded":"py-1 px-3 m-2 border rounded"}
                    onClick={() => { setPage(i + 1) }} >
                    {num}
                </button>
            ))}

        </div>
    )
}

export default Pagebar
