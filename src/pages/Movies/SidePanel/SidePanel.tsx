import styles from './style.module.css';
import poster from './../../../assets/images/poster.png';
import {IMovie} from "../../../api";

export interface ISidePanelProps {
    movie: IMovie | null;
    handleClose: () => void;
}

export const SidePanel: React.FC<ISidePanelProps> = ({ movie, handleClose }) => {

    if (!movie) return null;

    return (<div className={styles.wrapper}>
        <div onClick={handleClose} className={styles.close}></div>
        <img src={poster} alt=""/>
        <p className={styles.title}>{movie?.title}</p>
        <p className={styles.overview}>{ movie?.overview }</p>
        <p className={styles.desc}>Vote count: <span>{ movie?.vote_count }</span></p>
        <p className={styles.desc}>Release date: <span>{ movie?.release_date }</span></p>
        <p className={styles.desc}>Genres: <span>{ movie?.genre_ids.join(', ') }</span></p>
    </div>)
}