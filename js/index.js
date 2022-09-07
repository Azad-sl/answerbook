var random = {
	RandomNum: function(Max) {	
		var Range = Max;
		var Rand = Math.random();  
		var num  =Math.round(Rand * Range);
		return num;
    },
    getData: function(){
		datatext = random.RandomNum(length);
		$('.question-answers').text(answerData.data[datatext]);
	}
}

var length = answerData.data.length - 1;
var index = random.RandomNum(length - 1);

function showHTML(e) {
	$(e).addClass('click').removeClass('none')
    	.siblings().addClass('none').removeClass('click');
}

$('.join').on('click', function() {
	setTimeout(function() {
		showHTML(".method");
	}, 200);
})

$('.join-answer').on('click', function() {
	random.getData();
	$('.join-answer').text('正在预测中...');
	$('.method .image').addClass('imgtf');
	setTimeout(function() {
		$('.method .image').removeClass('imgtf');
		$('.join-answer').text('查看答案');
		showHTML(".answers");
	}, 500);
})

$('.goBack').on('click', function() {
	setTimeout(function() {
		showHTML(".answer-book");
	}, 200);
})