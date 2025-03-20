import { create } from "zustand";
import { persist } from "zustand/middleware";

interface KeywordStoreProps {
    keywordList: string[];
    setKeywordList: (keyword: string) => void;
    deleteKeyword: (keyword: string) => void;
}

/**
 * 검색어를 불러오기, 추가, 삭제하는 store입니다. 
 */
const useKeywordStore = create(
    persist<KeywordStoreProps>(
        (set, get) => ({
            keywordList: [],
            /** 검색어를 리스트에 추가합니다. */
            setKeywordList: (keyword: string) => {
                if (!keyword) return;
                const currentList = get().keywordList;
                const newList = [...currentList];
                // 등록된 검색어가 8개 이상인 경우, 배열 첫번째 요소를 삭제합니다.
                if (newList.length >= 8) newList.shift();
                // 새로운 키워드를 배열 마지막 요소에 추가합니다.
                newList.push(keyword);

                set({ keywordList: newList });
            },
            /** 검색어를 삭제합니다. */
            deleteKeyword: (keyword: string) => {
                const currentList = get().keywordList;
                const newList = currentList.filter((x) => x !== keyword);
                set({ keywordList: newList });
            },
        }),
        {
            name: "Keyword",
        }
    )
);

export const useKeywordState = () =>
    useKeywordStore((state) => state.keywordList);

export const setKeywordListAction = () =>
    useKeywordStore((state) => state.setKeywordList);

export const deleteKeywordAction = () =>
    useKeywordStore((state) => state.deleteKeyword);
