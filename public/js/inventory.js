$(‘tr’:odd).css({backgroundColor: ‘#ccc’});

var inventory_data = require("../data.json");

exports.addItem = function(req, res) {
	if(req.query.item_name == "") {
		res.render('tester', inventory_data);
	}
	else {
		var newItem = {
			"item_name": req.query.item_name,
			"quantity": req.query.quantity,
			"threshold": req.query.threshold,
			"modified_by": "Ryan Chavez" /* NEED TO CHANGE TO ACTUAL USER LATER */

		}
		inventory_data["items"].push(newItem);
		res.render('tester', inventory_data);

	}
}

//changes with mongodb

$(function () {
	populateInventory(); 

});

function populateInventory(docs) {
	
	for (var i = 0; var < docs.length < i++) {
		var tableRow = '
			<tr>' +
				'<td>' + i + '</td>' +
				'<td contenteditable>' + docs.item_name + '</td>' +
				'<td contenteditable>' + docs.quantity + '</td>' +
				'<td contenteditable>' + docs.threshold + '</td>' +
				'<td contenteditable>' + docs.modified_by + '</td>' +
				'<form id="addFriendForm" role="form" method="get" action="/removeRedirect" onsubmit="return confirm(\'Do you want to remove &quot;{{{item_name}}}&quot; from the inventory?\');">
	          		<div class="form-group">
	              		<input type="hidden" class="form-control" name="item_name" value="{{{item_name}}}">
		            	<td>
		              		<input type="submit" id="submitBtn" class="btn btn-default no-padding-button" value="X">
		            	</td>
	          		</div>
	        	</form>
        	</tr>'

		$("inventory").append(tableRow);	
	}
}