import { useState } from 'react';

import './menuLeft.scss';

const MenuItem = ({ item, depth = 0 }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(item.children);

  const getBgColor = () => {
    if (!open) return '#2D2D2D';

    if (depth === 0) return '#C53720';      
    if (depth === 1) return '#1D1D1D';      
    return '#2D2D2D';                       
  };

  const getTitleColor = () => {
    if (!open) return 'white';

    if (depth === 0) return 'white';      
    if (depth === 1) return 'gray';      
    return 'gray';                       
  };

  return (
    <div className='parentItem'>
      <div
        onClick={() => hasChildren && setOpen(!open)}
        style={{
          cursor: hasChildren ? 'pointer' : 'default',
          fontWeight: hasChildren ? 'bold' : 'normal',
          backgroundColor: getBgColor(),
          color: getTitleColor(),
          height: '6vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {hasChildren && (
          <span
            style={{
              display: 'inline-block',
              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
              marginRight: '3%',
              marginLeft: '3%'
            }}
          >
            ▶
          </span>
        )}
        {item.title}
      </div>

      {hasChildren && open && (
        <div>
          {item.children.map((child, idx) =>
            typeof child === 'string' ? (
              <div key={idx} style={{ backgroundColor: 'black', color: "gray", height: '6vh', paddingLeft: '10%', cursor: 'pointer'}}>
                {child}
              </div>
            ) : (
              <MenuItem key={idx} item={child} depth={depth + 1} />
            )
          )}
        </div>
      )}
    </div>
  );
};

const SideMenu = ({ data }) => {
  return (
    <div className='containerMenu'>
      {data.map((item, index) => (
        <MenuItem key={index} item={item} depth={0} />
      ))}
    </div>
  );
};

export default SideMenu;


