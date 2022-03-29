import { Card, SelectChangeEvent } from '@mui/material';
import './card-content.css'
import React, { ChangeEvent, SelectHTMLAttributes, useState } from 'react';
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { CardHeader } from '../../reusableCompts/cardHeader/CardHeader';
import { CardBody } from '../../reusableCompts/cardBody/card-body';
import { CardFooter } from '../../reusableCompts/cardFooter/CardFooter';
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

interface Options {
	label: string;
	value: string;
}

const selectStyle = {
    border: '0px',
    with: '100px',
    outline:'0px'
}

const options: Options[] = [
	{
        label: "This Month",
        value: '1235',
    },
    {
        label: "Next Month",
        value: '4563',
    },
    {
        label: "Last Month",
        value: '7890',
    },
]

export const CardContent:React.FC = (): JSX.Element => {
	const [values, setValues] = React.useState<string>('5678')

	const onChange = (e: ChangeEvent) => {
		const { value } = (e.target as HTMLInputElement);
		setValues(value)
	}
  return (
	  <Card className='card-content-box'>
		  <CardHeader
			  headerText='Visitors'
			  icon={<RemoveRedEyeOutlinedIcon className="icon" />}
		  >
			 <select
                    onChange={onChange}
                    style={selectStyle}
                    data-testid="select"
                    value={values}
                >
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select> 
		  </CardHeader>
		  <CardBody>
			 <span className="visitors-number">{values}</span> 
		  </CardBody>
		  <CardFooter
			  footerIcon={
				  <ArrowForwardOutlinedIcon className="footer-icon" />
			  }
			  linkText={"You need more visits? Contact us!"}
		  />
	</Card>
  )
}
