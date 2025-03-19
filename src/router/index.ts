import { FavoritePage } from "@/pages/Favorite";
import { SearchPage } from "@/pages/Search";

/**
 * 메인화면의 Routes을 반환합니다.
 * @returns Routes
 */
export default [
    {
        path: '/',
        component: SearchPage
    },
    {
        path: '/favorite',
        component: FavoritePage
    },
];