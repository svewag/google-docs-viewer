var html = $("#description_full").html();
var result = html.match(/href="(http[s]?:\/\/spreadsheets[0-9]?\.google.*\/ccc[^"]*)">/i);
if(result && result.length > 1){	
	for(var i = 1; i < result.length; i++){
		var url = result[i];
		
		var r = url.match(/key=([a-z0-9]+)/i);		
		if(r && r.length > 1){
			var key = r[1];
			var link = $("a[href*="+key+"]");
		
			if(url.match(/#/)){
				url = url.replace(/\?/, "?amp;chrome=false&");
			} else {
				url += "&amp;chrome=false";
			}

			var iframe = document.createElement("iframe");
			iframe.src = url;
			iframe.width = "100%";
			iframe.height = "500";
			
			$(link).after(iframe);
		}
	}
}

var result = html.match(/href="(http[s]?:\/\/docs[0-9]?\.google\.com\/a\/sinnerschrader\.com\/[^"]*)">/i);
if(result && result.length > 1){	
	for(var i = 1; i < result.length; i++){
		var url = result[i];
		
		var r = url.match(/document\/d\/([^\/]+)/i);		
		if(r && r.length > 1){
			var key = r[1];
			var link = $("a[href*="+key+"]");
		
			var iframe = document.createElement("iframe");
			iframe.src = url;
			iframe.width = "100%";
			iframe.height = "500";
			
			$(link).after(iframe);
		}
	}
}
