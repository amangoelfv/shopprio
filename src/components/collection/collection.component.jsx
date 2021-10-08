import React from 'react';
import './collection.style.scss';
import CollectionItem from './../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((_, ind) => ind < 4)
                    .map(({ id, ...props }) => (
                        <CollectionItem key={id} {...props}></CollectionItem>
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview;