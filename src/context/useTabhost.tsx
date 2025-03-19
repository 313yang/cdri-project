import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { TabhostType } from "@/defines/global";

/** TabhostType 정의 */
interface TabhostProviderProps {
    children: ReactNode;
}

/** TabhostContext의 타입 정의 */
interface TabhostContextType {
    tabhost: TabhostType;
    setTabhost: Dispatch<SetStateAction<TabhostType>>;
}

/**
 * Tabhost의 context를 생성합니다.
 */
const TabhostContext = createContext<TabhostContextType | null>(null);

export const TabhostProvider = ({ children }: TabhostProviderProps) => {
    const [tabhost, setTabhost] = useState<TabhostType>(TabhostType.Search);
    return (
        <TabhostContext.Provider value={{ tabhost, setTabhost }}>
            {children}
        </TabhostContext.Provider>
    );
};

/** TabhostProvider로 감싸지지 않은 컴포넌트에선 error를 반환합니다. */
export const useTabhost = (): TabhostContextType => {
    const context = useContext(TabhostContext);
    if (!context) {
        console.error("useTabhost must be used within a TabhostProvider");
    }
    return context as TabhostContextType;
};