import React, {useEffect} from "react";
import styles from './style.module.css';

import {IMovie, IMovies} from "../../../api";
import poster from "./../../../assets/images/poster.png";

export interface IListProps {
    movies: IMovies;
    scrollCallback: () => void;
    handleCardClick: (mov: IMovie) => void;
}

export const List: React.FC<IListProps> = ({ movies, scrollCallback, handleCardClick }) => {

    useEffect(() => {
        const handleScroll = (e: Event) => {
            const target = e.target as Document;
            if(target.documentElement.scrollHeight <  target.documentElement.scrollTop + window.innerHeight + 200) {
                scrollCallback();
                document.removeEventListener('scroll', handleScroll);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [movies.length]);

    return (<div className={styles.wrapper}>
        {
            movies.map((movie) => {
                return (<div className={styles.card} key={movie.id} onClick={() => handleCardClick(movie)}>
                    <img src={poster} alt=""/>
                    <div className={styles.info}>
                        <p className={styles.title}>{ movie.original_title } <span>{movie.vote_count} / {movie.release_date.slice(0, 4)}</span></p>
                        <p className={styles.overview}>{movie.overview}</p>
                    </div>
                </div>)
            })
        }
    </div>)
}