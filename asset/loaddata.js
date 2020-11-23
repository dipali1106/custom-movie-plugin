

jQuery(document).ready(function($){
	$('#displayBtn').click(function(e){
		e.preventDefault();
		$.ajax({
			method:"post",
			url:
			data:$('#showData').serialise(),
			dataType:"html",
			success: function(response){
				$('#showMsg').text(response);

			}
		});
	});
});
