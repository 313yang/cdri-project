import { useKeywordState } from "@/stores/useKeywordStore";
import { SearchHistoryList } from "./List";
import { SearchHistoryWrapper } from "./style";
import { Fragment } from "react/jsx-runtime";

/** 검색 기록 목록을 노출합니다. */
export const SearchHistory = () => {
    const keywordList = useKeywordState();
    
    // 검색 리스트가 없을 경우 빈 컴포넌트를 반환합니다.
    if (keywordList.length === 0) return <></>;

    return <SearchHistoryWrapper>
        {keywordList.map(list => (
            <Fragment key={list}>
                <SearchHistoryList keyword={list} />
            </Fragment>
        ))}
    </SearchHistoryWrapper>;
};