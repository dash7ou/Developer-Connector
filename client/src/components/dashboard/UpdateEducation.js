import React, { useState } from 'react';
import { Modal, Button, Form, FormGroup, FormControl, DatePicker, ControlLabel, Toggle } from 'rsuite';
import { connect } from 'react-redux';
import { closeModel } from '../../actions/modal';

import { endUpdate, updateEducation } from '../../actions/profile';

const UpdateEducation = ({
	model: { showUpdateEdu },
	closeModel,
	profile: { objUpdate },
	endUpdate,
	updateEducation
}) => {
	const initialState = {
		school: '',
		degree: '',
		fieldofstudy: '',
		from: '',
		to: '',
		current: false,
		description: ''
	};

	const startObj = {
		...initialState,
		...objUpdate
	};

	const [ dataForm, setDataForm ] = useState({
		...startObj
	});

	const { _id: edu_id, school, degree, from, to, current, description, fieldofstudy } = dataForm;

	const onChange = (formValue) => {
		setDataForm({
			...dataForm,
			...formValue
		});
	};

	const close = () => {
		setDataForm({
			...initialState
		});
		closeModel();
		endUpdate();
	};
	const onUpdateEdu = async () => {
		await updateEducation(edu_id, { school, degree, from, to, current, description, fieldofstudy });
		close();
	};

	return (
		showUpdateEdu &&
		objUpdate.school && (
			<div>
				<Modal overflow={true} show={showUpdateEdu} onHide={close}>
					<Modal.Header>
						<Modal.Title>Add An Education</Modal.Title>
						<p className='form__main-para--small'>Add any school or bootcamp that you have attended.</p>
						<p className='form__para'> * = required field</p>
					</Modal.Header>
					<Modal.Body>
						<Form fluid onChange={(formValue) => onChange(formValue)}>
							<FormGroup>
								<FormControl name='school' placeholder='*School or Bootcamp' value={school} />
							</FormGroup>

							<FormGroup>
								<FormControl name='degree' placeholder='*Degree or Certificate' value={degree} />
							</FormGroup>

							<FormGroup>
								<FormControl name='fieldofstudy' placeholder='*Field Of Study' value={fieldofstudy} />
							</FormGroup>

							<FormGroup>
								<ControlLabel>Start Date</ControlLabel>
								<DatePicker
									oneTap
									size='md'
									style={{ width: '50%' }}
									value={from}
									format='YYYY-MM-DD'
									onChange={(value) => {
										setDataForm({ ...dataForm, from: value.toDateString() });
									}}
								/>
							</FormGroup>

							<FormGroup>
								<ControlLabel>Current Job</ControlLabel>
								<Toggle
									defaultChecked={current}
									onChange={(value) => setDataForm({ ...dataForm, current: value })}
								/>
							</FormGroup>

							<FormGroup>
								<ControlLabel>End Date</ControlLabel>
								<DatePicker
									oneTap
									size='md'
									style={{ width: '50%' }}
									value={to}
									format='YYYY-MM-DD'
									onChange={(value) => {
										setDataForm({ ...dataForm, to: value.toDateString() });
									}}
								/>
							</FormGroup>

							<FormGroup>
								<FormControl
									name='description'
									value={description}
									rows={5}
									placeholder='Program Description'
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
		)
	);
};

const mapStateToProps = (state) => ({
	model: state.model,
	profile: state.profile
});

export default connect(mapStateToProps, {
	closeModel,
	endUpdate,
	updateEducation
})(UpdateEducation);
