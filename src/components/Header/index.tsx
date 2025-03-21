import { PageTitles } from "@/utils/consts";
import { HeaderComponent, NavList } from "./style";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * 최상단의 nav 리스트가 포함된 Header 컴포넌트 입니다.
 * @returns Header
 */
export const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return <HeaderComponent>
        <h1>CERTICO BOOKS</h1>
        <nav>
            <ul>
                {PageTitles.map(({ title, path }) => (
                    <NavList
                        key={path}
                        selected={pathname === path}
                        onClick={() => navigate(path)}
                    >
                        {title}
                    </NavList>
                ))}
            </ul>
        </nav>
    </HeaderComponent>;
};