function xhr(callback,{url,method = 'GET',fileType = 'application/json'}){
		return requestData(url,method,fileType).then(callback,console.log.bind(console)).catch(console.log.bind(console));
}


function requestData(url,method,fileType){
	return new Promise(function(success,failure){
		//initialize the XHR  request
		const httpObj = new XMLHttpRequest();
		//send
		httpObj.open(method,url,true);
		//set the Mimetype for the response file
		httpObj.setRequestHeader("accept",fileType);
		
		//eventlistener which listens for the request completion
		httpObj.addEventListener("load",() => {
			if(httpObj.status < 400){
				success(httpObj.responseText);
			}
			//will throw error if there is a error with the request server side
			else{
				throw new Error(httpObj.statusText);
			}
		});
		//eventlistener which listens for errors on the client side
		httpObj.addEventListener("error",() => {
			failure(new Error("Network Error: " + httpObj.statusText));
		});
		httpObj.send(null);
	});
}

export default xhr;