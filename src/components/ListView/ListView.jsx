import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ListView = ({ currentView, setCurrentView }) => {
  return (
    <div className={styles.viewWrapper}>
      <div
        onClick={() => setCurrentView('viewTile')}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/svg/view_1.svg)`
        }}
        className={
          currentView === 'viewTile'
            ? `${styles.view} ${styles.active}`
            : `${styles.view}`
        }></div>
      <div
        onClick={() => setCurrentView('viewList')}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/svg/view_2.svg)`
        }}
        className={
          currentView === 'viewList'
            ? `${styles.view} ${styles.active}`
            : `${styles.view}`
        }></div>
    </div>
  );
};

export default ListView;

ListView.propTypes = {
  currentView: PropTypes.string,
  setCurrentView: PropTypes.func
};
