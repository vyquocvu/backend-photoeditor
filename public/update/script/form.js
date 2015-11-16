  //your code here
  	var nam;
	var mai;
	var siz;
	var noc;
	var fee;
	var img;
	
	$("#btnReview").click(function(){
		img=window.pic;
		console.log(pic);
		$('#img-review').attr("src", pic);
		getData();
		if(nam!="" && mai!="" && noc>0) {
			setData();
		}
		else alert("Please fill in the form completely");
	});

	function getData(){
		nam=$('#name').val();
		mai=$('#mail').val();
		siz=$('input[name=size]:checked').val();
		noc=$('#num').val();
		var unitcost;
		switch(siz) {
			case "small": unitcost=5; break;
			case "medium": unitcost=10; break;
			case "big":unitcost=20; break;
		}
		fee=unitcost * noc;
		console.log(nam + mai + siz + noc + unitcost + fee);
	}

	function setData(){
		var resultTxt="<p>Oderer: <b>"+nam+"</b>.</p>"+
		"<p>Email: <b>"+mai+"</b>.</p>"+
		"<p>Order to print Picture in <b>"+siz+"</b> size."+"</p>"+
		"<p>Number of copies: <b>"+noc+"</b></p>"+
		"<p>Picture will be delivered to you within 7 days."+"</p>"+
		"<p>Purchase order total: <b>"+fee+"$</b></p>";
		console.log(resultTxt);	
		$('#result').html(resultTxt);
	}
	$('#btnAgree').click(function(){
		$('#myForm').remove();
		$('#form-background').html("<h1 style='font-family:Freestyle Script; font-size:48px;letter-spacing: 3px;'>Thank you for trusting us!</h1>");
	});