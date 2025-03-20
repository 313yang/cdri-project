import { PopupContainer, PopupContent, PopupHeader } from "@/styles/ui/popup.styled";
import { Icon } from "./Icons";
import { ReactNode } from "react";

interface PopupProps {
    top?: number;
    right?: number;
    width?: number;
    height?: number;
    onClose(): void;
    children: ReactNode;
}
export const Popup = ({
    onClose,
    children,
    top = 0,
    right = 0,
    width = 400,
    height,
}: PopupProps) => {
    return <PopupContainer
        top={top}
        right={right}
        width={width}
        height={height}>
        <PopupHeader>
            <img src={Icon.Close} alt="닫기 버튼" onClick={onClose} />
        </PopupHeader>
        <PopupContent>
            {children}
        </PopupContent>
    </PopupContainer>;
};