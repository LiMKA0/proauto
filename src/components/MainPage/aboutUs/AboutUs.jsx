import './aboutUs.scss';

import face from 'assets/aboutUs/551ae813ecad043145f7348e 1.png';

const AboutUs = () => {
    return (
        <div className='backAbout'>
            <div className='containerInfoAbout'>
                <span className='mainText'>О КОМПАНИИ</span>
                <div className='insideContainer'>
                    <div className='imageBorder'>
                        <img src={face} alt="" />
                    </div>
                    <div className='content'>
                        <span>Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам в
                            «PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой аккумулятор
                            именно для вашего авто! С 1997 года сеть магазинов «PRO Auto» занимается
                            продажей автомобильных аккумуляторов, масел, расходных материалов, химией и аксессуаров.</span>
                        <button>УЗНАТЬ БОЛЬШЕ</button>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default AboutUs;