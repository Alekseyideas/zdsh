/* eslint-disable no-underscore-dangle */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
// var aktion = aktion || [];

const generateID2 = (callback) => {
  if (process.env.NODE_ENV === 'development') {
    const testKey =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBpZCI6MTA4MjYsImd1ZXN0a2V5IjoiMjE3ZDliMzRmMTEyNGNkZGE5ZTMxYjMzOWFjMTMyNmE5YTIzNTY4OTcyMDU0YmYxODc4NDdjYzg2YzZkMzY4ZSIsImV4cGlyZXMiOjE1OTgwNTE1OTJ9.WEfePO0QV9RkNUWHk9M0P4L4IBQvua154nNLMTiJ2GI';
    localStorage.setItem('token', testKey);
    console.log('key', testKey);
    return callback(testKey);
  }
  let usr = null;
  let user_id = '0';
  let publication_code = parseInt('948');
  if (publication_code === 0) {
    publication_code = '920';
  }
  let id_apress = parseInt('2874');
  if (id_apress === 0) {
    id_apress = '2874';
  }
  // let tk = '';

  // loader
  const _user = {
    id: user_id,
    middleName: '',
    gender: '',
    phone: '',
    email: '',
    lastName: '',
    birthday: '',
    firstName: '',
  };

  (function () {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.action-mcfr.ru/widgets/loader.js';
    script.onload = onLoadLoaderScript;
    document.getElementsByTagName('head')[0].appendChild(script);
  })();

  function onLoadLoaderScript() {
    window.WidgetLoader.load({ name: 'authButtonExternal' }, onAuthButtonLoad);
    window.WidgetLoader.load({ name: 'marketingLib' }, onActionEventsLoad);
    window.WidgetLoader.load({ name: 'marketingEntryPoint' });
  }

  function onAuthButtonLoad() {
    window.ActionAuthButtonExternal.init({
      appid: '14976',
      emid: publication_code,
      lang: 'ua',
      user: _user,
      loginblock: 'authButton',
      theme: 'native',
      supportlink: 'https://id.mcfr.ua/Feedback',
      reglink: 'https://id.mcfr.ua/Account/Registration',
      mode: 'prod',
      onUserChange,
      onTokenChange,
    });
  }

  function onUserChange(user) {
    if (user && user.id) {
      runTargetAction(user.id);
    }
    usr = user;
    if (user !== undefined && user_id === 0) {
      const ntk = window.ActionAuthButtonExternal.getTokenValue();
      // console.log('onUserChange tk: ', tk);
      if (ntk) {
        console.log('ntk: ', ntk);
        localStorage.setItem('token', ntk);
        callback(ntk);
      }

      // console.log("redirect");
      // $.ajax({
      // 	url: 'https://space.mcfr.ua/Sess/addtk',
      // 	data: {
      // 		tk
      // 	},
      // 	type: 'POST',
      // 	dataType: 'json',
      // 	success(response) {
      // 		console.log('onUserChange response: ', response);
      // 	}
      // });
    } else {
      user_id = 0;
      console.log('user_id is null');
      // localStorage.clear();
    }
  }

  async function onTokenChange(token2) {
    localStorage.setItem('token', token2);
    callback(token2);
    // const tk = window.ActionAuthButtonExternal.getTokenValue();
    // const cuser = await window.ActionAuthButtonExternal.getUser();
    // console.log('cuser: ', cuser);
    // console.log('onTokenChange tk: ', tk);
  }

  function onActionEventsLoad() {
    window.ActionEvents.init({
      publicationCode: publication_code,
    });
  }
  function runTargetAction(uid) {
    if (window.ActionEvents !== undefined) {
      window.ActionEvents.saveaction([
        uid,
        'target',
        window.location.href,
        id_apress,
        publication_code,
        '',
      ]);
    } else {
      console.log('have problem loading library');
    }
  }
  // const publication_code = 920;
  // (function () {
  // 	const s = document.createElement('script');
  // 	s.type = 'text/javascript';
  // 	s.async = true;
  // 	s.src = '//m.action-media.ru/js/all.2.js';
  // 	const es = document.getElementsByTagName('script')[0];
  // 	es.parentNode.insertBefore(s, es);
  // })();
  // window.AsyncInit = function () {
  // 	// console.log(aktionid);
  // 	// setToken(aktionid.token);

  // 	//
  // 	aktionid.init({
  // 		appid: '10559',
  // 		emid: publication_code,
  // 		rater: false,
  // 		clientcallback: '',
  // 		loginblock: 'login',
  // 		style: 'light',
  // 		lang: 'ua',
  // 		supportlink: 'https://id.mcfr.ua/Feedback',
  // 		reglink: 'https://id.mcfr.ua/Account/Registration'
  // 	});
  // 	aktionid.subscribe('status.auth', callbackAuth);
  // 	aktionid.subscribe('token.change', callbackChange);
  // 	aktionid.subscribe('status.noauth', callbackNoauth);
  // };

  // function runTargetAction(user_id) {
  // 	console.log('start');
  // 	if (user_id > 0) {
  // 		aktion.push(['saveaction', user_id, 'target', 'https://service.mcfr.ua/ua/dish/', 4126, publication_code, '']);
  // 		console.log('aktion: ', aktion);
  // 		console.log('publication_code: ', publication_code);
  // 	}
  // }

  // async function callbackAuth(o) {
  // 	if (o.status.token) {
  // 		const tk = await localStorage.getItem('token');
  // 		if (!tk) {
  // 			if (o.status.token !== '') {
  // 				console.log('callbackAuth created');
  // 				if (o.user.id) runTargetAction(+o.user.id);
  // 				await localStorage.setItem('token', o.status.token);
  // 				callback(aktionid.token);
  // 				// self.location = `/ua/calc_debts/none/?token=${o.status.token}${utm_parameters_string}`;
  // 			} else {
  // 				callback('');
  // 				localStorage.clear();
  // 			}
  // 		} else {
  // 			console.log('token already exist !');
  // 		}
  // 	}
  // }

  // async function callbackChange(o) {
  // 	if (o.status.token) {
  // 		if (o.status.token !== '') {
  // 			console.log('callbackChange update');
  // 			// self.location = `/ua/calc_debts/none/?token=${o.status.token}${utm_parameters_string}`;
  // 			if (o.user.id) runTargetAction(+o.user.id);
  // 			await localStorage.setItem('token', o.status.token);
  // 			callback(o.status.token);
  // 		} else {
  // 			callback('');
  // 			localStorage.clear();
  // 		}
  // 	} else {
  // 		callback('');
  // 		localStorage.clear();
  // 	}
  // }

  // async function callbackNoauth(o) {
  // 	console.log(o, 'callbackNoauth');
  // 	callback('');
  // 	localStorage.clear();
  // }

  // return null;
};

export default generateID2;
