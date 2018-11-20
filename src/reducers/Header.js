
const initialState = {
  someData: 'Это текст из редакса',
};

export default function testState(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_SOME_DATA':
      return {
        ...state,
        someData: action.payload,
      };
    default: return state;
  }
}
