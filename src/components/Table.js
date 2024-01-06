import React, { useContext } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { MissionContext } from '../App';

/**
 * Table component displays space mission data in an Ag-Grid table.
 * It utilizes the Ag-GridReact component for efficient rendering and handling of large datasets.
 */
const Table = () => {
  // Access mission data from the MissionContext
  const missionData = useContext(MissionContext);

  // Define column headers and corresponding data fields
  const columnDefs = [
    { headerName: 'Date', field: 'date' },
    { headerName: 'Mission', field: 'mission' },
    { headerName: 'Location', field: 'location' },
    { headerName: 'Rocket', field: 'rocket' },
    { headerName: 'Successful', field: 'successful' },
    { headerName: 'Time', field: 'time' },
    { headerName: 'Price', field: 'price' },
  ];

  // Render Ag-Grid table with specified column definitions and mission data
  return (
    <div className="ag-theme-alpine" style={{ height: 480, width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={missionData}
        pagination={true}
        paginationPageSize={10}
        rowClass="bg-red-500 red-700"
        colResizeDefault=''
      />
    </div>
  );
};

export default Table;
