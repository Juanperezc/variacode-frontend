import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/core';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 

const spinner = (props)=>{


    return(
		<HashLoader
	        css={override}
	          sizeUnit={"px"}
	          size={150}
	          color={'#123abc'}
	          loading={props.loading}
	    />
    )
}

export default spinner;