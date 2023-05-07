import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  musicName: '',
  artistName: '',
  duration: '',
}

export const CreateMusicSlice = createSlice({
  name: 'CreateMusic',
  initialState,
  reducers: {
    setId : (state,action) => {
      state.id = action.payload
    },
    setMusicName: (state,action) => {
      state.musicName = action.payload
    },
    setArtistName: (state,action) => {
      state.artistName = action.payload
    },
    setDuration: (state, action) => {
      state.duration = action.payload
    },
    reset: () => initialState,
  },
})

export const {setId, setMusicName, setArtistName, setDuration,reset } = CreateMusicSlice.actions

export default CreateMusicSlice.reducer