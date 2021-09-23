import { Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataSelectors, getDataAction } from "../../store/data";

export const API = () => {
	const data = useSelector(dataSelectors.getDataData);
	const error = useSelector(dataSelectors.getDataError);
	const isLoading = useSelector(dataSelectors.getDataLoading)
	const dispatch = useDispatch();

	const reload = () => {
		dispatch(getDataAction());
	}

	useEffect(reload, [])

	return (
		<div>
			<Typography variant="h6">
				RandomFoxApi
			</Typography>
			{
				isLoading && <div>Loading...</div>
			}
			{
				error && <div>error: {error.toString()}
					<button onClick={reload}>reload</button>
				</div>
			}
			{
				JSON.stringify(data)
			}
			{
				data && <img src={data.image} alt=""></img>
			}
		</div>
	)
}
