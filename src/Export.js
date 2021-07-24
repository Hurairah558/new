import React from 'react'

import * as FileSaver from 'file-saver';

import * as XLSX from 'xlsx';

import { MDBBtn } from "mdbreact";

export const Export = ({csvData, fileName}) => {



    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    const fileExtension = '.xlsx';



    const exportToCSV = (csvData, fileName) => {

        const ws = XLSX.utils.json_to_sheet(csvData);

        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

        const data = new Blob([excelBuffer], {type: fileType});

        FileSaver.saveAs(data, fileName + fileExtension);

    }



    return (

        // <button className="btn btn-primary float-right mt-4"  onClick={(e) => exportToCSV(csvData,fileName)}><b>Export to Excel</b></button>
        <MDBBtn gradient="blue" className="btn btn-primary float-right mt-4"  onClick={(e) => exportToCSV(csvData,fileName)}><b>Export to Excel</b></MDBBtn>

    )

}