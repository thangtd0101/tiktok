import React from 'react';
import classNames from 'classnames/bind';
import { RiCloseCircleFill } from 'react-icons/ri';
import { AiOutlineLoading3Quarters, AiOutlineSearch } from 'react-icons/ai';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '~/assets/images/logo.svg';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Logo />
        </div>
        <div className={cx('search')}>
          <input placeholder="Tìm kiếm tài khoản và video" spellCheck="false" />
          <button className={cx('clear')}>
            <RiCloseCircleFill size={15} />
          </button>
          <AiOutlineLoading3Quarters className={cx('loading')} size={15} />
          <span></span>
          <button className={cx('search-btn')}>
            <AiOutlineSearch size={24} />
          </button>
        </div>
        <div className={cx('actions')}>Actions</div>
      </div>
    </header>
  );
};

export default Header;
