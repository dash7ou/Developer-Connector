import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner/Spinner';
import { getProfileById, getRepos, clearRepos } from '../../actions/profile';
import { Button, ButtonToolbar, Icon } from 'rsuite';
import ProfileRepos from './ProfileRepos';

const Profile = ({
	history,
	profile: { showProfile, repos },
	getRepos,
	getProfileById,
    auth: { isAuthenticated, user },
    clearRepos
}) => {
	useEffect(() => {
		const { location: { pathname } } = history;

		const url = pathname.split('/');
        getProfileById(url[2]);
        return ()=>{
            clearRepos();
        }
	}, []);

	return !showProfile ? (
		<Spinner />
	) : (
		<section>
			<ButtonToolbar>
				<Button onClick={() => history.push('/developers')}>
					<Icon icon='arrow-circle-left' /> Back to developers
				</Button>
				{isAuthenticated &&
				showProfile.user._id.toString() === user._id.toString() && (
					<Button color='blue' onClick={() => history.push('/update-profile')}>
						<Icon icon='edit' /> Edit profile
					</Button>
				)}
			</ButtonToolbar>
			<article className='user-page'>
				<div className='user-page__main'>
					<img src={showProfile.user.avatar} />
					<h1 className='user-page__name'>{showProfile.user.name}</h1>
					<h4>
						{showProfile.status} at {showProfile.company}
					</h4>
					{showProfile.location && (
						<p className='user-page__location'>
							{' '}
							<Icon icon='map-marker' /> {showProfile.location}
						</p>
					)}
					{showProfile.socialmedia && (
						<div className='user-page__socialmedia'>
							{showProfile.website && (
								<a href={showProfile.website} target='_blank'>
									<Icon icon='globe' size='2x' inverse />
								</a>
							)}
							{showProfile.socialmedia.twitter && (
								<a href={showProfile.socialmedia.twitter} rel='noopener noreferrer' target='_blank'>
									{' '}
									<Icon icon='twitter-square' size='2x' inverse />{' '}
								</a>
							)}
							{showProfile.socialmedia.facebook && (
								<a href={showProfile.socialmedia.facebook} rel='noopener noreferrer' target='_blank'>
									{' '}
									<Icon icon='facebook-square' size='2x' inverse />{' '}
								</a>
							)}
							{showProfile.socialmedia.linkedin && (
								<a href={showProfile.socialmedia.linkedin} rel='noopener noreferrer' target='_blank'>
									{' '}
									<Icon icon='linkedin-square' size='2x' inverse />{' '}
								</a>
							)}
							{showProfile.socialmedia.instagram && (
								<a href={showProfile.socialmedia.instagram} rel='noopener noreferrer' target='_blank'>
									{' '}
									<Icon icon='instagram' size='2x' inverse />{' '}
								</a>
							)}
							{showProfile.socialmedia.youtube && (
								<a href={showProfile.socialmedia.youtube} rel='noopener noreferrer' target='_blank'>
									{' '}
									<Icon icon='youtube-play' size='2x' inverse />{' '}
								</a>
							)}
						</div>
					)}
				</div>
				<div className='user-page__about'>
					{showProfile.bio && (
						<div className='user-page__bio'>
							<h4>{showProfile.user.name.trim().split(' ')[0]} 's Bio</h4>
							<p>{showProfile.bio}</p>
						</div>
					)}
					<div className='user-page__skills'>
						<h4>Skill Set</h4>
						<div className='user-page__skill'>
							{showProfile.skills.map((skill, index) => (
								<span key={index}>
									{' '}
									<Icon icon='check-square-o' /> {skill}
								</span>
							))}
						</div>
					</div>
				</div>
			</article>
			{(showProfile.experience.length > 0 || showProfile.education.length > 0) && (
				<article className='exp-and-edu'>
					{showProfile.experience.length > 0 && (
						<div className='exps'>
							<h1>Experience</h1>
							{showProfile.experience.map((exp, index) => (
								<div className='exp' key={index}>
									<p className='exp-title'>{exp.title}</p>
									<p className='exp-para'>
										{exp.from.split('T')[0]} - {exp.to ? exp.to.split('T')[0] : 'NOW'}
									</p>
									{exp.location && (
										<p className='exp-para'>
											<span>Position:</span> {exp.location}
										</p>
									)}
									{exp.description && (
										<p className='exp-para'>
											<span>Description:</span> {exp.description}
										</p>
									)}
								</div>
							))}
						</div>
					)}
					{showProfile.education.length > 0 && (
						<div className='edus'>
							<h1>Education</h1>
							{showProfile.education.map((edu, index) => (
								<div className='edu' key={index}>
									<p className='edu-title'>{edu.school}</p>
									<p className='edu-para'>
										{edu.from.split('T')[0]} - {edu.to ? edu.to.split('T')[0] : 'NOW'}
									</p>
									{edu.degree && (
										<p className='edu-para'>
											<span>Degree:</span> {edu.degree}
										</p>
									)}
									{edu.fieldofstudy && (
										<p className='edu-para'>
											<span>Field Of Study:</span> {edu.fieldofstudy}
										</p>
									)}
									{edu.description && (
										<p className='edu-para'>
											<span>Description:</span> {edu.description}
										</p>
									)}
								</div>
							))}
						</div>
					)}
				</article>
			)}
			<ProfileRepos username={showProfile.githubusername} getRepos={getRepos} repos={repos}/>
		</section>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(mapStateToProps, {
	getProfileById,
    getRepos,
    clearRepos
})(Profile);
