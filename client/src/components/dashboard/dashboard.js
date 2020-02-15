import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile';

const Dashboard = ({ getProfile, profile: { profile } }) => {
	useEffect(() => {
		getProfile();
	}, []);
	return <div>Dashboard</div>;
};

const mapStateToProps = (state) => ({
	profile: state.profile
});

export default connect(mapStateToProps, {
	getProfile
})(Dashboard);
