import { ApiProperty } from "@nestjs/swagger";

export class CreateMovieDto {
  title: string;
  @ApiProperty()
  year: number;
  @ApiProperty()
  director: string;
  @ApiProperty()
  plot: string;
  @ApiProperty()
  poster: string;
  @ApiProperty()
  imdb: string;
  @ApiProperty()
  tmdb: string;
}
