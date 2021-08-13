import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(id: number): Movie;
    deleteOne(id: number): void;
    create(movieData: CreateMovieDto): void;
    update(movieId: number, updateData: Movie): void;
}
