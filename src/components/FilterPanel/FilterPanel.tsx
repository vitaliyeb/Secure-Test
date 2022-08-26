import styles from './style.module.css';

import {GENRES, RATING, YEARS} from "../../constants";
import {Select} from "../UI/Select";
import {GroupSelect} from "../UI/GroupSelect";
import {Input} from "../UI/Input";
import {useState} from "react";


export interface IMovieFilters {
    name: string;
    rating: string;
    genres: Array<string>;
    year: string;
}

export interface IFilterPanelProps {
    handleSend: (filters: IMovieFilters) => void;
    initialFilters?: IMovieFilters;
}

export const FilterPanel: React.FC<IFilterPanelProps> = ({ handleSend, initialFilters }) => {

    const [filters, setFilters] = useState( initialFilters || {
        name: '',
        rating: '',
        genres: [],
        year: ''
    });

    const send = () => {
        handleSend(filters);
    }

    const onChange = (key: keyof typeof filters) => (value: typeof filters[typeof key]) =>
        setFilters({...filters, [key]: value});

    return (<div className={styles.wrapper} data-type="filter-panel">
        <GroupSelect
            placeholder="Movie search"
            customClass={styles.genres}
            values={filters.genres}
            label="genres"
            options={GENRES}
            onChange={onChange("genres")}
        />
        <Input
            placeholder="Movie search"
            customClass={styles.title}
            value={filters.name}
            label="movie title"
            onChange={onChange('name')}
        />
        <Select
            placeholder="Choose rating"
            onChange={onChange('rating')}
            value={filters.rating}
            options={RATING}
            label="Rating"
        />
        <Select
            placeholder="Choose year"
            onChange={onChange('year')}
            value={filters.year}
            options={YEARS}
            label="year of issue"
        />
        <button className={styles.button} onClick={send}>
            SEND
        </button>
    </div>)
}