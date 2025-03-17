import { useState } from "react";
import { TabhostType } from "@/defines/global";
import { HeaderComponent } from "./style";

export const Header = () => {
    const [tabhost, setTabhost] = useState<TabhostType>(TabhostType.Search);

    return <HeaderComponent>
        <h1>
            CERTICO BOOKS
        </h1>
        <nav>
            <div>
                도서 검색
            </div>
            <div>
                내가 찜한 책
            </div>
        </nav>
    </HeaderComponent>;
};