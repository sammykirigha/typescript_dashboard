import { Box, styled } from '@mui/material';
import './Content.css'
import React from 'react'
import { AdvertCard, CardContent, CardContentTwo, ExtensionCard, NewsCard, NewsData, NewsHeader } from '../../DashboardLeftCards';
import { FirstCard, FourthCard, SecondCard, ThirdCard } from '../../DashboardRightCards';

export const Content: React.FC = (): JSX.Element => {
  return (
	  <Box className="main-box"> 
		  <DashboardContainer>
              <DashLeft>
                  <CardContent />
                  <CardContentTwo />
                  <AdvertCard />
                  <ExtensionCard />
				  <DashLeftInner>
                      <NewsCard>
                          <NewsHeader />
                          <DashLeftInnerCards>
                              <NewsData />
                          </DashLeftInnerCards>
                      </NewsCard>
				  </DashLeftInner>
			  </DashLeft>
			  <DashRight>
                  <FirstCard />
                  <SecondCard />
                  <ThirdCard />
                  <FourthCard />
			  </DashRight>
		  </DashboardContainer>
	</Box>
  )
}


const DashboardContainer = styled(Box)(({ theme }) => ({
	display: "flex",
    width: "100%",

    gap: "10px",
    transform: "translateY(-30px)",
    flexDirection: "column",
	alignItems: "flex-start",
	// backgroundColor: 'red',
    justifyContent: "space-between",
    [theme.breakpoints.up("lg")]: {
        flexDirection: "row",
    },
}))

const DashLeft = styled(Box)(({ theme }) => ({
    display: "flex",
    gridTemplateColumns: "repeat(auto-fill, 1fr)",
    flexDirection: "column",
	alignItems: 'center',
	// backgroundColor: 'blue',
    [theme.breakpoints.up("md")]: {
        flex: 2,
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(auto-fill, 1fr)",
    },
}));

const DashRight = styled(Box)(() => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: 'yellow',
    gap: "20px",
}));

const DashLeftInnerCards = styled(Box)(() => ({
    flex: 2,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    height: '100vh'
}));

const DashLeftInner = styled(Box)(() => ({
    gridColumn: "1 / span 2",
    gridRow: "3 / span 3",
}));
