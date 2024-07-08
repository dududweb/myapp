import { API_URL } from "../app/constans";
import styles from "../app/styles/movie-similar.module.css";
import React from "react";

async function getMovieSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
  const similar = await getMovieSimilar(id);

  return (
    <div className={styles.container}>
      {similar.map((similarMovies) => (
        <div key={similarMovies.id}>
          <div>
            <img src={similarMovies.backdrop_path} alt={similar.title} />
          </div>
          <h3>{similar.title}</h3>
        </div>
      ))}
    </div>
  );
}
//라이브러리로 구현해보기
//리액트자체에서 구현해보기 타입스크립트 일반 1롤링 형태
