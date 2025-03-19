# CDRI 프론트엔드 사전과제

---
## 프로젝트 개요

## 실행 방법 및 환경설정
- node version: v22.14.0
- Vite + React + Typesctipt

## 폴더 구조 및 주요 코드 설명
- assets: 아이콘 svg파일들을 모아둔 폴더입니다.
- components: 재사용 가능한 컴포넌트들을 모아두며, `Button`과 `Input` 같은 UI 컴포넌트는 components/ui에 정리합니다.
- context: 전역 상태를 관리합니다.
- defines: 타입 정의를 저장합니다.
- pages: 라우터별 페이지 컴포넌트를 관리하며, `index.tsx`는 페이지 컴포넌트, `style.ts`는 페이지 스타일을 담고 있습니다.
- router: 페이지 라우트를 관리합니다.
- state: tanstack-query의 mutation, query, store 구조를 분리하여 관리합니다.
- styles: 글로벌 스타일, 테마, 공유 스타일을 포함합니다.
- utils: 전역 변수와 유틸리티 함수들을 저장합니다.

## 라이브러리 선택 이유

## 강조하고싶은 기능


---
> `도서검색` / `내가 찜한 책` useContext로 관리할지? routing으로 관리할지?