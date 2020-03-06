import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, FormGroup, FormControl, DatePicker, ControlLabel, Toggle } from 'rsuite';
import { connect } from 'react-redux';
import { closeModel } from '../../actions/modal';

import { endUpdate, updateExperience } from '../../actions/profile';

const UpdateExperiences = ({
	model: { showUpdateExp },
	closeModel,
	profile: { objUpdate },
	endUpdate,
	updateExperience
}) => {
	const initialState = {
		title: '',
		company: '',
		location: '',
		from: '',
		to: '',
		current: false,
		description: ''
	};

	useEffect(() => {
		return () => {
			setDataForm({
				...initialState
			});
		};
	}, []);

	const startObj = {
		...initialState,
		...objUpdate
	};

	const [ dataForm, setDataForm ] = useState({
		...startObj
	});

	const { _id: exp_id, title, company, location, from, to, current, description } = dataForm;

	const onChange = (formValue) => {
		setDataForm({
			...dataForm,
			...formValue
		});
	};

	const close = () => {
		closeModel();
		endUpdate();
	};
	const onUpdateEdu = async () => {
		await updateExperience(exp_id, { title, company, location, from, to, current, description });
		close();
	};

	return (
		<div>
			<Modal overflow={true} show={showUpdateExp} onHide={close}>
				<Modal.Header>
					<Modal.Title>Edit An Experience</Modal.Title>
					<p className='form__main-para--small'>
						Edit any developer/programming positions that you have had in the past.
					</p>
					<p className='form__para'> * = required field</p>
				</Modal.Header>
				<Modal.Body>
					<Form fluid onChange={(formValue) => onChange(formValue)}>
						<FormGroup>
							<FormControl name='title' placeholder='*Job Title' value={title} />
						</FormGroup>

						<FormGroup>
							<FormControl name='company' placeholder='*Company' value={company} />
						</FormGroup>

						<FormGroup>
							<FormControl name='location' placeholder='Location' value={location} />
						</FormGroup>

						<FormGroup>
							<ControlLabel>Start Date</ControlLabel>
							<DatePicker
								oneTap
								size='md'
								style={{ width: '50%' }}
								format='YYYY-MM-DD'
								value={from}
								onChange={(value) => {
									setDataForm({ ...dataForm, from: value.toDateString() });
								}}
							/>
						</FormGroup>

						<FormGroup>
							<ControlLabel>Current Job</ControlLabel>
								
                                <Toggle  defaultChecked={current} onChange={(value) => setDataForm({ ...dataForm, current: value })} 
                            />
						</FormGroup>

						<FormGroup>
							<ControlLabel>End Date</ControlLabel>
							<DatePicker
								oneTap
								size='md'
								value={to}
								style={{ width: '50%' }}
								format='YYYY-MM-DD'
								onChange={(value) => {
									setDataForm({ ...dataForm, to: value.toDateString() });
								}}
							/>
						</FormGroup>

						<FormGroup>
							<FormControl
								name='description'
								rows={5}
								value={description}
								placeholder='Job description'
								componentClass='textarea'
							/>
						</FormGroup>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={onUpdateEdu} appearance='primary'>
						Ok
					</Button>
					<Button onClick={close} appearance='subtle'>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

const mapStateToProps = (state) => ({
	model: state.model,
	profile: state.profile
});

export default connect(mapStateToProps, {
	closeModel,
	endUpdate,
	updateExperience
})(UpdateExperiences);
