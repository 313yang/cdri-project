/** 드롭다운 옵션 타입입니다. */
export interface DropdownOptionType {
	target: TargetType;
	name: string;
}

/** 도서 검색 시 `target` 에 들어가는 타입입니다. */
export type TargetType = "title" | "publisher" | "person"

