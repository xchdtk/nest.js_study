import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
export declare class MoviesController {
    readonly moviesService: MoviesService;
    constructor(moviesService: MoviesService);
    getAll(): Movie[];
    getOne(movieId: number): Movie;
    create(movieData: CreateMovieDto): void;
    remove(movieId: number): void;
    patch(movieId: number, updateData: Movie): void;
}
