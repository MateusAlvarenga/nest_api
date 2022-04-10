
import {Movie} from '../../movie/entities/movie.entity'
import {User} from '../../user/entities/user.entity'


export class Review {
  id: number ;
title: string ;
content: string ;
stars: number ;
movie?: Movie  | null;
movie_id: number  | null;
user?: User  | null;
user_id: number  | null;
createdAt: Date ;
updatedAt: Date ;
}
