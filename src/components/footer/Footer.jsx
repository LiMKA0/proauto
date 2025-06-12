import './footer.scss';

import logoFooter from 'assets/header/logo.svg';
import iconCall from 'assets/footer/Vector.svg';
import iconMail from 'assets/footer/Subtract.svg';

const Footer = () => {
    return (
        <footer>
            <div className='containerGridFooter'>
                <div><img src={logoFooter} alt="" />
                    <span>© 2019 PRO Auto.
                        Все права защищены.</span>
                </div>
                <div>
                    <span>компания</span>
                    <span>О КОМПАНИИ</span>
                    <span>ЛИЦЕНЗИИ</span>
                    <span>ПАРТНЕРЫ</span>
                    <span>ОТЗЫВЫ КЛИЕНТОВ</span>
                    <span>РЕКВИЗИТЫ</span>
                    <span>ВАКАНСИИ</span>
                </div>
                <div><span>каталог</span>
                    <span>аккумуляторы</span>
                    <span>автомасла</span>
                    <span>аксессуары</span>
                    <span>автохимия</span>
                </div>
                <div><span>услуги</span>
                    <span>диагностика аккумулятора</span>
                    <span>прием аккумуляторов</span>
                </div>
                <div><span>информация</span>
                    <span>акции</span>
                    <span>новости</span>
                    <span>статьи</span>
                    <span>вопрос - ответ</span>
                </div>
                <div className='contactContainer'>
                    <div>
                        <img src={iconCall} alt="" />
                        <span>+7 (342) 279-36-13</span>
                    </div>
                    <div>
                        <img src={iconMail} alt="" />
                        <span>proauto59@yandex.ru</span>
                    </div>
                    <button>заказать звонок</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;