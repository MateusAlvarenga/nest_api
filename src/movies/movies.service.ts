import { Injectable } from "@nestjs/common";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { Prisma, Movie, PrismaPromise } from "@prisma/client";
import { PrismaService } from "src/service/PrismaService";

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
    return this.prisma
      .$transaction([
        this.prisma.movie.count(),
        this.prisma.movie.findMany({
          take: size,
          skip: page * size,
        }),
      ])
      .then((res) => {
        return {
          totalElements: res[0],
          totalPages: Math.round(res[0] / size),
          content: res[1],
        };
      })
      .catch((err) => console.error(err));
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
