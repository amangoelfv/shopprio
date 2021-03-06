import React from 'react'
import './collection.styles.scss';
import { connect } from "react-redux";
import collectionItemComponent from '../../components/collection-item/collection-item.component';
import CollectionItem from "./../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}
const mapStateToProps = ({ collection }, ownParams) => ({
    collection: collection[ownParams.match.params.collectionId]
})
export default connect(mapStateToProps)(CollectionPage);