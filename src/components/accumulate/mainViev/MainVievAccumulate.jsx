import SideMenu from './menu/menuLeftNav';
import menuData from './menu/menuData.json';

import magnumImg from 'assets/cardAccumulate/magnum 1.jpg';
import zverImg from 'assets/cardAccumulate/zver.jpg';
import tumenImg from 'assets/cardAccumulate/magnum 1 (1).jpg';
import afaImg from 'assets/cardAccumulate/afa.jpg';
import akomImg from 'assets/cardAccumulate/akom.jpg';
import barsImg from 'assets/cardAccumulate/bars.jpg';
import boshImg from 'assets/cardAccumulate/bosh.jpg';
import edconImg from 'assets/cardAccumulate/edcon.jpg';
import enrunImg from 'assets/cardAccumulate/enrun.jpg';
import multuImg from 'assets/cardAccumulate/mutlu.jpg';
import unixImg from 'assets/cardAccumulate/unix.jpg';
import bearImg from 'assets/cardAccumulate/bear.jpg';
import optimaImg from 'assets/cardAccumulate/optima.jpg';
import otherImg from 'assets/cardAccumulate/other.jpg';

import './mainvievaccumulate.scss';

const MainVievAccumulate = () => {

    const cardList = [
        {
            image: magnumImg,
            title: "АКБ MAGNUM",
            info: 'Компания «Кайнар – АКБ», Казахстан'
        },
        {
            image: zverImg,
            title: 'АКБ ЗВЕРЬ',
            info: 'Компания «Аккумуляторные технологии» – ООО "АкТех". Иркутская область, г. Свирск'
        },
        {
            image: tumenImg,
            title: 'ТЮМЕНСКИЙ А З',
            info: 'АО "Тюменский аккумуляторный завод" Россия, г. Тюмень'
        },
        {
            image: afaImg,
            title: 'АКБ AFA',
            info: 'Аккумуляторы AFA выпускаются на заводах концерна "Johnson Controls". Страна: Чехия'
        },
        {
            image: akomImg,
            title: 'АКБ AKOM',
            info: 'АО "ТОРГОВЫЙ ДОМ АКОМ" Россия, Самарская область, г. Тольятти'
        },
        {
            image: barsImg,
            title: 'АКБ BARS',
            info: 'Компания «Кайнар – АКБ», Казахстан'
        },
        {
            image: boshImg,
            title: 'АКБ BOSCH',
            info: '"VB Autobatterie Gmbh & Co. KgaA" ,  Германия, Гановер'
        },
        {
            image: edconImg,
            title: 'АКБ EDCON',
            info: 'Компания «Кайнар – АКБ», Казахстан'
        },
        {
            image: enrunImg,
            title: 'АКБ ENRUN',
            info: 'AUTOPART S.A. Польша, г. Мелец'
        },
        {
            image: multuImg,
            title: 'АКБ MUTLU',
            info: 'MUTLU AKU, Турция'
        },
        {
            image: unixImg,
            title: 'АКБ UNIX (WESTA)',
            info: 'Аккумуляторы производятся на заводах международной корпорации "WESTA"'
        },
        {
            image: bearImg,
            title: 'АКБ ТЮМЕНСКИЙ МЕДВЕДЬ',
            info: 'ЗАО МПКФ "Алькор" Россия, г. Тюмень'
        },
        {
            image: optimaImg,
            title: 'Гелиевые АКБ OPTIMA',
            info: 'Производство: США/Мексика'
        },
        {
            image: otherImg,
            title: 'Оригинальные АКБ',
            info: ''
        },
        
    ]

    return (
        <>
            <div className='mainContainerAccum'>
                <div className='leftNavFilter'>
                    <SideMenu data={menuData} />
                </div>
                <div className='RightAccumBrand'>

                    {cardList.map((card) => (
                        <div className='cardBrand'>
                            <div className='imageCard'><img src={card.image} alt="" /></div>
                            <div className='titleCard'>
                                <span>{card.title}</span>
                                <span>{card.info}</span>
                                <button>подробнее</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default MainVievAccumulate;