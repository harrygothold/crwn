import React, { Component } from 'react';
import ShopData from '../../data/shop.data';
import CollectionPreview from '../../components/collection-preview';

class ShopPage extends Component {
    state = {
        collections: ShopData
    }
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
            </div>
        )
    }
}

export default ShopPage;
