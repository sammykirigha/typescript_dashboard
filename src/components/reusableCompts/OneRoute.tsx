import React from 'react';
import { Spinner } from './spinner/Spinner';

const divStyles = {
	marginTop: '150px',
	marginLeft: '50px'
}

export const OneRoute: React.FC = (): JSX.Element => {
  return (
	  <div style={divStyles}>
		   <h2 data-tesid='header-text'>
            Loading your data in a moment.....
        </h2>
        <div style={{marginLeft: '150px'}}>
         <Spinner />
        </div>
	</div>
  )
}
