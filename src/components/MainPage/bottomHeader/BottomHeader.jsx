import './bottomHeader.scss';

import card1 from 'assets/banner/card1.svg';
import card2 from 'assets/banner/card2.svg';
import card3 from 'assets/banner/card3.svg';
import card4 from 'assets/banner/card4.svg';
import arrow from 'assets/banner/arrow.svg';

const BottomHeader = () => {
    return(
        <div className="bottomBanner">
                <div>
                    <img id="cardLR" src={card1} alt="" />
                    <span>Наличный и безналичный расчет</span>
                </div>
                <div>
                    <img id="cardCenter" src={card2} alt="" />
                    <span>Техническая помощь и консультация</span>
                </div>
                <div>
                    <img id="cardCenter" src={card3} alt="" />
                    <span>Только качественная и проверенная продукция</span>
                    {/* <img src={arrow} alt="" /> */}
                </div>
                <div>
                    <img id="cardLR" src={card4} alt="" />
                    <span>Мы всегда на связи с 9:00 до 18:00!</span>
                    {/* <img src={arrow} alt="" /> */}
                </div>
            </div>
    );
}

export default BottomHeader;