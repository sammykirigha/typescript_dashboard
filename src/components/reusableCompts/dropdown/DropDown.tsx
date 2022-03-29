import React from 'react';
import Select from 'react-select';
import './DropDown.css';

interface OptionaArray {
	label: string;
	value: number;
}

const optionArray: OptionaArray[] = [
  {label: 'This month', value: 1},
  {label: 'Next month', value: 2},
  {label: 'Last month', value: 3},
]


export const DropDown = () => {
  return (
	 <div>
      <Select  placeholder="select month" className='card-content-span2' options={optionArray} />
     </div>
  )
}
