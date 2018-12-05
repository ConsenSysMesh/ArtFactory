import React, { Fragment } from 'react';
import { Container }  from 'semantic-ui-react';
import Header from './Header';

export default(props) => {
  return(
    <Fragment>
      <Header account={props.account} drizzle={props.drizzle} drizzleState={props.drizzleState}/>

      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>

      {props.children}
    </Fragment>
  )
};
