import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { MoviesService } from "./movies.service";

import { ApiBody, ApiHeader, ApiQuery, ApiTags } from "@nestjs/swagger";
import { CreateMovieDto, UpdateMovieDto } from "src/dto/movie/dto";

@Controller("movies")
@ApiTags("movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiBody({ type: CreateMovieDto })
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiQuery({ name: "size", required: false, type: Number })
  @ApiQuery({ name: "page", required: false, type: Number })
  findAll(@Query() query) {
    return this.moviesService.findAll(+query.size || 10, +query.page || 0);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.moviesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.moviesService.remove(+id);
  }
}
