import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";
import { Suspense } from "react";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
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
    </div>
  );
}
