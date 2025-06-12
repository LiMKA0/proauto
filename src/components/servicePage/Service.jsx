import './service.scss';

const Service = () => {
    return (
        <div className='containerService'>
            <div className='containerCenter'>
                <span>услуги</span>
                <span>Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции.</span>
                <div className='containerCardService'>
                    <div>
                        <span>ДИАГНОСТИКА АККУМУЛЯТОРА</span>
                        <button>ПОДРОБНЕЕ</button>
                    </div>
                    <div>
                        <span>ПРИЕМ АККУМУЛЯТОРОВ</span>
                        <button>ПОДРОБНЕЕ</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Service;