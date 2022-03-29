import { Card } from '@mui/material';
import './CardContentTwo.css'
import React, { ChangeEvent, useState } from 'react';
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { CardHeader } from '../../reusableCompts/cardHeader/CardHeader';
import { CardBody } from '../../reusableCompts/cardBody/card-body';
import { CardFooter } from '../../reusableCompts/cardFooter/CardFooter';

interface OptionsB {
	label: string;
	value: {
		num: string;
		price: string;
	}
}

const optionsB: OptionsB[] = [
	{
        label: "This Month",
        value: { num: "567", price: "7865.65" },
    },
    {
        label: "Next Month",
        value: { num: "467", price: "9565.78" },
    },
    {
        label: "Last Month",
        value: { num: "127", price: "2065.43" },
    },
]

const selectStyle = {
    border: '0px',
    with: '100px',
    outline:'0px'
}

export const CardContentTwo: React.FC = (): JSX.Element => {
	const [orders, setOrders] = useState<{num: string, price: string}>({ num: '100', price: '5688.33' });

	const ordersChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		setOrders(JSON.parse(value));
	}

  return (
	  <Card className='card-content-two-box'>
		  <CardHeader
			  headerText='Orders'
			  icon={<FormatListBulletedIcon className="icon" />}
		  >
			  <select
                    onChange={ordersChange}
                    style={selectStyle}
                    data-testid="select"
                    // value={orders}
                >   
                    {optionsB.map((option) => (
                        <option value={JSON.stringify(option.value)}>
                            {option.label}
                        </option>
                    ))}
                </select>
		  </CardHeader>
		  <CardBody>
			  <div className="orders-up">
                    <div className="orders-up-section1">
                        <div className="orders-received">Orders Received: </div>
                        <div className="orders-quantity">{orders.num}</div>
                    </div>
                    <div className="orders-up-section2">
                        <div className="orders-received">Earnings: </div>
                        <div className="orders-quantity">${orders.price}</div>
                    </div>
                </div>
		  </CardBody>
		  <CardFooter linkText="10 free tips to increase your sales" />
	</Card>
  )
}
