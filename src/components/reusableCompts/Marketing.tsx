import React from 'react'
import { Spinner } from './spinner/Spinner'

export const Marketing: React.FC = (): JSX.Element => {
  return (
	<div style={{marginTop: '150px', marginLeft: '50px'}}>
        <h2 data-testid='header'>
            Marketing data is being loaded.....
        </h2>
        <div style={{marginLeft: '150px'}}>
         <Spinner />
        </div>
    </div>
  )
}
