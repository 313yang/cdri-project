import { TabhostType } from "@/defines/global";
import { useTabhost } from "@/context/useTabhost";
import { HeaderComponent, NavList } from "./style";
import { useNavigate } from "react-router-dom";

/**
 * 최상단의 nav 리스트가 포함된 Header 컴포넌트 입니다.
 * @returns Header
 */
export const Header = () => {
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    console.log(pathname);

    return <HeaderComponent>
        <h1>CERTICO BOOKS</h1>
        <nav>
            <ul>
                <NavList
                    selected={pathname === "/"}
                    onClick={() => navigate("/")}
                >
                    도서 검색
                </NavList>
                <NavList
                    selected={pathname === "/favorite"}
                    onClick={() => navigate("/favorite")}
                >
                    내가 찜한 책
                </NavList>
            </ul>
        </nav>
    </HeaderComponent>;
};