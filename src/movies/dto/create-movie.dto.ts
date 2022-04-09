export class CreateMovieDto {
  title: string;
  year: number;
  director: string;
  plot: string;
  poster: string;
  imdb: string;
  tmdb: string;
  genre_id: number | null;
}
