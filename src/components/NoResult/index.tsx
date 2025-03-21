import { Icon } from "@/ui/Icons";
import { NoResultContainer } from "./style";

export const NoResult = ({ desc }: { desc: string; }) => {
    return <NoResultContainer>
        <img src={Icon.Book} alt="책 아이콘" />
        <p>{desc}</p>
    </NoResultContainer>;
};