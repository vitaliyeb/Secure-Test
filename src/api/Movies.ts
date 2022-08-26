import {HttpClient} from "../libs/HttpClient";
import {IMovieFilters} from "../components/FilterPanel";
import {AxiosPromise} from "axios";
import {IMoviesResponse} from "./Movies.interfaces";

export class APIMovies {
    static getMovies(params: IMovieFilters & {page: number}): AxiosPromise<IMoviesResponse> {
        return HttpClient.get('discover/movie', {
            params: {
                'with_genres': params.genres,
                'vote_count.gte': params.rating,
                'year': params.year,
                'sort_by': 'release_date.desc',
                'page': params.page
            }
        });
    }
}