//function that clears the prvious table on clicking submit.
function removeTable(){
	var table=$('tr');
		table.remove();}
//to create the table according to the input height and width.
function makeGrid(){
removeTable();
	var row=$('#inputHeight').val();
	var col=$('#inputWeight').val();
	for(var i =1;i<=row;i++){
	$('table').append("<tr></tr>");
	for(var j=1;j<=col;j++){
	//tr:last,to append the td to the last tr.
		$('tr:last').append("<td height='5px' width='5px'></td>");
		
}
}//to set colour values for the cells using event listeners.
$('td').click( function (event){
	var paint=$('#colorPicker').val();

	if($(this).attr('style')){
		$(this).removeAttr('style');
	}else{$(this).attr('style','background-color:'+paint);}
});
}

//event listeners to create table on submit(class;create).
$('.create').click(function (k)
	{k.preventDefault();
   makeGrid();
});
