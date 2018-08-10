import {Actions} from 'react-native-router-flux'
var WMAPI = {
	getToken: function (username, password) {
		fetch('https://commons.wikimedia.org/w/api.php', {
		method: 'POST',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'text/plain'
		},
		body:"action=login&lgname="+username+"&lgpassword="+password+"&format=json"
		})
		.then((response) => response.json())
		.then((response) => {
			WMAPI.login(response.login.token, username, password);
			console.log('response >>',response.login)
		}).done();
	},

	login: function (val,username,password){
		let mytoken= val.split('+')[0].trim();
		fetch('https://commons.wikimedia.org/w/api.php', {
		method: 'POST',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'text/plain'
		},
		body:"action=login&lgname="+username+"&lgpassword="+password+"&lgtoken="+mytoken+"%2B%5C&format=json"
		})
		.then((response) => response.json())
		.then((response) => {
		console.log('Success >>',response.login)
		if(response.login.result=="Success"){
			Actions.profile({sucessResponse : response.login});
			console.log('Successfully logged in')
		}else if(response.login.result=="Failed"){
			console.log('Erro logged in')
			Actions.errorpage({response : response.login});
		}else{}

		}).done();
	}
}

module.exports = WMAPI;