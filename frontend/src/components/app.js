import React from 'react';
import { Route } from 'react-router-dom';
import ProductIndexContainer from './products/product_index_container';
import ProductFormContainer from './products/product_form_container';

const App = () => (
    <div className="app" >
        <Route exact path="/" component={ProductIndexContainer} />
        <Route path="/" component={ProductFormContainer} />
    </div>
)


export default App;