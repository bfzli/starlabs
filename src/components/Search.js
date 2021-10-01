export default function Search({search, setSearch, howMany}) {
    return (
        <form className="search-holder">
            <input className="search" placeholder={`Search ${howMany} teams`} value={search} onChange={(e) => {e.preventDefault(); setSearch(e.target.value)}}/>
            <svg className="searchicon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="9.80553" cy="9.80553" rx="7.49046" ry="7.49047" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.0152 15.4043L17.9519 18.3334" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </form>
    )
}
