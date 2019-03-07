// get all of our list items
	var ItemsToFilter = document.querySelectorAll("#ItemsToFilter li");

	//setup click event handlers on our checkboxes
	var checkBoxes = document.querySelectorAll(".filterSection li input");



	for (var i = 0; i < checkBoxes.length; i++) {
		checkBoxes[i].addEventListener("click", filterItems, false);
		checkBoxes[i].checked = true;

	}

	var subBoxInput = document.querySelectorAll("#ItemsToFilter li input");

	for (var i = 0; i < subBoxInput.length; i++) {
		subBoxInput[i].checked = true;
	}

	// the event handler!
	function filterItems(e) {
		var clickedItem = e.target;

		if (clickedItem.checked == true) {
			hideOrShowItems(clickedItem.value, "hideItem", "showItem");
		} else if (clickedItem.checked == false) {
			hideOrShowItems(clickedItem.value, "showItem", "hideItem");
		} else {

		}
	}

	// add or remove classes to show or hide our content

	function hideOrShowItems(itemType, classToRemove, classToAdd) {
		for (var i = 0; i < ItemsToFilter.length; i++) {
			var currentItem = ItemsToFilter[i];

			if (currentItem.getAttribute("data-type") == itemType) {
				removeClass(currentItem, classToRemove);
				addClass(currentItem, classToAdd);
			}
		}
	}
 
 // Helper functions for adding and removing class values
 function addClass(element, classToAdd) {
 	var currentClassValue = element.className;

 	if(currentClassValue.indexOf(classToAdd) == -1) {
 		if((currentClassValue == null) || (currentClassValue === "")) {
 			element.className = classToAdd;
 		} else {
 			element.className += " " + classToAdd;
 		}
 	}
 }

 function removeClass(element, classToRemove) {
 	var currentClassValue = element.className;

 	if (currentClassValue == classToRemove) {
 		element.className = "";
 		return;
 	}

 	var classValues = currentClassValue.split(" ");
 	var filteredList = [];

 	for (var i = 0; i < classValues.length; i++) {
 		if (classToRemove != classValues[i]) {
 			filteredList.push(classValues[i]);
 		}
 	}

 	element.className = filteredList.join(" ");
 }

$(function() {
	$(".child").on("click",function() {
		$parent = $(this).prevAll(".parent");
		if ($(this).is(":checked"))

	$parent.prop("checked",true);
		else {
			var len = 
	$(this).parent().find(".child:checked").length;
			$parent.prop("checked",len>0);		
		}		
	});

	$(".parent").on("click",function() {

		$(this).parent().find(".child").prop("checked",this.checked);
	});
});

$(function(){
	$('#brands').on('change',function(){
		$('.brands').prop('checked',$(this).prop('checked'));
	});
});

$(function(){
	$('#media').on('change',function(){
		$('.media').prop('checked',$(this).prop('checked'));
	});
});

$(function(){
	$('#technology').on('change',function(){
		$('.technology').prop('checked',$(this).prop('checked'));
	});
});



function mySearch() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase();
	ul = document.getElementById('ItemsToFilter');
	li = ul.getElementsByTagName('li');


	for (var i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName('a')[0];
		txtValue = a.textContent || a.innerText;

		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}


}

var ul = document.getElementById('ItemsToFilter');

ul.getElementsByClassName('child').onclick = function() {
	toggleSub(this, 'output');
};

function toggleSub(box, a) {
	var txt = document.getElementsByTagName('a');

	if (box.checked) {
		txt.style.display = "block";
	} else {
		el.style.display = "";
	}
}



