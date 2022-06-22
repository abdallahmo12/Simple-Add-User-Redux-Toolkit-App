import { createSlice } from '@reduxjs/toolkit'

//start
//success
//error

export const userSlice = createSlice({
  name: 'user',
  initialState : {
    userData :{
      name:'',
      email:''
    },

    loading : null,
    error : false
  },
  reducers: {
    addUsser: (state , action) => {
        // console.log(12222233);
        state.name = action.payload.name;
        state.email = action.payload.email;
    },
    startUser: (state) =>{
      state.loading =true;
    },
    successUser: (state , action) =>{
      state.userData = action.payload;
      state.loading =false;
    },
    errorUser: (state) =>{
      state.loading=false;
      state.error =true;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUsser , startUser , successUser , errorUser } = userSlice.actions

export default userSlice.reducer