import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditableText from './EditableText';
import {setBoardTitle} from '../store';
import logo from '../assets/logo.png';

const Header = ({
  title,
  setBoardTitle
}) => {
  return (
    <header>
      <img src={logo} alt="Boardeaux" className="logo"/>
      <h2 className="board-name">
        <i className="icon icon-layout" />
        <EditableText
          id="board-name"
          name="board-name"
          value={title}
          onChange={setBoardTitle}
        />
      </h2>
      <div className="controls">
        <i className="icon icon-search" />
        <input
          type="search"
          placeholder="Search..."
        />
        <button className="btn btn-menu icon icon-more-horizontal" />
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  setBoardTitle: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {title: state.board.title};
};

const mapDispatchToProps = dispatch => {
  return { setBoardTitle: bindActionCreators(setBoardTitle, dispatch)};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);