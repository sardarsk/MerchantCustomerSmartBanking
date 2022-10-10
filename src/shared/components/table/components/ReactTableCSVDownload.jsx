import React from 'react'
import { CSVLink } from 'react-csv'
import { Button, } from 'reactstrap';

const ExportReactCSV = ({csvData, fileName}) => {
    return (
        <Button outline size="sm" >
            <CSVLink data={csvData} filename={fileName+'.csv'}>CSV</CSVLink>
        </Button>
    )
}

export default ExportReactCSV;
