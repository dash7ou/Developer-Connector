import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Icon, Button } from "rsuite";
import Spinner from "../layout/spinner/Spinner"
import { 
	getProfile,
	setLoading
} from '../../actions/profile';

const Dashboard = ({ setLoading , getProfile, profile: { profile, loading} , auth:{user } }) => {
	useEffect( () => {
		setLoading()
		getProfile();
	}, []);

	return loading && profile === null? <Spinner /> : (
		<Fragment>
			<h1 className="dashboard-title">Dashboard</h1>
			<p className="dashboard-para">
				<Icon icon="user-circle" size="2x"/> Welcome { user && user.name}
			</p>
			{ profile !== null ? (
				<Fragment>
					has
				</Fragment>
			): (
				<div className="para-button">
					<p className="dashboard-para danger-para">You have not setup a profile, Please add some info about you.</p>
					<Button color="blue" href="/create-profile">
						<Icon icon="plus-circle"  />  Create Profile
				  	</Button>
				</div>
			)}
		</Fragment>
	)
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth : state.auth
});

export default connect(mapStateToProps, {
	getProfile,
	setLoading
})(Dashboard);
