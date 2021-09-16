import { useEffect, useState } from "react";
/*
  Вызов:
  const [postApi, getPosts] = useRequestApi({
  	url,
  	isAutoLoad: true,
  })
*/
export const useRequestApi = ({url, options, isAutoLoad}) => {
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState();
	const [data, setData] = useState([]);

	const makeRequest = async () => {
		try {
			setError(undefined);
			setData(undefined)
			setLoading(true);
			const response = await fetch(url, options);
			const data = await response.json();
			setData(data);
		} catch (e) {
			console.dir(e);
			setError(e);
		}
		setLoading(false);
	}

	useEffect(() => {
		if (isAutoLoad) {
			makeRequest();
		}
	}, []);

	return [
		{
			isLoading,
			error,
			data
		},
		makeRequest
	]
}
