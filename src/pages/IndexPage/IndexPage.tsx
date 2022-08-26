import styles from './style.module.css';
import {FilterPanel, IMovieFilters} from "../../components/FilterPanel";
import {useNavigate} from "react-router-dom";

export const IndexPage = () => {
    const navigate = useNavigate();

    const handleSend = (filters: IMovieFilters) => {
        const params = new URLSearchParams();
        params.append('name', filters.name);
        params.append('rating', filters.rating);
        params.append('genres', filters.genres.join(','));
        params.append('year', filters.year);
        navigate({
            pathname: '/movies',
            search: params.toString()
        })
    }

    return (<div className={styles.wrapper}>
        <FilterPanel handleSend={handleSend} />
    </div>)
}