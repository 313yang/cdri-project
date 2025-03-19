import { Icon } from "@/components/ui/Icons";
import { SearchHistoryListWrapper } from "./style";
import { useKeywordAction } from "@/stores/useKeywordStore";

export const SearchHistoryList = ({ keyword }: { keyword: string; }) => {
    const { deleteKeyword } = useKeywordAction();

    return <SearchHistoryListWrapper>
        <p>{keyword}</p>
        <button onClick={() => deleteKeyword(keyword)}>
            <img src={Icon.Arrow} alt="삭제 아이콘" />
        </button>
    </SearchHistoryListWrapper>;
};