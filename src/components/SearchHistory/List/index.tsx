import { Icon } from "@/components/ui/Icons";
import { deleteKeywordAction } from "@/stores/useKeywordStore";
import { SearchHistoryListWrapper, DeleteButton } from "./style";

export const SearchHistoryList = ({ keyword }: { keyword: string; }) => {
    const deleteKeyword = deleteKeywordAction();

    return <SearchHistoryListWrapper>
        <p>{keyword}</p>
        <DeleteButton onClick={() => deleteKeyword(keyword)}>
            <img src={Icon.Delete} alt="삭제 아이콘" />
        </DeleteButton>
    </SearchHistoryListWrapper>;
};