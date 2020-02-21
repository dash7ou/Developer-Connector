import React from 'react';
import { Button, Icon } from 'rsuite';

const ProfilesItem = ({ profile, history }) => {
	const { user: {_id:userId, avatar, name }, _id ,company,status, location, skills } = profile;

	const onGetProfile = ()=>{
		history.push(`/developers/${userId}`)
	}

	return (
		<article className='dev-card' >
			<div className='dev-card__photo'>
				<img src={avatar} />
			</div>
			<div className='dev-card__info'>
				<div className='dev-card__main-info'>
					<div className='space'>
						<h2 className='para-title'>{name}</h2>
						<p className='para-normal'>
							{status} {company && <span>{company}</span>}
						</p>
						<p>
							{location && (
								<span>
									<Icon icon='map-marker' /> {location}
								</span>
							)}
						</p>
					</div>
					<Button onClick={onGetProfile} color='blue'> <Icon icon="profile"/> View Profile</Button>
				</div>
				<div className='dev-card_skills'>
					{skills.map((x, index) => (
						<p key={index}>
							<Icon icon='check-square-o' /> {x}
						</p>
					))}
				</div>
			</div>
		</article>
	);
};

export default ProfilesItem;
