import { Routes, Route } from "react-router-dom";
import { FavoritePage } from "@/pages/Favorite";
import { SearchPage } from "@/pages/Search";
import { MainContainer } from "@/styles/main.styled";

/**
 * 메인화면의 Routes을 반환합니다.
 * @returns Routes
 */
export const MainRoutes = () => {
    return <MainContainer>
        <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
    </MainContainer>;
};