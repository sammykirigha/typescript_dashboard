import { FormControl, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';

type Names = string[]

const names: Names = [
  'The eagles collection',
  'Naivas Mall',
  'Quick mat',
  'Quila collections',
]

export const SelectItems: React.FC = (): JSX.Element => {
	const [personName, setPersonName] = React.useState<string[]>([])

	const handleChange = (e: SelectChangeEvent<string[]>): void => {
		const {  value  } = e.target;
		setPersonName(
			typeof value === 'string' ? value.split(',') : value
		)
	}
  return (
	  <div>
		  <FormControl sx={{ m: 1, width: 180 }}>
			  <Select
				  value={personName}
				  placeholder="Select your shop"
				  onChange={handleChange}
				  sx={{
					  outline: '0px',
					  border: 'GrayText',
				  }}
			  >
				  {names.map((name) => (
					  <MenuItem
						  key={name}
						  value={name}
					  >
						  {name}
					  </MenuItem>
				  ))}
			  </Select>
		  </FormControl>
	</div>
  )
}
