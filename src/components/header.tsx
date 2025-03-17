import { useState } from "react";
import { TabhostType } from "@/defines/global";
import { HeaderComponent, NavList, } from "./style";

export const Header = () => {
    const [tabhost, setTabhost] = useState<TabhostType>(TabhostType.Search);

    return <HeaderComponent>
        <h1>
            CERTICO BOOKS
        </h1>
        <nav>
            <ul>
                <NavList selected={tabhost === TabhostType.Search}>
                    도서 검색
                </NavList>
                <NavList selected={tabhost === TabhostType.Favorite}>
                    내가 찜한 책
                </NavList>
            </ul>
        </nav>
    </HeaderComponent>;
};