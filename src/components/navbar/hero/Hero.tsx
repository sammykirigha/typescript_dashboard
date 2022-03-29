import { CssBaseline, Grid } from '@mui/material';
import './Hero.css';
import React from 'react'
import { Link } from 'react-router-dom';
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export const Hero:React.FC = ():JSX.Element => {
  return (
	  <>
		  <CssBaseline />
		  <Grid container>
			  <Grid item xs={12}>
				  <div className="background">
					  <h3>Welcome Samauel</h3>
					  <div className="right">
						  <Link to={'/'} className='hero-link'>
							  app.vetrinalive.it/fenoh-store
						  </Link>
						  <OpenInNewIcon className="hero-icon" />
					  </div>
				  </div>
			</Grid>
		  </Grid>  
	</>
  )
}
