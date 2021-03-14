var path = ""

async function downloadImage(){
	return new Promise( ( resolve, reject ) => {
		const timeout = setTimeout( ()=> {
			let image= new Image();
			image.onload = () => { resolve(image); };
			image.src = path;
		}, 2000 );
	});
}

document.querySelector( '#download' ).addEventListener( 'click', async ( { target } ) => {
	document.getElementById("cancel").style.display="";
	console.log("The script is starting")
	path = 'https://tva3.sinaimg.cn/large/0076R7yAgy1fq8ds3ulsmj31hc0u04i0.jpg'
	const downloadPromise = downloadImage()
	console.log("The image is being downloaded")
	/////
	document.getElementById("cancel").style.display="";
	document.getElementById("cancel").onclick = function() {
		alert( 'You canceled the download' );
		console.log( 'You canceled the download' );
		path = "";
		document.getElementById("cancel").style.display="none";
	}
	/////
	const image = await downloadPromise
	console.log("The image has been downloaded", image)

	

} );