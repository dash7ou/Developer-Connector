import React, { Fragment, useState } from 'react';
import { Button, Animation, InputGroup, FormControl, Icon } from 'rsuite';

const SocailMediaInput = () => {
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
						<FormControl placeholder='Youtube' name='youtube' />
					</InputGroup>
					<InputGroup>
						<InputGroup.Addon>
							<Icon icon='facebook-square' />
						</InputGroup.Addon>
						<FormControl placeholder='Facebook' name='facebook' />
					</InputGroup>
					<InputGroup>
						<InputGroup.Addon>
							<Icon icon='twitter-square' />
						</InputGroup.Addon>
						<FormControl placeholder='Twitter' name='twitter' />
					</InputGroup>
					<InputGroup>
						<InputGroup.Addon>
							<Icon icon='linkedin-square' />
						</InputGroup.Addon>
						<FormControl placeholder='LinkedIn' name='linkedin' />
					</InputGroup>
					<InputGroup>
						<InputGroup.Addon>
							<Icon icon='instagram' />
						</InputGroup.Addon>
						<FormControl placeholder='Instagram' name='instagram' />
					</InputGroup>
				</div>
			</Animation.Collapse>
		</Fragment>
	);
};

// linkedin-square instagram

export default SocailMediaInput;
