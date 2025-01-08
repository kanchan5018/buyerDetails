import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchbuyers, diamondBuyersDetails } from '../redux/action';
import { Table, Modal, Typography, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from 'emailjs-com';  // Import EmailJS
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const ManageBuyersPage = () => {
    const { Title, Text } = Typography;
    const [selectionType, setSelectionType] = useState('checkbox');
    const [visible, setVisible] = useState(false);
    const [diamondDetails, setDiamondDetails] = useState(null);
    const [selectedRows, setSelectedRows] = useState([]);
    const buyersDiamondDetails = useSelector(state => state?.buyers?.buyersDiamondDetails);
    const dispatch = useDispatch();
    const buyers = useSelector(state => state?.buyers?.buyersDetails || []);
    const loading = useSelector(state => state?.buyers?.isloading);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchbuyers());
    }, [dispatch]);

    const handleViewDetails = (id) => {
        dispatch(diamondBuyersDetails(id));
        setVisible(true);
    };

    const handleSelectedRowData = () => {
        if (selectedRows.length > 0) {
            navigate('/selected-row', { state: { selectedRows } });
        } else {
            toast.error('Please select at least one row');
        }
    };

    const handleExportToExcel = () => {
        const data = buyers.map(buyer => ({
            Name: buyer.name,
            Email: buyer.email,
            Mobile: buyer.mobile,
            Address: buyer.address,
            'Buying Type': buyer.buyingType,
        }));
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Buyers');
        const excelFile = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        saveAs(new Blob([excelFile]), 'buyers.xlsx');
        toast.success('Buyers data exported successfully!');
    };

    const handleAddBuyer = () => {
        navigate('/add-buyer');
    };

    // New function to send email with the file attached
    const handleSendEmail = () => {
        const data = buyers.map(buyer => ({
            Name: buyer.name,
            Email: buyer.email,
            Mobile: buyer.mobile,
            Address: buyer.address,
            'Buying Type': buyer.buyingType,
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Buyers');
        const excelFile = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const file = new Blob([excelFile], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        const formData = new FormData();
        formData.append('file', file, 'buyers.xlsx');

        // Send email using emailjs
        emailjs.send('service_996bxqr', 'service_996bxqr', {
            from_name: 'Buyers', 
            to_name: 'Recipient',  
            message: 'Here is the buyers data attached.', // Optional, replace with the email body
            attachment: file // Attach the file
        },'FAlKw1dtjR7em5R3u') 
            .then((result) => {
                toast.success('Email sent successfully!');
            }, (error) => {
                toast.error('Failed to send email.');
            });
    };

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Mobile', dataIndex: 'mobile', key: 'mobile' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        { title: 'Buying Type', dataIndex: 'buyingType', key: 'buyingType' },
        {
            title: 'Action', key: 'action', render: (text, record) => (
                <button className="btn btn-link p-0" onClick={() => handleViewDetails(record.id)}>View Details</button>
            )
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRows(selectedRows);
        },
    };

    useEffect(() => {
        setDiamondDetails(buyersDiamondDetails);
    }, [buyersDiamondDetails]);

    return (
        <div className="container mt-4 ">
            <ToastContainer />
            <div className="row mb-3 justify-content-end d-flex gap-1">
                <div className="col-auto">
                    <button className="btn btn-success" onClick={handleAddBuyer}>Add Buyer</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-info" onClick={handleExportToExcel}>Export to Excel</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" onClick={handleSelectedRowData}>Selected Row Data</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-warning" onClick={handleSendEmail}>Send via Email</button>
                </div>
            </div>
            <div className="table-responsive">
                <Table
                    dataSource={buyers}
                    columns={columns}
                    loading={loading}
                    rowKey="id"
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    pagination={{ pageSize: 10 }}
                />
            </div>

            <Modal
                title="Diamond Details"
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
                centered
                width={600}
                bodyStyle={{ padding: '24px', fontSize: '16px', lineHeight: '1.6' }}
            >
                {diamondDetails ? (
                    <div>
                        <p><strong>Diamond Type:</strong> <Text>{diamondDetails.diamondType}</Text></p>
                        <p><strong>Shape:</strong> <Text>{diamondDetails.shape}</Text></p>
                        <p><strong>Carat Weight:</strong> <Text>{diamondDetails.caratWeight}</Text></p>
                        <p><strong>Color Grade:</strong> <Text>{diamondDetails.colorGrade}</Text></p>
                        <p><strong>Clarity Grade:</strong> <Text>{diamondDetails.clarityGrade}</Text></p>
                        <p><strong>Cut Grade:</strong> <Text>{diamondDetails.cutGrade}</Text></p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </Modal>
        </div>
    );
};

export default ManageBuyersPage;
