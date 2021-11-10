import React from 'react'
import './collection-overview.styles.scss';
import CollectionPreview from "./../collection/collection.component";
import { connect } from "react-redux";

const CollectionOverview = ({ collections }) => {

    return (
        <div className='collection-overview'>
            {
                Object.values(collections).map((collection) => (
                    <CollectionPreview key={collection.id} items={collection.items} title={collection.title} />
                )
                )
            }
        </div>
    )
}
const mapStateToProps = ({ collection }) => ({
    collections: collection
})
export default connect(mapStateToProps)(CollectionOverview);