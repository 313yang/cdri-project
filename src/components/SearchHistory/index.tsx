import { useKeywordState } from "@/stores/useKeywordStore";
import { SearchHistoryList } from "./List";
import { SearchHistoryWrapper } from "./style";
import { Fragment } from "react/jsx-runtime";

/** 검색 기록 목록을 노출합니다. */
export const SearchHistory = () => {
    const keywordList = useKeywordState();

    // 검색 리스트가 없을 경우 빈 컴포넌트를 반환합니다.
    if (keywordList.length === 0) return <></>;

    // 배열을 최신 순으로 재 정렬합니다.
    const sortList = [...keywordList].reverse();
    return <SearchHistoryWrapper>
        {sortList.map((list, index) => (
            <Fragment key={list + index}>
                <SearchHistoryList keyword={list} />
            </Fragment>
        ))}
    </SearchHistoryWrapper>;
};