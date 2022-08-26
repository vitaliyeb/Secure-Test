import {createSearchParams, useSearchParams} from "react-router-dom";
import {useEffect, useMemo, useRef, useState} from "react";

import styles from './style.module.css';
import {FilterPanel, IMovieFilters} from "../../components/FilterPanel";
import {APIMovies, IMovie, IMoviesResponse} from "../../api";
import {List} from "./List";
import {SidePanel} from "./SidePanel";

export const Movies = () => {
    const [search, setSearch] = useSearchParams();
    const scrollTopElement = useRef<HTMLDivElement>(null);
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
    const [movies, setMovies] = useState<Omit<IMoviesResponse, 'total_results'>>({
        page: 1,
        results: [],
        total_pages: 1
    });

    const filters = useMemo<IMovieFilters>(() => ({
        name: search.get('name') || '',
        rating: search.get('rating') || '',
        genres: search.get('genres') ? search.get('genres')?.split(',') || [] : [],
        year: search.get('year') || '',
    }), [search]);

    const getMovies = (filter: Parameters<typeof APIMovies.getMovies>["0"]) => {
        APIMovies.getMovies(filter)
            .then((res) => {
                if (res.status === 200) {
                    console.log('res.data.page', res.data.page)
                    setMovies(movies => ({
                        ...movies,
                        page: res.data.page,
                        results: res.data.page === 1 ? res.data.results : [...movies.results, ...res.data.results],
                    }))
                }
            })
    }

    useEffect(() => {
        if (scrollTopElement.current){
            scrollTopElement.current.scrollIntoView();
        }

        getMovies({...filters, page: 1})
    }, [filters]);

    const handleSend = (filters: IMovieFilters) => {
        setSearch(createSearchParams({
            ...filters,
            genres: filters.genres.join(',')
        }))
    };
    const scrollCallback = () => getMovies({...filters, page: movies.page + 1});

    return (<div className={styles.wrapper}>
        <div ref={scrollTopElement}></div>
        <header className={styles.header}>
            <FilterPanel initialFilters={filters} handleSend={handleSend} />
        </header>
        <main>
            <SidePanel handleClose={()=>setSelectedMovie(null)} movie={selectedMovie} />
            <List movies={movies.results} handleCardClick={(movie) => setSelectedMovie(movie)} scrollCallback={scrollCallback}/>
        </main>
    </div>)
}