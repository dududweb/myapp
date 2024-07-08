import { API_URL } from "../app/constans";
import potato from "../app/styles/moive.info.module.css";

export async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

const ProductionCompanies = ({ companies }) => {
  return (
    <div className={potato.itemWrap}>
      {companies.map((company) => (
        <div key={company.id} className="item">
          <h2>{company.name}</h2>
          <p>{company.origin_country}</p>
          <div className={potato.logoImg}>
            <img src={company.logo_path} alt={company.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={potato.container}>
      <img
        className={potato.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3 className={potato.vote}>{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
          Homepage &rarr;
        </a>
        <ProductionCompanies companies={movie.production_companies} />
      </div>
    </div>
  );
}
