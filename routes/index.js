
exports.index = function (req, res) {
	console.log("Setting session name " + req.session.name);
	if(req.session.name)
		res.render('index', { 'name' : req.session.name });
	else
		res.render('login');
}

exports.inventory = function(req, res) {
	console.log("Setting session name " + req.session.name);
	if(req.session.name)
		res.render('inventory', { 'name' : req.session.name });
	else
		res.render('login');
}

exports.chat = function(req, res) {
	console.log("Setting session name " + req.session.name);
	if(req.session.name)
		res.render('chat', { 'name' : req.session.name });
	else
		res.render('login');
}

exports.logout = function(req, res) {
	req.session = null;
	res.render('logout');
}

exports.login = function(req, res) {
	console.log(req.session.name);
	res.render('login');
}

exports.createlogin = function(req, res) {
	res.render('createlogin');
}

exports.accounttype = function(req, res) {
	res.render('accounttype');
}

exports.createteam = function(req, res) {
	res.render('createteam');
}

exports.jointeam = function(req, res) {
	res.render('jointeam');
}

exports.newteamconfirm = function(req, res) {
	res.render('newteamconfirm');
}

exports.teamcode = function(req, res) {
	res.render('teamcode');
}

exports.soloconfirm = function(req, res) {
	res.render('soloconfirm');
}

exports.jointeamconfirm = function(req, res) {
	res.render('jointeamconfirm');
}

exports.success = function(req, res) {
	res.render('success');
}