import React, { Fragment, useState } from 'react';
import { Button, Animation, InputGroup, FormControl, Icon } from 'rsuite';

const SocailMediaInput = ({ socialmedia: {facebook, twitter, instagram, youtube, linkedin}}) => {
	const [ show, setShow ] = useState(false);
	return (
		<Fragment>
			<Button appearance='primary' onClick={() => setShow(!show)} block>
				<Icon icon='group' /> Add Social Media Links{'    '}
				<Icon icon='arrow-down' />
			</Button>
			<Animation.Collapse in={show}>
				<div className='social-media-inputs'>
					<InputGroup>
						<InputGroup.Addon>
							<Icon icon='youtube-play' />
						</InputGroup.Addon>
						<FormControl placeholder='Youtube' name='youtube' value={youtube || ""}/>
					</InputGroup>
					<InputGroup>
						<InputGroup.Addon>
							<Icon icon='facebook-square' />
						</InputGroup.Addon>
						<FormControl placeholder='Facebook' name='facebook' value={facebook || ""}/>
					</InputGroup>
					<InputGroup>
						<InputGroup.Addon>
							<Icon icon='twitter-square' />
						</InputGroup.Addon>
						<FormControl placeholder='Twitter' name='twitter' value={twitter || ""}/>
					</InputGroup>
					<InputGroup>
						<InputGroup.Addon>
							<Icon icon='linkedin-square' />
						</InputGroup.Addon>
						<FormControl placeholder='LinkedIn' name='linkedin' value={linkedin || ""}/>
					</InputGroup>
					<InputGroup>
						<InputGroup.Addon>
							<Icon icon='instagram' />
						</InputGroup.Addon>
						<FormControl placeholder='Instagram' name='instagram' value={instagram || ""}/>
					</InputGroup>
				</div>
			</Animation.Collapse>
		</Fragment>
	);
};

// linkedin-square instagram

export default SocailMediaInput;



// 