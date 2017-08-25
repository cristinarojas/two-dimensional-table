
(function solution() {
	var result = '';

	$("table tr td").each(function() {
		var color = $(this).css('color');
		var backgroundColor = $(this).css('background-color');
		var text = $(this).text();

		if (color !== backgroundColor) {
			result += text;
		}
	});

	return result;
})();