import { ButtonStyled } from "@/styles/ui/button.styled";
import { ReactNode } from "react";

interface ButtonProps {
    width?: string;
    bgColor?: "white" | "primary" | "gray" | "lightGray";
    color?: "primary" | "secondary" | "subtitle";
    size?: "small" | "medium" | "large";
    border?: "primary" | "secondary" | "subtitle";
    onClick(): void;
    children: ReactNode;
}

export const Button = ({
    width,
    size,
    bgColor = "primary",
    color,
    border,
    children,
    onClick
}: ButtonProps) => {
    return <ButtonStyled
        className={`size-${size}`}
        width={width}
        bgColor={bgColor}
        color={color}
        border={border}
        onClick={onClick}
    >{children} </ButtonStyled>;
};