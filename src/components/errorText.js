

import React from 'react';
import Utext from './uText';

const errorText = ({error}) => {
  return (
    <Utext style={{ color: 'red', width: '90%', marginTop: '1%' }}>{error}</Utext>
  );
}

export default errorText;
