import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import HomePage from './pages/homepage';
import SelectedRowPage from './pages/SelectedRowPage';
import AddBuyerPage from './pages/addbuyerspage';
import ManageBuyersPage from './pages/managebuyerspage';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
    return (
      <Provider store = {store}>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<HomePage/>} /> */}
                <Route path="/add-buyer" element={<AddBuyerPage/>} />
                <Route path="/" element={<ManageBuyersPage/>} />
                <Route path="/selected-row" element={<SelectedRowPage />} />
            </Routes>
        </BrowserRouter>
      </Provider>
    );
};

export default App;
