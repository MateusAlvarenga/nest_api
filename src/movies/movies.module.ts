import { Module } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { MoviesController } from "./movies.controller";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/service/PrismaService";

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, PrismaService],
})
export class MoviesModule {}
