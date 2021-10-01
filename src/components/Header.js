import Logo from "./Logo"
import Search from "./Search"
import Sort from "./Sort"

export default function Header({howMany, filter, change_filter, search, setSearch}) {
    return (
        <div className="header">
        <a href="/">
            <Logo />
        </a>
            <div className="right-side">
                <Sort filter={filter} change_filter={() => change_filter()} />
                <Search search={search} setSearch={setSearch} howMany={howMany} />
            </div>
        </div>
    )
}
