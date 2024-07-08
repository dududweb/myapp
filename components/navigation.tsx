"use client";

//백엔드에서 렌더되고 프론트엔드에서 hydrate된다.
//그래서 명칭이 헷갈린거다 차라리 'use hydrate in client'라고 했으면 덜 혼동
//use client가 있던말던 SSR이다
//next js에선 모든 컴포넌트가 서버단에서 렌더링된다. Backend 렌더
//use client가 없는 곳은 html 덩어리로만 존재한다. hydrate 되지않아도 되므로
// 유저는 더 적은 자바스크립트를 다운받는다 >> 속도 업.
//컴포넌트에선 메타데이터 못내보낸다, 오직 페이지와 레이아웃
//클라이언트 컴포넌트를 서버컴포넌트내에서 포함 가능 반대는 안된다.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../app/styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">HW</Link>
          {/* {path === "/" ? "true" : "false"} */}
        </li>
        <li>
          <Link href="/myinfo">info</Link>
        </li>
      </ul>
    </nav>
  );
}

// 이 일은 매우 순식간에 일어난다.
// react hydration
// /about ----> boring HTML ----> user happy ----> init(react component로 변환 인터렉티브) 하드 새로고침없이 변환 크롬에서 해볼것 자바스크립트 비활성/활성
// 자바스크립트 끄면 로드되기전에는 더미 Html 하드 새로고침 자바스크립트 키면 init 완료 후 하이드레이션 리액트 컴포넌트로 변환됨
// hydration은 단순 html을 React application으로 초기화하는 작업
