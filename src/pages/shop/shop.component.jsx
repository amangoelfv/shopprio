import React, { useState } from 'react';
import { SHOP_DATA } from './shop.data.js'
import CollectionPreview from './../../components/collection/collection.component';

const ShopPage = () => {

    const [collections, setCollections] = useState(SHOP_DATA)
    return (
        <div className='shop-page'>
            {
                collections.map((collection) => (

                    <CollectionPreview key={collection.id} items={collection.items} title={collection.title} />
                ))
            }
        </div>
    )

}

export default ShopPage;