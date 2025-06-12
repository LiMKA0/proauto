import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Product.scss';

import accum from 'assets/product/accumulator.jpg';
import oil from 'assets/product/oil.jpg';
import cosmenics from 'assets/product/cosmetics.jpg';
import accessuar from 'assets/product/accessuar.jpg';
import chemistry from 'assets/product/chemistry.jpg';
import others from 'assets/product/other.jpg';

const Product = ({titleUp, titleCenter, titleBottom}) => {

    const contents = [{ id: 1, text: 'АККУМУЛЯТОРЫ', back: accum, link: "/main/catalog/accumulate"},
    { id: 2, text: 'АВТОМАСЛА', back: oil },
    { id: 3, text: 'АВТОКОСМЕТИКА', back: cosmenics },
    { id: 4, text: 'АВТОАКСЕССУАРЫ', back: accessuar },
    { id: 5, text: 'АВТОХИМИЯ', back: chemistry },
    { id: 6, text: 'РАСХОДНИКИ', back: others }]



    return (
        <>
            <div className='product'>
                <div className='containerInfo'>
                    <span>{titleUp}<br /> <span style={{
                        textDecoration: "underline 20% #D42E12", fontWeight: '600',
                        fontSize: "clamp(0.1vw, min(2vw, 4vh), 6vw)", textUnderlineOffset: '50%'
                    }}> {titleCenter} </span></span>
                    <span>{titleBottom}</span>

                    <div className='gridCard'>
                        {contents.map(content => (
                            <div className='containerCard'>
                                <img src={content.back} alt="" />
                                <div>{content.text}
                                    <button><Link to={content.link}>ЗАКАЗАТЬ ОНЛАЙН</Link></button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Product;