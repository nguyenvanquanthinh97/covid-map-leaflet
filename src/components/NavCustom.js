import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const NavCustom = ({ url, children, classNames }) => {
  return (
    <Link to={url}>
      <div className={clsx(classNames)}>
        {children}
      </div>
    </Link>
  );
};

export default NavCustom;