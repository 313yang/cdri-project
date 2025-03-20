import { ButtonStyled } from "@/styles/ui/button.styled";

interface ButtonProps {
    width?: string;
    text: string;
    bgColor?: "white" | "primary" | "gray" | "lightGray";
    color?: "primary" | "secondary" | "subtitle";
    size?: "small" | "medium" | "large";
    border?: "primary" | "secondary" | "subtitle";
    onClick(): void;
}

export const Button = ({
    text,
    width,
    size,
    bgColor = "primary",
    color,
    border,
    onClick
}: ButtonProps) => {
    return <ButtonStyled
        className={`size-${size}`}
        width={width}
        bgColor={bgColor}
        color={color}
        border={border}
        onClick={onClick}
    >{text} </ButtonStyled>;
};