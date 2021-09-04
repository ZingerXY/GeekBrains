import { Typography } from "@material-ui/core";
import { ProfileCheckBox } from '../../components/ProfileCheckBox';

export const Profile = () => {
	return (
		<div>
			<Typography variant="h6">
				Profile
			</Typography>
			<ProfileCheckBox/>
		</div>
	)
}
