import { create } from "zustand";
import { persist } from "zustand/middleware";

interface KeywordStore {
    keywordList: string[];
    actions: {
        setKeywordList: (keyword: string) => void;
        deleteKeyword: (keyword: string) => void;
    };
}

/**
 * 검색어를 불러오기, 추가, 삭제하는 store입니다. 
 */
const useKeywordStore = create(
    persist<KeywordStore>(
        (set, get) => ({
            keywordList: [],
            actions: {
                setKeywordList: (keyword: string) => {
                    const currentList = get().keywordList;
                    const newList = [...currentList];
                    // 등록된 검색어가 8개 이상인 경우, 배열 첫번째 요소를 삭제합니다.
                    if (newList.length >= 8) newList.shift();

                    // 새로운 키워드를 배열 마지막 요소에 추가합니다.
                    newList.push(keyword);

                    set({ keywordList: newList });
                },
                deleteKeyword: (keyword: string) => {
                    const currentList = get().keywordList;
                    const newList = currentList.filter((x) => x !== keyword);

                    set({ keywordList: newList });
                },
            }
        }),
        {
            name: "Keyword",
        }
    )
);

export const useKeywordState = () =>
    useKeywordStore((state) => state.keywordList);

export const useKeywordAction = () =>
    useKeywordStore((state) => state.actions);
