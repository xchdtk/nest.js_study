import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
@Injectable()
export class MoviesService {
  private movies: Movie[] = []

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if(!movie) {
      throw new NotFoundException(`Movie with ID:${id} not found`)
    }
    return movie;
  }

  deleteOne(id: number): void {
    this.getOne(id)
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(movieData: CreateMovieDto): void {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(movieId: number, updateData: Movie){
    const movie = this.getOne(movieId);
    this.deleteOne(movieId);
    this.movies.push({...movie, ...updateData})
  }
}
