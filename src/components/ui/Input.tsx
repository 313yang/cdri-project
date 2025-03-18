import { Icon } from "./Icons";
import { InputStyled } from "./input.styled";
export const Input = () => {
    return <InputStyled>
        <img src={Icon.Search} alt="돋보기 아이콘" />
        <input placeholder="검색어를 입력하세요" />
    </InputStyled>;
};