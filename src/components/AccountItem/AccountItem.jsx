import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { AiFillCheckCircle } from 'react-icons/ai';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1652281200&x-signature=sucp9fIp8aDNV5TXzKXfoBSuzhc%3D"
        alt="Hoa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <AiFillCheckCircle size={14} color="#20D5EC" />
        </h4>
        <span className={cx('username')}> Nguyen Van A</span>
      </div>
    </div>
  );
};

export default AccountItem;
