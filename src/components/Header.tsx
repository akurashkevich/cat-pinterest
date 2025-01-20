import { NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "none",
        color: "#FFFFFF",
        backgroundColor: "#1E88E5",
    }

    return (
        <header className="header">
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    className="link"
                >
                    Все котики
                </NavLink>
                <NavLink
                    to="/favorites"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    className="link"
                >
                    Любимые котики
                </NavLink>
            </nav>
        </header>
    )
}