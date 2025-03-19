import { TabhostType } from "@/defines/global";
import { useTabhost } from "@/context/useTabhost";
import { HeaderComponent, NavList } from "./style";

export const Header = () => {
    const { tabhost, setTabhost } = useTabhost();

    return <HeaderComponent>
        <h1>
            CERTICO BOOKS
        </h1>
        <nav>
            <ul>
                <NavList selected={tabhost === TabhostType.Search} onClick={() => setTabhost(TabhostType.Search)}>
                    도서 검색
                </NavList>
                <NavList selected={tabhost === TabhostType.Favorite} onClick={() => setTabhost(TabhostType.Favorite)}>
                    내가 찜한 책
                </NavList>
            </ul>
        </nav>
    </HeaderComponent>;
};