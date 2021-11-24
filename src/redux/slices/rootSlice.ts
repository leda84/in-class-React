import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Generic Drone',
        price: '350.00',
        description: 'Redefine the sky',
        camera_quality: '4k',
        flight_time: 'Approx 20mins',
        max_speed: '140 kph',
        dimensions: '225 x 312 x 127mm',
        weight: 'Approx 800g',
        cost_of_production: 45.00,
        series: 'DJI FPV Series'
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload},
        choosePrice: (state, action) => {state.price = action.payload} 
    }
})

// Export redcuer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice } = rootSlice.actions
