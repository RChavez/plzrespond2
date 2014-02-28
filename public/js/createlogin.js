$(function() {
	console.log("Here1");
    $("#custom-margin-top-create-login1").click(function() {
    	console.log("here2");
    	createAcct();
    });
});

function createAcct() {

	var name = $("#name").val();
	var email = $("#inputEmail3").val();
	if (email != "" && name != "") {
		var getString = "createLoginForm/" + email + "/" + name;
		$.get(getString);
	}
}