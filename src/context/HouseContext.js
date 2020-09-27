import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const HouseReducer = (state, action) => {
  switch (action.type) {
    case 'get_houses':
      return action.payload;
  }
};

const getHouses = dispatch => {
  return async () => {
    const response = await jsonServer.get('');
    dispatch({type: 'get_houses', payload: response.data});
  };
};

export const {Context, Provider} = createDataContext(
  HouseReducer,
  {getHouses},
  [],
);
