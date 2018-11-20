import React from 'react';
import { connect } from 'react-redux';
import { changeTestState } from '../../actions/header';
import './index.scss';

function Header(props) {
  return (
    <div>
      <b> Хедер</b>
      <br />
      <button onClick={props.changeTestState}>Поменять текст</button>
      <br />
      <span>{props.testState.someData}</span>
    </div>
  );
}

const mapStateToProps = state => ({
  testState: state.testState,
});


export default connect(mapStateToProps, { changeTestState })(Header);
// export default Header
