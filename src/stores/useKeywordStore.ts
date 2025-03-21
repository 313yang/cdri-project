import { create } from "zustand";
import { persist } from "zustand/middleware";

interface KeywordStoreProps {
    /** 검색 기록 목록 */
    keywordList: string[];
    /** 검색어를 리스트에 추가합니다. */
    setKeywordList: (keyword: string) => void;
    /** 검색어를 삭제합니다. */
    deleteKeyword: (keyword: string) => void;
}

/**
 * 검색어를 불러오기, 추가, 삭제하는 store입니다. 
 * @description 변경사항을 `localStorage`에 저장합니다.
 */
const useKeywordStore = create(
    persist<KeywordStoreProps>(
        (set, get) => ({
            keywordList: [],
            setKeywordList: (keyword: string) => {
                if (!keyword) return;
                // 키워드가 이미 존재하는 경우, 해당 키워드를 제거합니다.
                const filteredList = get().keywordList.filter(item => item !== keyword);
                // 등록된 검색어가 8개 이상인 경우, 배열 첫번째 요소를 삭제합니다.
                if (filteredList.length >= 8) filteredList.shift();
                // 새로운 키워드를 배열 마지막 요소에 추가합니다.
                filteredList.push(keyword);
                set({ keywordList: filteredList });
            },
            deleteKeyword: (keyword: string) => {
                // 삭제할 키워드를 검색 목록에서 제거합니다.
                const filteredList = get().keywordList.filter((x) => x !== keyword);
                set({ keywordList: filteredList });
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
