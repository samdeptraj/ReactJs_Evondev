import { Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import UseDebounce from '../../customHook/form/UseDebounce';
import './style.css';

export default function MovieSearchApp() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true); // Thêm trạng thái loading
    const movies = UseDebounce({ query, delay: 1000 });
    console.log('movies: ', movies);

    useEffect(() => {
        if (movies.length > 0) {
            setLoading(false); // Khi có dữ liệu phim, dừng loading
        } else {
            setLoading(true); // Nếu không có dữ liệu phim, bật loading
        }
    }, [movies]);

    const renderCard = () => {
        return movies?.map(item => (
            <div className="col-md-4" key={item.id}>
                <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} className="card-img-top" alt="Movie Image" />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text mt-2">{item.overview.length > 50 ? item.overview.slice(0, 100) + '...' : item.overview}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><i className="fas fa-star" /> {item.vote_average}</small>
                    </div>
                </div>
            </div>
        ));
    };
    console.log(loading);
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <input type="text" className="form-control search-bar" placeholder="Search movie" onChange={(e) => setQuery(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    {loading ? <Skeleton active /> : renderCard()}
                </div>
            </div>
        </div>
    );
}
