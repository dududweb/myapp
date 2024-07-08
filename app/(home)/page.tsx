import Movie from "../../components/movie";
import styles from "../styles/home.module.css";

export const metadata = {
  title: "HOME",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}

//여기가 백엔드야~~!!!
// metadata는 병합된다.
// 브라우저에서 fetchg한게 없다, 네트워크에 안찍힘. 여기에 db둬도 된다 유저가 못보는 페이지? 밑에 콘솔로그 찍으면 서버단에서만 찍힘 브라우저에서 안찍힘

// 컴포넌트 밖에 있어도됨
// 첫번째 fetch만 진짜고 이후에는 api 호출하지 않는다. 캐싱되어 있기 때문에 next js가 캐싱도 되는 프레임웤

// 이전에하던 밑과 같다.
// return fetch(URL).then((response) => response.json());
