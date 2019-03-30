import React from 'react';
import classNames from 'classnames';

const Page = ({children, open, classes}) => <div className={classNames(classes.content, {
    [classes.contentShift]: open,
  })}
  style={{marginTop: '80px'}}>{children}</div>;

export default Page;