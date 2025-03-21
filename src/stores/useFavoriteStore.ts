import { BookType } from "@/defines/book.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteStoreProps {
    /** 내가 찜한 책 목록 */
    favoriteList: BookType[];
    /** 내가 찜한 책 목록에 추가합니다. */
    setFavoriteList: (book: BookType) => void;
    /** 내가 찜한 책 목록에서 삭제합니다. */
    deleteFavorite: (idx: string) => void;
}

/**
 * 찜한 책 목록을 불러오거나 책을 찜목록에 추가/삭제합니다.
 * @description 변경사항을 `localStorage`에 저장합니다.
 */
const useFavoriteStore = create(
    persist<FavoriteStoreProps>(
        (set, get) => ({
            favoriteList: [],
            setFavoriteList: (book: BookType) => {
                if (!book) return;
                const cloneList = [...get().favoriteList]; // 원본 배열 수정안되도록 복사.
                cloneList.push(book);
                set({ favoriteList: cloneList });
            },
            deleteFavorite: (idx: string) => {
                const filteredList = get().favoriteList.filter((x) => x.isbn !== idx);
                set({ favoriteList: filteredList });
            },
        }),
        {
            name: "Keyword",
        }
    )
);

export const useFavoriteListState = () =>
    useFavoriteStore((state) => state.favoriteList);

export const useSetFavoriteListAction = () =>
    useFavoriteStore((state) => state.setFavoriteList);

export const useDeleteFavoriteAction = () =>
    useFavoriteStore((state) => state.deleteFavorite);
