import { createStore } from 'redux';

const INITIAL_STATE = {
  name: '', 
  camera: false,
};

function pokemon(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH':
      state.name = action.name;
      return state;
    case 'CAMERA': 
      state.camera = action.camera
      return state;
    default: 
      return state;
  }
}

const store = createStore(pokemon);

export default store;

