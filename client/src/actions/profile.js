import axios from 'axios';
import { Notification } from 'rsuite';
import {
	GET_PROFILE,
	PROFILE_ERROR,
	CLEAR_PROFILE,
	CHANGE_LOADING,
	CREATE_PROFILE,
	UPDATE_PROFILE,
	ADD_EXPERIENCE,
	Add_EDUCATION,
	DELETE_EDUCATION,
	DELETE_EXPERIENCE,
	GET_PROFILES,
	GET_REPOS,
	GET_PROFILEBYID,
	CLEAR_REPOS,
	DELETE_PROFILE,
	UPDATE_EDUCATION,
	UPDATE_EXPERIENCE,
	START_UPDATE,
	END_UPDATES,
	END_UPDATE
} from './type';

// user get his profile
export const getProfile = (_) => async (dispatch) => {
	try {
		dispatch({
			type: CHANGE_LOADING
		});
		const res = await axios.get('/api/v1/profile/me');
		dispatch({
			type: GET_PROFILE,
			data: res.data
		});
	} catch (err) {
		if (err.response.status === 404) {
			Notification.warning({
				title: 'Create Profile',
				placement: 'topEnd',
				description: 'You need to create your profile.'
			});
		}
		dispatch({
			type: PROFILE_ERROR,
			error: {
				message: err.response.data.error
			}
		});
	}
};

export const getProfiles = (_) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/v1/profile`);
		dispatch({
			type: GET_PROFILES,
			data: res.data
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			error: {
				message: err.response.data.error
			}
		});
	}
};

export const getProfileById = (userId) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/v1/profile/user/${userId}`);
		dispatch({
			type: GET_PROFILEBYID,
			data: res.data
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			error: {
				message: err.response.data.error
			}
		});
	}
};

export const getRepos = (username) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/v1/profile/github/${username}`);
		dispatch({
			type: GET_REPOS,
			data: res.data
		});
	} catch (err) {
		dispatch({
			type: GET_REPOS,
			data: []
		});
	}
};

export const createProfile = (data) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const body = JSON.stringify({ ...data });
		const res = await axios.post('/api/v1/profile', body, config);
		dispatch({
			type: CREATE_PROFILE,
			data: res.data
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			error: {
				message: err.response.data.error
			}
		});
	}
};

export const updateProfile = (data) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const body = JSON.stringify({ ...data });
		const res = await axios.put('/api/v1/profile', body, config);
		dispatch({
			type: UPDATE_PROFILE,
			data: res.data
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			error: {
				message: err.response.data.error
			}
		});
	}
};

export const addExperience = (data) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const body = JSON.stringify({ ...data });
		const res = await axios.post('/api/v1/profile/experience', body, config);
		dispatch({
			type: ADD_EXPERIENCE,
			data: res.data
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			error: {
				message: err.response.data.error
			}
		});
	}
};

export const addEducation = (data) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const body = JSON.stringify({ ...data });
		const res = await axios.post('/api/v1/profile/education', body, config);
		dispatch({
			type: Add_EDUCATION,
			data: res.data
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			error: {
				message: err.response.data.error
			}
		});
	}
};

export const startUpdate = (data) => async (dispatch) => {
	dispatch({
		type: START_UPDATE,
		data
	});
};

export const endUpdate = (_) => (dispatch) => {
	dispatch({
		type: END_UPDATE
	});
};

export const updateExperience = (exp_id, data) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ ...data });

	try {
		const res = await axios.put(`api/v1/profile/experience/${exp_id}`, body, config);
		dispatch({
			type: UPDATE_EXPERIENCE,
			data: res.data
		});

		Notification.success({
            title: "Update Experience",
            placement:"topEnd",
            description: "update your experience suceess."
        });
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			error: {
				message: err.response.data.error
			}
		});
	}
};

export const updateEducation = (edu_id, data) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ ...data });
	try {
		const res = await axios.put(`api/v1/profile/education/${edu_id}`, body, config);
		dispatch({
			type: UPDATE_EDUCATION,
			data: res.data
		});
		Notification.success({
            title: "Update Education",
            placement:"topEnd",
            description: "update your education suceess."
        });
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			error: {
				message: err.response.data.error
			}
		});
	}
};

export const clearRepos = () => (dispatch) => {
	dispatch({
		type: CLEAR_REPOS
	});
};
export const deleteExperience = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`/api/v1/profile/experience/${id}`);
		dispatch({
			type: DELETE_EXPERIENCE,
			data: res.data
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			error: {
				message: err.response.data.error
			}
		});
	}
};

export const deleteEducation = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`/api/v1/profile/education/${id}`);
		dispatch({
			type: DELETE_EDUCATION,
			data: res.data
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			error: {
				message: err.response.data.error
			}
		});
	}
};

export const deleteProfile = (_) => async (dispatch) => {
	try {
		await axios.delete('/api/v1/profile');
		dispatch({
			type: DELETE_PROFILE
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			error: {
				message: err.response.data.error
			}
		});
	}
};
export const setLoading = (_) => (dispatch) => {
	dispatch({
		type: CHANGE_LOADING
	});
};

export const clearProfile = (_) => (dispatch) => {
	dispatch({
		type: CLEAR_PROFILE
	});
};
