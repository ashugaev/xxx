export const changeTestState = () => (dispatch) => {
  dispatch({ type: 'CHANGE_SOME_DATA', payload: 'Текст из экшена' });
};
