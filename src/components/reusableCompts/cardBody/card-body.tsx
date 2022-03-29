import React from 'react';
import './card-body.css'

interface ChildProps {
	children: React.ReactElement | React.ReactElement[]
}
export const CardBody: React.FC<ChildProps> = ({children}): JSX.Element => {
  return (
	  <div className='card-body'>
		  {children}
	</div>
  )
}
