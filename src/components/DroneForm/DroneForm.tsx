import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName,choosePrice } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@mui/material';

//Accedd Api
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface DroneFormProps {
    id?: string;
    data?: {}
}

interface DroneState {
    name: string;
    price: string;
}

export const DroneForm = (props:DroneFormProps) =>{
    const dispatch = useDispatch()
    let { droneData, getData} = useGetData();
    const store = useStore()
    const name = useSelector<DroneState>(state => state.name)
    const price = useSelector<DroneState>(state => state.price)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await server_calls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(choosePrice(data.price))
            await server_calls.create(store.getState())
            window.location.reload()
        }

    }

}