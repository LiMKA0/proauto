import React, { use } from 'react';
import { useState } from 'react';
import './partners.scss';

import faworit from 'assets/news/faworit.png';
import yunix from 'assets/news/yunix.png';
import accum from 'assets/news/accum.png';
import binom from 'assets/news/binom.png';
import armtek from 'assets/news/armtek.png';
import partcom from 'assets/news/partcom.png';
import arrow from 'assets/news/arrow.svg';

const Partners = () => {

    const ListNews = [{ id: 1, urlImg: faworit },
    { id: 2, urlImg: yunix },
    { id: 3, urlImg: accum },
    { id: 5, urlImg: binom },
    { id: 6, urlImg: armtek },
    { id: 7, urlImg: partcom }
    ];

    const [startIndex, setStartIndex] = useState(0);

    const prevSlide = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % ListNews.length);
    };

    const nextSlide = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + ListNews.length) % ListNews.length);
    };

    const visibleSlides = Array.from({ length: 4 }, (_, i) =>
        ListNews[(startIndex + i) % ListNews.length]
    );


    return (
        <div className='containerPartners'>
            <div className='mainPartners'>
                <button onClick={prevSlide}><img src={arrow} alt="" /></button>
                <div>
                    {visibleSlides.map((slide) => (
                        <img src={slide.urlImg} alt="" />
                    ))}
                </div>
                <button onClick={nextSlide}><img src={arrow} alt="" /></button>
            </div>
        </div>
    );
}

export default Partners;