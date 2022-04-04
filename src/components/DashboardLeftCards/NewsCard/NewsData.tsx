import { Box, Typography } from '@mui/material';
import './NewsCard.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '../../reusableCompts';

interface Data {
	author: string;
	content: string;
	description: string;
	publishedAt: string;
	source: {
		id: null;
		name: string
	}
	title: string;
	url: string;
	urlToImage: string
}

const truncateString = (str: string, num: number): string => {
	if (str?.length > num) {
		let subStr = str.substring(0, num)
		return subStr + "..."
	} else {
		return str
	}
}

export const NewsData: React.FC = (): JSX.Element => {
    const [data, setData] = useState<Data[]>([])
    const [loading, setLoading] = useState<boolean>(true)

	const fetchData = async () => {
		let res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9ae8144540384a17b86d7f1cf87e35ab`)
		return res.data.articles as Data[]
	}

	console.log('api data', data);
	
	useEffect(() => {
		const results = fetchData()
		results.then(function (data) {
			setData(data)
        setLoading(false)
        })
	},[])
    const _news = data.slice(0, 8);
    
    if (loading) {
        return (
            <div>
               <Spinner />
            </div>
        )
    }

  return (
	<>
            {
                _news?.map((item, index) => (
                    <Box key={index} className="news-body">
                        <Box className="news-image">
                            <img
                                className="image"
                                src={item.urlToImage}
                                alt="news"
                            />
                        </Box>
                        <Box className="news-info">
                            <Typography className="news-h6">
                                {truncateString(item.title, 15)}
                            </Typography>
                            <Typography
                                component="p"
                                className="news-paragraph"
                            >
                                {item.description
                                    ? truncateString(item.description, 40)
                                    : "i think that the: return true; // Inform Chrome"}
                            </Typography>
                            <Typography component="p" className="news-link">
                                Estimated reading: 4 min
                            </Typography>
                        </Box>
                    </Box>
                ))
            }
        </>
  )
}
