import { NoResult } from "@/components/NoResult";
import { MainContainer } from "./style";
import { Title } from "@/components/Title";

export const Home = () => {
    return <MainContainer>
        <Title />
        <NoResult desc="검색된 결과가 없습니다." />
    </MainContainer>
}