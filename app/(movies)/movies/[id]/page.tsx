import MovieVideos from "../../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieSimilar from "../../../../components/movie-similar";
import MovieSimilarSlick from "../../../../components/movie-similar-slick";
import { Suspense } from "react";

interface IParams {
  params: { id: string };
}

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovieSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}
//api call 두번 해도 상관없다. 캐싱이 일어나기때문에.
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  const similarMovies = await getMovieSimilar(id);
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);// 둘다 동시에 실행되서 이것도 훌륭하지만 둘다 끝날때까지 기다려야한다. ui가 빈다.
  return (
    <div>
      {/* suspense는 fallback prop이 존재하고 component가 await되는 동안 표시할 메세지를 render 할 수 있게 해준다.*/}
      <Suspense fallback={<h3>Loading movie info</h3>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h3>Loading movie videos</h3>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense>
        <MovieSimilarSlick similarMovies={similarMovies} />
      </Suspense>
    </div>
  );
}
