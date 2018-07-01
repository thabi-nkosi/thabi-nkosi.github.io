
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (event){
	event.preventDefault();
	const height = $('#inputHeight').val();
	const width = $('#inputWeight').val();
	makeGrid(height, width);
})




function makeGrid(x, y) {

// Your code goes here!
$('tr').remove();


for (var i = 1; i<=x; i++){
	$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for (var k = 1; k<=y; k++){
				$('#table' + i).append('<td></td>');
				
		}
}
	

$('td').click(function addColor(){
	const color = $('#colorPicker').val();
	
	if ($(this).attr('style')){
		$(this).removeAttr('style')
	} else {
		$(this).attr('style', 'background-color:' + color);
	}
	
})	
	
}		



