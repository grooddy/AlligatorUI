import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewsDataService from '../api/NewsDataService';


export default function New() {
    const [newsItem, setNewsItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchNews = async () => {
          try {
            const data = await NewsDataService.fetchNewsById(id);
            setNewsItem(data);
          } catch (error) {
            console.error('Error fetching news:', error);
          }
        };
    
        fetchNews();
      }, [id]);

    if (!newsItem) {
        return <>
        <div className="container">
                    <div className="section-title">
                        <h2>Новини не існує</h2>
                    </div>
                </div>
                </>
    }

    return (
        <>
            <div className="container">

                <div className="section-title">
                    <h2>{newsItem.title}</h2>
                    <p>{newsItem.date}</p>
                </div>
                <div className='row'>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <img src={"https://alligator-api.onrender.com/" + newsItem.src} alt={newsItem.src} key={newsItem.id} className="img-fluid" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>{newsItem.description}</h3>
                        <p className="fst-italic">
                        {newsItem.description}
                        </p>
                        <ul>
                            <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}