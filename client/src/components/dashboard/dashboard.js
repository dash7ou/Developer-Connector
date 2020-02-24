import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Icon, Button, ButtonToolbar } from "rsuite";
import Spinner from "../layout/spinner/Spinner"
import { 
	getProfile,
	setLoading
} from '../../actions/profile';

import Experience from "./Experience";
import Education from "./Education"

const Dashboard = ({ setLoading , getProfile, profile: { profile, loading} , auth:{user, loading: userLoading } }) => {
	useEffect( () => {
		setLoading()
		getProfile();
	}, []);

	return !userLoading && loading && profile === null? <Spinner /> : (
		<Fragment>
			<h1 className="dashboard-title">Dashboard</h1>
			<p className="dashboard-para">
				<Icon icon="user-circle" size="2x"/> Welcome { user && user.name}
			</p>
			{ typeof profile === "object" ? (
				<section style={{"margin": "1.5rem 0.7rem", "alignItems": "center"}}>
					<ButtonToolbar>
						<Button color="blue" href="/update-profile">
							<Icon icon="edit"  />  Update
						</Button>
						<Button color="blue" href="/profile/add-experience">
							<Icon icon="black-tie"  />  Add Experience
						</Button>
						<Button color="blue" href="/profile/add-education">
							<Icon icon="mortar-board"  />  Add Education
						</Button>
					</ButtonToolbar>
					<Experience experience ={profile.experience}/>
					<Education education={profile.education}/>
				</section>
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
