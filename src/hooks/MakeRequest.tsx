import React, { useEffect, useState } from 'react';
import axios from 'axios';

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


export const useMakeRequestHook = (): [Data[], () => void] => {
	const [data, setData] = useState<Data[]>([])
	const changeData = () => setData(data)

	const apiKey = process.env.REACT_APP_API_KEY;

	const fetchData = async () => {
		let res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9ae8144540384a17b86d7f1cf87e35ab`)
		return res.data.articles as Data[]
	}

	console.log('api data', data);
	
	useEffect(() => {
		const results = fetchData()
		results.then(function (data) {
			setData(data)
			changeData()
		})
	},[])
	return [data, changeData]
}