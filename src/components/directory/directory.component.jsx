import React, { useState } from 'react';
import MenuItem from './../menu-item/menu-item.component';
import './directory.style.scss';
import { connect } from "react-redux";
const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...ops }) => (
                <MenuItem key={id} {...ops}></MenuItem>
            ))
        }
    </div>
)

const mapStateToProps = ({ directory: { sections } }) => ({
    sections
})

export default connect(mapStateToProps)(Directory);