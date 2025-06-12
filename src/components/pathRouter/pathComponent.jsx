import { Link, useLocation } from "react-router-dom";

import './pathRouter.scss';
import arrow from 'assets/pathRoute/стрелка.svg';

const nameMap = {
    '': 'Главная',
    main: 'Главная',
    catalog: 'Каталог',
    accumulate: 'Аккумуляторы',
    service: 'Услуги'
  };

const PathRouter = () => {
    const location = useLocation();

    const pathNames = location.pathname.split("/").filter(x => x);

    return (
        <div className="pathRoterContainer">{
            pathNames.map((value, index) => {
                const to = `/${pathNames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathNames.length - 1;
                const name = nameMap[value] || decodeURIComponent(value);

                return (
                    <div key={to}>
                        {index > 0 && (<img src={arrow} alt="" />)}
                        {isLast ? <span>{name}</span> : <Link to={to}>{name}</Link>}
                    </div>
                );
            })
        }</div>
    )
}

export default PathRouter;