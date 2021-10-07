import React, { useState } from 'react';
import MenuItem from './../menu-item/menu-item.component';
import './directory.style.scss';
import { sections } from './directory.data'
const Directory = () => {

    const [data, setData] = useState(sections)
    return (
        <div className='directory-menu'>
            {
                data.map(({ title, imageUrl, id , size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}></MenuItem>
                ))
            }
        </div>
    )
}



export default Directory;