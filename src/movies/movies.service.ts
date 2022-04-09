import { Injectable } from "@nestjs/common";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { Prisma, Movie, PrismaPromise } from "@prisma/client";
import { PrismaService } from "src/service/PrismaService";

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMovieDto: CreateMovieDto): string {
    return "This action adds a new movie";
  }

  findAll(): PrismaPromise<Movie[]> {
    return this.prisma.movie.findMany();
  }

  findOne(id: number): PrismaPromise<Movie> {
    return this.prisma.movie.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
