import React, { useState } from 'react';
import MenuItem from './../menu-item/menu-item.component';
import './directory.style.scss';
import { sections } from './directory.data'
const Directory = () => {

    const [data, setData] = useState(sections)
    return (
        <div className='directory-menu'>
            {
                data.map(({ id, ...ops}) => (
                    <MenuItem key={id} {...ops}></MenuItem>
                ))
            }
        </div>
    )
}



export default Directory;