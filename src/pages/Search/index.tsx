import { NoResult } from "@/components/NoResult";
import { Title } from "@/components/Title";

export const SearchPage = () => {
    return <>
        <Title />
        <NoResult desc="검색된 결과가 없습니다." />
    </>
}