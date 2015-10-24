
var demoSentence = '思特沃克';
var demoStroke = [
	['丨', 'ㄥ', '一', '丨', '一', '丿', 'ㄥ', '丶', '丶'],
	['丿', '一', '丨', '一', '一', '丨', '一', '一', 'ㄥ', '丶'],
	['丶', '丶', '一', '丿', '一', '丿', '丶'],
	['一', '丨', '丨', 'ㄥ', '一', '丿', 'ㄥ']
];

var characterIndex = 0;
var strokeIndex = 0;

function keypress () {
	console.log($(this).attr('data-value'));
};

$(document).ready(function() {
	$('#character').html(demoSentence[characterIndex]);
	$('#strokes').html(demoStroke[characterIndex].toString().replace(/,/g, ''));
	$('.key').click(keypress);
});