import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = () => (
    <div className='shop-page'>
        <Routes>
          <Route path='' element={<CollectionsOverview />} />
          <Route path= ':collectionId' element={<CollectionPage />} />
        </Routes>
    </div>
);



export default ShopPage;