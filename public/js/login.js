$(function() {
    $("#signInBtn").click(function(event) {
    	signIn();
    	window.location.href="/";
    });
});

function signIn() {

	var email = $("#email").val();
	if (email != "") {
		$.post('/signIn', { "email" : email }, callback);
	}
}

function callback() {

	console.log("in callback");
	$.get('/');
}