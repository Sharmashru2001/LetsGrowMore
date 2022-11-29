function cal()
{
	var n=names.value;
	var w=web.value;
	var e=mail.value;
	var i=image.value;
	var p=pas.value;





	var htm="<table><caption><h1>Details<h1></caption>"
	    htm+="<tr><th> Full name => </th><th>"+n+"</th></tr>"
	     htm+="<tr><th> Email => </th><th>"+e+"</th></tr>"
	      htm+="<tr><th> Website => </th><th>"+w+"</th></tr>"
	       htm+="<tr><th> Image link => </th><th>"+i+"</th></tr>"
	        htm+="<tr><th> Password => </th><th>"+p+"</th></tr>"
	        htm+="<tr><th> Gender => </th><th> Male</th></tr>"
	        htm+="<tr><th> Skill => </th><th> Java </th></tr></table>"



	    result.innerHTML=htm;

}