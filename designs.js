//function that clears the prvious table on clicking submit.
function removeTable(){
	let table=$('tr');
		table.remove();
}
//to create the table according to the input height and width.
function makeGrid(){
//call on removeTable() to clear the previous table.
	removeTable();
	let row=$('#inputHeight').val();
	let col=$('#inputWeight').val();
	for(let i =1;i<=row;i++){
	$('table').append("<tr></tr>");
	for(let j=1;j<=col;j++){
	//tr:last,to append the td to the last tr.
	$('tr:last').append("<td height='5px' width='5px'></td>");	
}
}//to set colour values for the cells using event listeners.
//if a cell has a style attribute,remove it else add one to it.
$('td').click( function (event){
	let paint=$('#colorPicker').val();
	if($(this).attr('style')){
	$(this).removeAttr('style');
	}else{
	$(this).attr('style','background-color:'+paint);
	}
});
}

//event listeners to create table on submit(class;create).
$('.create').click(function (k){
	k.preventDefault();
   	makeGrid();
});
