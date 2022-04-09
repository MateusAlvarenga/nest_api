import { Module } from "@nestjs/common";
import { MoviesController } from "./movies/movies.controller";
import { MoviesService } from "./movies/movies.service";

import { MoviesModule } from "./movies/movies.module";
import { PrismaService } from "./service/PrismaService";
@Module({
  imports: [MoviesModule],
  controllers: [MoviesController],
  providers: [MoviesService, PrismaService],
})
export class AppModule {}
