import React from 'react';
import { DataGrid, GridCellEditStopReasons } from '@mui/x-data-grid';
import './DataGridComponent.css';

export default function DataGridComponent({
  rowData,
  colData,
  handleToDoItemChange,
}) {
  return (
    <>
      <div className='infoText'>
        *Double click on any item(title column) to edit it
      </div>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rowData}
          columns={colData}
          experimentalFeatures={{ newEditingApi: true }}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          onCellEditStop={(params, event) => {
            if (params.reason === GridCellEditStopReasons.cellFocusOut) {
              event.defaultMuiPrevented = true;
            }
            handleToDoItemChange(params, event);
          }}
        />
      </div>
    </>
  );
}
