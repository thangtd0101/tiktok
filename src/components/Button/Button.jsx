import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({
  className,
  to,
  href,
  children,
  primary = false,
  outline = false,
  rounded = false,
  text = false,
  disabled = false,
  small = false,
  medium = true,
  large = false,
  onClick,
  ...passProps
}) => {
  let Component = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    Component = Link;
    props.to = to;
  } else if (href) {
    Component = 'a';
    props.href = href;
  }

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    rounded,
    text,
    disabled,
    small,
    medium,
    large,
    [className]: className,
  });

  return (
    <Component className={classes} {...props}>
      <span>{children}</span>
    </Component>
  );
};

export default Button;
