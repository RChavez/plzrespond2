$(function() {
	populateFields();

    $("#custom-margin-top-create-login1").click(function() {
    });
});

function populateFields() {
	var getString = "populateSoloConfirm";
	$.get(getString, callback);
}

function callback(jsonObj) {
	console.log(jsonObj['tempName']);
	console.log(jsonObj['tempEmail']);
	$("#name").text(jsonObj['tempName']);
	$("#email").text(jsonObj['tempEmail']);
}