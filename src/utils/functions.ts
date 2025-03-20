/** 윈도우를 새창으로 띄웁니다. */
export const openWindow = (url: string) => {
    return window.open(url, "_blank",);
};

/** 숫자를 원단위로 표기합니다. */
export const formatNumber = (value: number) =>
    value.toLocaleString('ko-KR');
