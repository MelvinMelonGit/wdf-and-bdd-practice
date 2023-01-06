import MovieLi from "./MovieLi";

export default function MovieList(props) {
  return (
    <ul>
      {props.movies.map((movie) => (
        <MovieLi
          key={movie.id}
          onSelect={() => props.onSelect(movie.id)}
          {...movie}
          selectedMoviesId={props.selectedMoviesId}
        />
      ))}
    </ul>
  );
}