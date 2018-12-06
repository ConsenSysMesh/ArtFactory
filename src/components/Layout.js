import React, { Fragment } from 'react';
import Header from './Header';

export default(props) => {
  return(
    <Fragment>
      <Header account={props.account} drizzle={props.drizzle} drizzleState={props.drizzleState}/>

      {props.children}
    </Fragment>
  )
};
