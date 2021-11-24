import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { DroneForm } from '../../components';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 140 },
  {
    field: 'name',
    headerName: 'Drone name',
    width: 130,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 130,
  },
  {
    field: 'camera_quality',
    headerName: 'Camera Quality',
    width: 130,
  },
  {
    field: 'flight_time',
    headerName: 'Flight Time',
    width: 130,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 130,
  },
  {
    field: 'dimensions',
    headerName: 'Dimensions',
    width: 130,
  },
  {
    field: 'max_speed',
    headerName: 'Max. Speed',
    width: 130,
  },
  {
    field: 'weight',
    headerName: 'Weight',
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
    description: 'This is the Drone Series',
    width: 160,
  },
];

interface gridData{
  data:{
    id?:string;
  }
}

export const DataTable = () => {
  let { droneData, getData } = useGetData();
  let[open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () =>{
    setOpen(true)
  }

  let handleClose = () =>{
    setOpen(false)
  }

  let deleteData = async () =>{
    await server_calls.delete(`${gridData[0]}`)
    getData()
  }

  console.log(gridData) // should show us a list of the boxes we checked

  return (
    <div style={{ height: 400, width: '100%'}}>
            <h2>Drones In Inventory</h2>
            <DataGrid rows={droneData} 
                      columns={columns} 
                      pageSize={5} 
                      checkboxSelection
                      onSelectionModelChange={ (newSelectionModel) => {setData(newSelectionModel);}}
                      {...droneData}
                      />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color="error" onClick={deleteData}>Delete</Button>
            {/* Dialog Popup Start */}
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
              <DialogTitle id='form-dialog-title'>Update a Drone</DialogTitle>
              <DialogContent>
                  <DialogContentText>Updating: {gridData[0]}</DialogContentText>
                    <DroneForm id= {`${gridData[0]}`} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} style={{backgroundColor:'maroon'}}>Cancel</Button>
              </DialogActions>
            </Dialog>

        </div>
    )
  }
  