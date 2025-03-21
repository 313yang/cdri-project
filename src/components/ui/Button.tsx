import { ButtonStyled } from "@/styles/ui/button.styled";
import { ReactNode } from "react";

interface ButtonProps {
    width?: string;
    bg_color?: "white" | "primary" | "gray" | "lightGray";
    color?: "primary" | "secondary" | "subtitle";
    size?: "small" | "medium" | "large";
    border?: "primary" | "secondary" | "subtitle";
    onClick(): void;
    children: ReactNode;
}

export const Button = ({
    width,
    size,
    bg_color = "primary",
    color,
    border,
    children,
    onClick
}: ButtonProps) => {
    return <ButtonStyled
        className={`size-${size}`}
        width={width}
        $bg_color={bg_color}
        color={color}
        $border={border}
        onClick={onClick}
    >{children} </ButtonStyled>;
};