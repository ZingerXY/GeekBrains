import {connect} from "react-redux";
import {profileSelectors, changeCheckBox} from "../../store/profile";

const mapCheckBoxToProps = (state) => ({
  checkBox: profileSelectors.getCheckBox(state),
})

const mapDispatchToProps = (dispatch) => ({
	changeCheckBox: (checkBox) => dispatch(changeCheckBox(checkBox)),
})

export const profileConnect = connect(mapCheckBoxToProps, mapDispatchToProps);