import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner/Spinner';
import ProfilesItem from './ProfilesItem';
import { getProfiles } from '../../actions/profile';
import {
	Icon,
	InputGroup,
	Input
} from "rsuite"

const Profiles = ({ profile: { profiles }, getProfiles, history }) => {
	useEffect(() => {
		getProfiles();
	}, [getProfiles]);

	return !profiles ? (
		<Spinner />
	) : (
		<section>
			<h1 className='header_form'>Developers</h1>
			<p className='form__main-para'><Icon icon="search-peoples" size="2x"/> Browse and connect with developers </p>
			<InputGroup inside style={{"marginTop": "1rem"}}>
				<Input placeholder="Search Developer" size="lg"/>
				<InputGroup.Button>
			  		<Icon icon="search" />
				</InputGroup.Button>
		  	</InputGroup>
			{profiles.map((profile) => <ProfilesItem profile={profile} history={history} key={profile._id} />)}
		</section>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profile
});

export default connect(mapStateToProps, {
	getProfiles
})(Profiles);
