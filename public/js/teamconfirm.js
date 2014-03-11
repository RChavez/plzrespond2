$(function() {
	populateTeamFields();

    $("#custom-margin-top-create-login1").click(function() {
    });
});

function populateTeamFields() {
	var getString = "populateTeamConfirm";
	$.get(getString, callback);
}

function callback(jsonObj) {
	console.log(jsonObj['tempName']);
	console.log(jsonObj['tempEmail']);
	console.log(jsonObj['tempTeam']);

	$("#name").text(jsonObj['tempName']);
	$("#email").text(jsonObj['tempEmail']);
	$("#team").text(jsonObj['tempTeam']);
}