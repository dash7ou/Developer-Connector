const axios = require('axios');
const config = require('config');
const ErrorResponse = require("./errorResponse")

const getGitHubProfile = async (username) => {

    const conf = {
        headers: {
            'user-agent': 'node.js'
        }
    }

	try {
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${config.get(
				'githubClientId'
			)}&client_secret=${config.get('githubClientSecret')}`,conf
        );
        if(!res){
            throw new ErrorResponse("", {
                type: 'onlyMessage',
                statusCode: 404,
                message: 'No Github profile'
            })
        }
        return res.data;
	} catch (err) {
        if(err.response.status === 404){
            return 404
        }
    }
};


module.exports = getGitHubProfile;