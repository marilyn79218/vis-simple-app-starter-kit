import PropTypes from 'prop-types';
import React from 'react';

import styles from './Modal.m.css';

class Modal extends React.Component {
  render() {
    const {
      isShow,
      children,
      handleIsShow,
    } = this.props;

    return (
      <div
        className={isShow ? styles.baseShow : styles.base}
        onClick={(e) => {
          if (this.props.keepShowWhenBackground) { return }
          if (e.target === this.base) {
            handleIsShow(false);
          }
        }}
        ref={(node) => { this.base = node; }}
      >
        <div className={isShow ? styles.boxShow : styles.box}>
          {
            children
          }
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  keepShowWhenBackground: PropTypes.bool,
  isShow: PropTypes.bool,
  handleIsShow: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  keepShowWhenBackground: false,
};

export default Modal;
