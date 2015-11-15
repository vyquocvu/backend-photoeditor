// $(document).ready(function() {
var cStep = 0;
var cPushArray = new Array();
var first = true;
var cxCrop,cyCrop,cwCrop,chCrop;
var jcrop;
var sizetemp = new Image();
var h = 0;
var w = 0;
$("#crop").click(function(){
	if(cStep !=0){
		console.log("enable...");
		$('#canvas').data('Jcrop').enable();
		$('.jcrop-holder').css('visibility', 'visible');

	}
	cStep = 1;
	console.log("crop is running.....");
		jcrop = $('#canvas').Jcrop({
		onChange: updatePreview,
		onSelect: updatePreview,
		allowSelect: true,
		allowMove: true,
		allowResize: true,
		aspectRatio: 0
	});
});
$("#btnApplyFormCrop").click(function(){

	//ctx.drawImage(imgTemp,cxCrop,cyCrop,cwCrop,chCrop,cxCrop,cyCrop,cwCrop,chCrop);
	var imgData=ctx.getImageData(cxCrop,cyCrop,cwCrop,chCrop);
 	ctx.clearRect(0, 0, can.width, can.height);
	ctx.putImageData(imgData,(can.width - cwCrop)/2,(can.height - chCrop)/2);
	xCoor = (can.width - cwCrop)/2;
	yCoor = (can.height - chCrop)/2;
	wSize = cwCrop;
	hSize = chCrop;
	// console.log(" crop "+xCoor+"========================="+ yCoor);
	imgTemp.src =  can.toDataURL();
	sizetemp.src  =	imgTemp.src ;
  h = 0;
  w = 0;
});
$("#btnCancelFormCrop").click(function(){
	$('#canvas').data('Jcrop').disable();
	$('.jcrop-holder').css('visibility', 'hidden');
	$( "#cropForm" ).toggle( "blind", {}, 100 );
});
$('#resizebar').change(function() {
	var sizebase = $('#resizebar').val() / 100;
	if(sizetemp.src  =="" ){
		sizetemp.src = can.toDataURL();
		// console.log("srcimgtemp:"+imgTemp.src);
		// console.log("canURL:"+can.toDataURL());

	}

	ctx.clearRect(0, 0, can.width, can.height);
		// console.log("sizetemp:"+sizetemp.src);
		// console.log("canURL:"+can.toDataURL());
	ctx.drawImage(sizetemp,can.width *(1-sizebase)/2 ,can.height  *(1-sizebase)/2 ,can.width * sizebase,can.height * sizebase);

		if(img.height >=can.height || img.width >= can.width ){
			xCoor = can.width *(1-sizebase)/2;
			yCoor = can.height *(1-sizebase)/2;
		}else{
			xCoor = HAFTW_CAN - img.width/2 + img.width *(1-sizebase)/2;
			yCoor = HAFTH_CAN - img.height/2 + img.height *(1-sizebase)/2;
		}

		if ( h==0 || w ==0){
			h = hSize;
			w = wSize;
		}
		wSize = w * sizebase;
		hSize = h * sizebase;

	imgTemp.src =  can.toDataURL();
	console.log("canURL:"+can.toDataURL());
});

function updatePreview(c) {
	if (parseInt(c.w) > 0) {
        // Show image preview
        var imageObj = $("#canvas")[0];
        if (imageObj != null && c.x != 0 && c.y != 0 && c.w != 0 && c.h != 0) {
        	cxCrop = c.x;
        	cyCrop = c.y;
        	cwCrop = c.w;
        	chCrop = c.h;
        }
    }
}

// });