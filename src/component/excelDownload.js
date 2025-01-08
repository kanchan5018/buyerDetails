import React from 'react';
import * as XLSX from "xlsx";

const ExcelDownload = ({ data }) => {

    const handleDownload = () => {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(data);
    
        XLSX.utils.book_append_sheet(workbook, worksheet, "Buyers");
    
        XLSX.writeFile(workbook, "ReportFor2023.xlsx", { compression: true });
      };
    return (
        <button onClick={handleDownload}>Download Excel</button>
    );
};

export default ExcelDownload;
