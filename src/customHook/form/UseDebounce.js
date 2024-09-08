import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UseDebounce({ query, delay }) {
    const [debounceValue, setDebounceValue] = useState([]);
    useEffect(() => {
        const timer = setTimeout(async () => {
            const api = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=c78d6d41f671095f78cb8620783a22aa`;
            if (query) {
                const { data } = await axios.get(api);
                console.log('data: ', data.results);
                setDebounceValue(data.results);
            }
        }, delay);
        return () => {
            clearTimeout(timer)
        }
    }, [delay, query])
    return debounceValue;
}
