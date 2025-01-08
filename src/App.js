import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import AddBuyerPage from './pages/addbuyerspage';
import ManageBuyersPage from './pages/managebuyerspage';
import BuyerDetailsPage from './pages/buyersDetailsPage';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
    return (
      <Provider store = {store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/add-buyer" element={<AddBuyerPage/>} />
                <Route path="/manage-buyers" element={<ManageBuyersPage/>} />
                <Route path="/buyer-details/:id" element={<BuyerDetailsPage/>} />
            </Routes>
        </BrowserRouter>
      </Provider>
    );
};

export default App;
