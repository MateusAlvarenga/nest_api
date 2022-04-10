
import {Actor} from '../../actor/entities/actor.entity'
import {Genre} from '../../genre/entities/genre.entity'
import {Review} from '../../review/entities/review.entity'


export class Movie {
  id: number ;
title: string ;
year: number ;
director: string ;
plot: string ;
poster: string ;
imdb: string ;
tmdb: string ;
actors?: Actor[] ;
genre?: Genre  | null;
genre_id: number  | null;
createdAt: Date ;
updatedAt: Date ;
Review?: Review[] ;
}
