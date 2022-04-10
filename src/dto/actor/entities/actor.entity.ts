
import {Movie} from '../../movie/entities/movie.entity'


export class Actor {
  id: number ;
name: string ;
movie?: Movie  | null;
movie_id: number  | null;
createdAt: Date ;
updatedAt: Date ;
}
