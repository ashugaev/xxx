import React from 'react';
import { connect } from 'react-redux';
import { changeTestState } from '../../actions/header';
import './index.scss';

function Header(props) {
  const { someData } = props;
  return (
    <div>
      <b> Хедер</b>
      <br />
      { /* eslint-disable-next-line */ }
      <button onClick={props.changeTestState}>Поменять текст</button>
      <br />
      <span>{someData}</span>
    </div>
  );
}

const mapStateToProps = state => ({
  someData: state.testState.someData,
});

export default connect(
  mapStateToProps,
  { changeTestState },
)(Header);
// export default Header
