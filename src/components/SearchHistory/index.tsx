import { useKeywordState } from "@/stores/useKeywordStore";
import { SearchHistoryList } from "./List";
import { SearchHistoryWrapper } from "./style";
import { Fragment } from "react/jsx-runtime";

export const SearchHistory = () => {
    const keywordList = useKeywordState();

    return <SearchHistoryWrapper>
        {keywordList.map(list => (
            <Fragment key={list}>
                <SearchHistoryList keyword={list} />
            </Fragment>
        ))}
    </SearchHistoryWrapper>;
};