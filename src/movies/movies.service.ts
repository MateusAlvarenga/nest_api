import { Injectable } from "@nestjs/common";
import { Prisma, Movie, PrismaPromise } from "@prisma/client";
import { PrismaService } from "src/service/PrismaService";
import { CreateMovieDto, UpdateMovieDto } from "src/dto/movie/dto";

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMovieDto: CreateMovieDto) {
    return this.prisma.movie.create({
      data: {
        ...createMovieDto,
      },
    });
  }

  findAll(size = 10, page = 0) {
    return this.prisma.page<Movie>(this.prisma, this.prisma.movie, page, size);
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
