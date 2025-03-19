import { useLocation } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { TitleText } from "@/utils/consts";

/** 현재 경로에 따라 타이틀을 출력합니다. */
export const Title = () => {
    const { pathname } = useLocation();

    const title = TitleText[pathname];
    return (
        <div>
            <h2>{title}</h2>
            {title === TitleText["/"] && <SearchBar />}
        </div>
    );
};