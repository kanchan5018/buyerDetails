import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from '../redux/action';
import { Table,Divider, Radio, } from 'antd';
import { Link } from 'react-router-dom';

const ManageBuyersPage = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    const dispatch = useDispatch();
    const buyers = useSelector(state => state?.buyers?.buyersDetails || []);
    console.log("buyers",buyers)
    const loading = useSelector(state => state?.buyers?.isloading);

    useEffect(() => {
        dispatch(fetch());
    }, [dispatch]);

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Mobile', dataIndex: 'mobile', key: 'mobile' },
        { title: 'Action', key: 'action', render: (text, record) => (
            <Link to={`/buyer-details/${record.id}`}>View Details</Link>
        )},
    ];
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
      };

    return (
        <>
        <div className="back-to-home">
                <a className="back-button btn btn-icon btn-primary" href="/">
                    <i>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left icons">
                            <g>
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </g>
                        </svg>
                    </i>
                </a>
            </div>
         <Radio.Group onChange={(e) => setSelectionType(e.target.value)} value={selectionType}>
        </Radio.Group>
        <Divider />
        <Table dataSource={buyers} columns={columns} loading={loading} rowKey="id" rowSelection={{
            type: selectionType,
            ...rowSelection,
          }} />
        </>
    );
};

export default ManageBuyersPage;