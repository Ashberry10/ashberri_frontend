import axios from 'axios'
import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit'



type User ={
  id:number
  name:string
  date_of_birth:string
  email:string
}



type InitialState ={
  loading:boolean
  users: User[]
  error:string
}

const initialState:InitialState = {
  loading: false,
  users: [],
  error: ''
}

//CreateAsyncThunk will automatacally Generates pending ,fulfilled and rejected action types
// CreateAsyncThunk only avalible in redux toolkit
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios
    // .get('https://jsonplaceholder.typicode.com/users')
    .get('http://127.0.0.1:8000/api/user/getallusers/')

    
    // .then(response => response.data.map((user) => user.id)) //for only fetching the id

    .then(response => response.data) //for all data
})



// Reducers
// Note:-
// CreateSlice automatically generate an action with the same name
// as the reducers function we have written
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<User[]>) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message || 'Something went wrong'
    })
  }
})

export default userSlice.reducer
