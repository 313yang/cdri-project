import { BookType } from "@/defines/book.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteStoreProps {
    favoriteList: BookType[];
    setFavoriteList: (book: BookType) => void;
    deleteFavorite: (idx: string) => void;
}

/**
 * 찜한 책 목록을 불러오거나 책을 찜목록에 추가/삭제합니다.
 */
const useFavoriteStore = create(
    persist<FavoriteStoreProps>(
        (set, get) => ({
            favoriteList: [],
            /** 내가 찜한 책 목록에 추가합니다. */
            setFavoriteList: (book: BookType) => {
                if (!book) return;
                const currentList = get().favoriteList;
                const newList = [...currentList];
                newList.push(book);
                set({ favoriteList: newList });
            },
            /** 내가 찜한 책 목록에서 삭제합니다. */
            deleteFavorite: (idx: string) => {
                const currentList = get().favoriteList;
                const newList = currentList.filter((x) => x.isbn !== idx);
                set({ favoriteList: newList });
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
