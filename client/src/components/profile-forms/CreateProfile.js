import React, { useState, useEffect } from 'react';
import { Form, SelectPicker, FormGroup, FormControl, HelpBlock, ButtonToolbar, Button, Alert } from 'rsuite';
import { connect } from 'react-redux';
import SocailMediaInput from './SocailMediaInput';
import { createProfile, updateProfile } from '../../actions/profile';

const CreateProfile = ({ history, createProfile,updateProfile, profile: { profile } }) => {
	const [ formData, setFormData ] = useState({
		company: '',
		website: '',
		status: '',
		skills: '',
		githubusername: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: ''
	});

	const {
		company,
		website,
		status,
		skills,
		githubusername,
		bio,
		location,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram
	} = formData;

	const onChange = (formValue) => {
		setFormData({
			...formData,
			...formValue
		});
	};
	const onChangeSelect = (selected) => {
		setFormData({
			...formData,
			status: selected
		});
	};

	const onCreateProfile = async () => {
		if (!status) {
			return Alert.error('You need to choose your status.', 5000);
		}

		if (!skills) {
			return Alert.error('You need to add your skills.', 5000);
		}

		await createProfile(formData);
		history.push('/dashboard');
	};

	const onUpdateProfile = async ()=>{
		if (!status) {
			return Alert.error('You need to choose your status.', 5000);
		}

		if (!skills) {
			return Alert.error('You need to add your skills.', 5000);
		}
		const newData ={
			company,
			website,
			status,
			skills,
			githubusername,
			bio,
			location,
			socialmedia:{
				twitter,
				facebook,
				linkedin,
				youtube,
				instagram
			}
		}

		await updateProfile(newData);
		history.push("/dashboard")
	}
	useEffect(() => {
		if (profile) {
			if (history.location.pathname === '/create-profile') history.push('/update-profile');
			const { company, skills, website, githubusername, bio, status, location, socialmedia } = profile;
			const orginalProfile = {
				company,
				skills,
				website,
				githubusername,
				bio,
				location,
				status,
				...socialmedia
			};
			const profileKeys = Object.keys(orginalProfile);
			const arrayOfKeysOrginalData = profileKeys
				.map((ele) => (orginalProfile[ele] ? ele : undefined))
				.filter((ele) => ele !== undefined);
			const orginalData = arrayOfKeysOrginalData.reduce((ele, current) => {
				ele[current] = orginalProfile[current];
				return ele;
			}, {});
			setFormData({
				...formData,
				...orginalData
			});
		}
	}, []);

	return (
		<div>
			<h1 className='header_form'> {`${profile ? 'Update' : 'Create'} Your Profile`}</h1>
			{!profile && <p className='form__main-para'>Let's get some information to make your profile stand out</p>}
			{profile && <p className='form__main-para'>Let's Update information of your profile</p>}
			<p className='form__para'> * = required field</p>
			<Form fluid onChange={(formValue) => onChange(formValue)}>
				<FormGroup>
					<SelectPicker
						onChange={(data) => onChangeSelect(data)}
						value={status}
						block
						placeholder='*Select Profession Status'
						data={[
							{
								value: 'Developer',
								label: 'Developer'
							},
							{
								value: 'Junior Developer',
								label: 'Junior Developer'
							},
							{
								value: 'Senior Developer',
								label: 'Senior Developer'
							},
							{
								value: 'Manger',
								label: 'Manger'
							},
							{
								value: 'Student / Learning',
								label: 'Student / Learning'
							},
							{
								value: 'Instructor',
								label: 'Instructor'
							},
							{
								value: 'Intern',
								label: 'Intern'
							},
							{
								value: 'Other',
								label: 'Other'
							}
						]}
						searchable={false}
					/>
					<HelpBlock> Give as an idea of where you are at in your career </HelpBlock>
				</FormGroup>
				<FormGroup>
					<FormControl name='company' type='company' placeholder='Company' value={company} />
					<HelpBlock> Could be your company or one you work for</HelpBlock>
				</FormGroup>
				<FormGroup>
					<FormControl name='website' type='website' placeholder='Website' value={website} />
					<HelpBlock> Could be your website or company website</HelpBlock>
				</FormGroup>
				<FormGroup>
					<FormControl name='location' type='location' placeholder='Location' value={location} />
					<HelpBlock> City & state suggested (eg. Gaza, Khanyouns) </HelpBlock>
				</FormGroup>
				<FormGroup>
					<FormControl name='skills' type='skills' placeholder='*Skills' value={skills} />
					<HelpBlock> Please add your skills (eg. HTML, CSS, Python)</HelpBlock>
				</FormGroup>
				<FormGroup>
					<FormControl
						name='githubusername'
						type='githubusername'
						placeholder='Github Username'
						value={githubusername}
					/>
					<HelpBlock> if you want your last repos and Github link, include your username</HelpBlock>
				</FormGroup>
				<FormGroup>
					<FormControl
						name='bio'
						rows={5}
						placeholder='A short bio about your self'
						componentClass='textarea'
						value={bio}
					/>
					<HelpBlock>Tell us little about your self </HelpBlock>
				</FormGroup>
				<SocailMediaInput socialmedia={{ facebook, twitter, instagram, youtube, linkedin }} />
				<div className='form-button'>
					<ButtonToolbar>
						<Button appearance='primary' onClick={profile? onUpdateProfile:  onCreateProfile }>
							{profile ? 'Update Profile' : 'Create Profile'}
						</Button>
						<Button onClick={() => history.push('/')}>Cancel</Button>
					</ButtonToolbar>
				</div>
			</Form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profile
});

export default connect(mapStateToProps, {
	createProfile,
	updateProfile
})(CreateProfile);
