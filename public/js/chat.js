
var socket = io.connect();

$(function() {

    //$("#pseudoSet").click(function() {
    	setPseudo();
   // });

    $("#submit").click(function() {
    	sentMessage();
    });
   
});

socket.on('connect', function() {
	
});

function addMessage(msg, pseudo, date, self) {
    if(self)
        var divClass = 'sent_msg';
    else
        var divClass = 'received_msg';

    $("#chatEntries").append('<div><span class=' + divClass +'>' 
        + pseudo + ' : ' + msg + '</span></div>');
}

//for past messages (docs)
function loadOldMsg(doc) {
    var name = $("#current-user-name").text().substring(14).trim();

    if(name===doc.pseudo){
        var divClass = 'sent_msg';
    }
    else {
        var divClass = 'received_msg';
    }

    var time = determineDateString(doc);

    $("#chatEntries").append('<div><span class=' + divClass +'>' 
        + doc.pseudo + ' : ' + doc.msg + '<br><span class=\"timeStamp\">' +  time +'</span>' + '</span></div>');
}

function determineDateString(doc) {
    var time = new Date(doc.timeStamp);
    var one_day=1000*60*60*24;

    var currentDate = new Date();

    var time_ms = time.getTime();
    var curr_ms = currentDate.getTime();

    if((curr_ms - time_ms) > one_day) {
        var monthNames = [ "Jan", "Feb", "Mar", "April", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

        return monthNames[time.getMonth()] + ' ' + time.getDate();
    } else {

        if(time.getHours() > 12)
            var suffix = 'PM';
        else
            suffix = 'AM';


        return time.getHours() % 12 + ':' + time.getMinutes() + " " + suffix;
    }

}


//for live messages (data)
function sentMessage() {
	console.log("message sent");
    if ($('#messageInput').val() != "") 
    {
        socket.emit('message', $('#messageInput').val());
        addMessage($('#messageInput').val(), "Me", new Date().toISOString(), true);
        $('#messageInput').val('');
    }
}

function setPseudo() {
    $.get('/pseudo', pseudoCallback);


    // if ($("#pseudoInput").val() != "") {
    //     socket.emit('pseudo', $("#pseudoInput").val());
    //     $('#chatControls').show();
    //     $('#pseudoInput').hide();
    //     $('#pseudoSet').hide();
    // }
}

function pseudoCallback(jsonObj) {
    var user = jsonObj['user'];
    socket.emit('pseudo', user);
}


socket.on('message', function(data) {
    console.log("Message received from" + data['pseudo'] + " : " + data['message']);
    addMessage(data['message'], data['pseudo'], new Date().toISOString(), false);
});

socket.on('loadOldMsgs', function(docs){
    for (var i = 0 ;i < docs.length; i++) {
        loadOldMsg(docs[i]);
    }
}); 