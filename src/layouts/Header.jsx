import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { RiCloseCircleFill } from 'react-icons/ri';
import { AiOutlineLoading3Quarters, AiOutlineSearch } from 'react-icons/ai';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import { ReactComponent as Logo } from '~/assets/images/logo.svg';
import Popper from '~/components/Popper/Popper';
import AccountItem from '~/components/AccountItem/AccountItem';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

const Header = () => {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => setSearchResult([1, 2, 3]), 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Logo />
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0 && true}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <Popper>
                <h4 className={cx('search-title')}>Accounts</h4>
                {searchResult.map((item) => (
                  <AccountItem key={item} />
                ))}
              </Popper>
            </div>
          )}
        >
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
        </Tippy>
        <div className={cx('actions')}>
          <Button text>Upload</Button>
          <Button onClick={() => alert('hello')} className={cx('custom-login')}>
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
