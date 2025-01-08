import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetch, selectedBuyers } from '../redux/action';
import ExtraCharges from '../component/extraCharges';
import ExcelDownload from '../component/excelDownload';

const BuyerDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const buyer = useSelector(state => state.buyers.selectedBuyers);
    const [extraCharges, setExtraCharges] = useState([]);

    useEffect(() => {
        dispatch(fetch());
        dispatch(selectedBuyers({ id })); // Fetch buyer details
    }, [dispatch, id]);

    const handleExtraChargesChange = (charges) => {
        setExtraCharges(charges);
    };

    return (
        <div>
            <h2>Buyer Details</h2>
            <div>
                <p>Name: {buyer.name}</p>
                <p>Email: {buyer.email}</p>
                <p>Mobile: {buyer.mobile}</p>
                <p>Address: {buyer.address}</p>
                <p>Buying Type: {buyer.buyingType}</p>
                <p>Diamond Purchase Details: {buyer.diamondPurchaseDetails}</p>
            </div>
            <ExtraCharges onChange={handleExtraChargesChange} />
            <ExcelDownload data={buyer} />
        </div>
    );
};

export default BuyerDetailsPage;
