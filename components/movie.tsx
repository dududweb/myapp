"use client";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

import Link from "next/link";
import styles from "../app/styles/movie.module.css";
import { useRouter } from "next/navigation";

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`movies/${id}`);
  };
  console.log("router:", router);
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />{" "}
      {/* 온클릭은 클라이언트 이벤트 여기는 서버였다. 그래서 useclient를 써주면된다 이걸 쓴다고 나쁜게아님 */}
      <Link prefetch href={`movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
