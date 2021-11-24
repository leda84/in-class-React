import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 140 },
  {
    field: 'price',
    headerName: 'Price',
    width: 130,
  },
  {
    field: 'name',
    headerName: 'Drone name',
    width: 130,
  },
  {
    field: 'cost_of_production',
    headerName: 'Production Cost',
    type: 'number',
    width: 140,
  },
  {
    field: 'series',
    headerName: 'Series',
    width: 160,
  },
];


export const DataTable = () => {
    let { droneData, getData } = useGetData();

    return (
        <div style={{ height: 400, width: '100%'}}>
            <h2>Drones In Inventory</h2>
            <DataGrid rows={droneData} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}
