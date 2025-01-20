import { NavLink } from "react-router"

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
                    style={({ isActive }: { isActive: boolean }) => isActive ? activeStyles : undefined}
                    className="link"
                >
                    Все котики
                </NavLink>
                <NavLink
                    to="/favorites"
                    style={({ isActive }: { isActive: boolean }) => isActive ? activeStyles : undefined}
                    className="link"
                >
                    Любимые котики
                </NavLink>
            </nav>
        </header>
    )
}