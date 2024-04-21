import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header/Header"
import { news } from "../ExampleDataFiles/NewsData.json"


export default function New() {

    const { id } = useParams();
    const newsData = news.find(item => item.id === parseInt(id));
    if (!newsData) {
        return <>
        <Header />
        <div className="container">
                    <div className="section-title">
                        <h2>Новини не існує</h2>
                    </div>
                </div>
                </>
    }

    return (
        <>
            <Header />
            <div className="container">

                <div className="section-title">
                    <h2>{newsData.title}</h2>
                    <p>{newsData.date}</p>
                </div>
                <div className='row'>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <img src={newsData.src} alt={newsData.src} key={newsData.id} className="img-fluid" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>{newsData.description}</h3>
                        <p className="fst-italic">
                            {newsData.text}
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