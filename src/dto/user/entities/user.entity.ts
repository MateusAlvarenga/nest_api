
import {Review} from '../../review/entities/review.entity'


export class User {
  id: number ;
name: string ;
email: string ;
password: string ;
createdAt: Date ;
updatedAt: Date ;
Review?: Review[] ;
}
