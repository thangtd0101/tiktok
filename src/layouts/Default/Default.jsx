import React from 'react';
import classNames from 'classnames/bind';
import Header from '~/layouts/Header';
import Sidebar from '~/layouts/Sidebar';
import styles from './Default.module.scss';

const cx = classNames.bind(styles);

const Default = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        {' '}
        <Sidebar />
        <div className={cx('content')}> {children}</div>
      </div>
    </div>
  );
};

export default Default;
