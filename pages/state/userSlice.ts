// import { createSlice, PayloadAction } from '@reduxjs/toolkit'




// export interface AuthState {
//   email: string | null;
//   name: string | null;
//     Prediction: string | null;

// }

// const initialState = {
//   email: "",
//   name: "",
//   Prediction: "",


// }

// export const userSlice = createSlice({
//   name: 'user_info',
//   initialState,
//   reducers: {
//     setUserInfo: (state, action:PayloadAction<{ name: string; email: string; Prediction:string;}>) => {
//       state.email = action.payload.email
//       state.name = action.payload.name
//       state.Prediction = action.payload.Prediction

//     },
//     unsetUserInfo: (state, action) => {
//       state.email = action.payload.email
//       state.name = action.payload.name
//       state.Prediction = action.payload.Prediction

//     },
//   }
// })

// export const { setUserInfo, unsetUserInfo } = userSlice.actions

// export default userSlice.reducer








import { createSlice, PayloadAction } from '@reduxjs/toolkit'




export interface AuthState {
  email: string | null;
  name: string | null;
  FriendName: string | null;

}

const initialState = {
  email: "",
  name: "",
  FriendName: "",


}


export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {

    setalluserPredict: (state, action:PayloadAction<{ FriendName:string}>) => {
      state.FriendName = action.payload.FriendName


    },


    setUserInfo: (state, action:PayloadAction<{ name: string; email: string }>) => {
      state.email = action.payload.email
      state.name = action.payload.name
    },
    unsetUserInfo: (state, action) => {
      state.email = action.payload.email
      state.name = action.payload.name
    },
  }
})

export const { setUserInfo, unsetUserInfo,setalluserPredict } = userSlice.actions

export default userSlice.reducer
