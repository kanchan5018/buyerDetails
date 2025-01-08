import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Descriptions, Button, InputNumber } from 'antd';

const SelectedRowsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedRows } = location.state || {};

    const [updatedRows, setUpdatedRows] = useState(
        selectedRows?.map(row => ({ ...row, extraCharges: 0 })) || []
    );

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleExtraChargesChange = (value, index) => {
        const updated = [...updatedRows];
        updated[index].extraCharges = value || 0; // Update extra charges
        setUpdatedRows(updated);
    };

    const handleSave = () => {
        // Perform save logic (e.g., send updatedRows to an API or update state)
        console.log('Saved Rows:', updatedRows);
        
    };

    if (!selectedRows || selectedRows.length === 0) {
        return (
            <div className="container text-center mt-5">
                <p>No data available</p>
                <Button type="primary" onClick={handleBack}>
                    Back
                </Button>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            {/* Back Button */}
            <div className="mb-4 d-flex justify-content-between align-items-center">
                <h2>Selected Buyers</h2>
                <Button type="primary" onClick={handleBack}>
                    Back
                </Button>
            </div>

            {/* Responsive Cards Layout */}
            <div className="row g-4">
                {updatedRows.map((row, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                        <Card title={`Buyer ${index + 1}`} className="shadow-sm" style={{ borderRadius: '8px' }}>
                            <Descriptions column={1} bordered>
                                <Descriptions.Item label="Name">{row.name}</Descriptions.Item>
                                <Descriptions.Item label="Email">{row.email}</Descriptions.Item>
                                <Descriptions.Item label="Mobile">{row.mobile}</Descriptions.Item>
                                <Descriptions.Item label="Address">{row.address}</Descriptions.Item>
                                <Descriptions.Item label="Buying Type">{row.buyingType}</Descriptions.Item>
                                <Descriptions.Item label="Current Price">{row.currentPrice}</Descriptions.Item>
                                <Descriptions.Item label="Extra Charges">
                                    <InputNumber
                                        min={0}
                                        value={row.extraCharges}
                                        onChange={(value) => handleExtraChargesChange(value, index)}
                                        style={{ width: '100%' }}
                                    />
                                </Descriptions.Item>
                                <Descriptions.Item label="Total Price">
                                    {row.currentPrice + row.extraCharges}
                                </Descriptions.Item>
                            </Descriptions>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Save Button */}
            <div className="text-center mt-4">
                <Button type="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </div>

        </div>
    );
};

export default SelectedRowsPage;
