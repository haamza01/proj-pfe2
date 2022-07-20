const { GETPHARMACIE, GETONEPHARMACIE } = require("../types/pharmacieTypes");

const initialStore = {
  pharmacie: [],
  onePharmacie: null,
};
const PharmacieReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case GETPHARMACIE:
      return { ...state, pharmacie: payload.allpharmacie };
    case GETONEPHARMACIE:
      return { ...state, onePharmacie: payload.foundpharmacie };

    default:
      return state;
  }
};
export default PharmacieReducer;
