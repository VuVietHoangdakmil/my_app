import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getDevice } from '../../../service/device'

import {Divice } from '../../../database/Divice'




type InitialState = {
   ValueFilterActive:string|boolean
   loading:boolean
   ListAllDevices: Divice[]
   FilterListDevices:Divice[]
   ChangeData: boolean
}

const initialState: InitialState = {
    ValueFilterActive: "All",
    loading:false,
    ListAllDevices:[],
    FilterListDevices:[],
    ChangeData:false
}


export const fetchDeviceAll = createAsyncThunk(
    'device/fetchDeviceAll',
    async () => {
        const response = await getDevice()
        
        return response
    },
)


const DeviceSlice = createSlice({
    initialState: initialState,
    name: 'ListDevices',
    reducers: {
        ChangeData: (state, ) => {
            state.ChangeData = !state.ChangeData
        },
        ChangeFilterActive:(state, action:PayloadAction<string|boolean>)=>{
            state.ValueFilterActive = action.payload
        },
        FilterData:(state)=>{
            state.FilterListDevices = state.ListAllDevices.filter(device=>device.statusActive === state.ValueFilterActive)
        }

       
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDeviceAll.pending, (state) => {
            state.loading = true
        })
        builder.addCase(
            fetchDeviceAll.fulfilled,
            (state, action: PayloadAction<Divice[]>) => {
                state.loading = false
                state.ListAllDevices = action.payload
                
            },
        )
        builder.addCase(fetchDeviceAll.rejected, (state, action) => {
            state.loading = false
            state.ListAllDevices = []
            
        })
    },
})

export const { ChangeData ,ChangeFilterActive, FilterData} =DeviceSlice.actions
export default DeviceSlice.reducer