import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner/Spinner';
import ProfilesItem from './ProfilesItem';
import { getProfiles } from '../../actions/profile';
import {
	Icon
} from "rsuite";
import SearchInput from "./SearchInput";
import profileSelector from "../../selectors/profile";

const Profiles = ({ profiles , getProfiles, history }) => {
	useEffect(() => {
		getProfiles();
	}, [getProfiles]);

	return !profiles ? (
		<Spinner />
	) : (
		<section>
			<h1 className='header_form'>Developers</h1>
			<p className='form__main-para'><Icon icon="search-peoples" size="2x"/> Browse and connect with developers </p>
			<SearchInput />
			{profiles.length > 0 ? (profiles.map((profile) => <ProfilesItem profile={profile} history={history} key={profile._id} />)):(<h3>No profiles</h3>)}
		</section>
	);
};

const mapStateToProps = (state) => {
	const visibleProfile = profileSelector(state.profile.profiles, state.filter)
	return {
		profiles: visibleProfile
	}
};

export default connect(mapStateToProps, {
	getProfiles
})(Profiles);
