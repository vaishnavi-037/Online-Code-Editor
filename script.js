 function run(){
 	var html = document.querySelector("#codeContainerBox #htmlCont").value;
 	var css = document.querySelector("#codeContainerBox #cssCont").value ;
 	var js = document.querySelector("#codeContainerBox #jsCont").value;
 	css = "<style>"+ css +"</style>"; 

 	var output = document.querySelector("#codeContainerBox #resultCont");

 	output.contentDocument.body.innerHTML = html+css;
    output.contentWindow.eval(js);
 	
 }

    var htmlBtn = document.querySelector("#html");
	var cssBtn = document.querySelector("#css");
	var jsBtn = document.querySelector("#js");
	var runBt = document.getElementById("result");

	var areah =  document.querySelector("#hc");
	var areac =  document.querySelector("#cc");
	var areaj =  document.querySelector("#jc");
	var arear = document.querySelector("#rc");
    
    var htmlta = document.querySelector("#htmlCont");
 	var cssta = document.querySelector("#cssCont");
 	var jsta = document.querySelector("#jsCont");
 	var rsta = document.querySelector("#resultCont");


	var hh = document.querySelector("#hh");
	var ch = document.querySelector("#ch");
	var jh = document.querySelector("#jh");
	var rh = document.querySelector("#rh");

	runBt.addEventListener("click",function(){
		rsta.style.display = rsta.style.display === "none" ? "block" : "none";
		rh.style.display = rh.style.display === "none" ? "block" : "none";
		arear.classList.toggle("codeContainer");
        rsta.classList.toggle("ta");
        run();
	});

	

	htmlBtn.addEventListener("click",function(){
	  hh.style.display = hh.style.display === "none" ? "block" : "none";
	  htmlta.style.display = htmlta.style.display === "none" ? "block" : "none";
      areah.classList.toggle("codeContainer");
      htmlta.classList.toggle("ta");

	});

	cssBtn.addEventListener("click",function(){
	  ch.style.display = ch.style.display === "none" ? "block" : "none";
	  cssta.style.display = cssta.style.display === "none" ? "block" : "none";
      areac.classList.toggle("codeContainer");
      cssta.classList.toggle("ta");

	});

	jsBtn.addEventListener("click",function(){
	  jh.style.display = jh.style.display === "none" ? "block" : "none";
	  jsta.style.display = jsta.style.display === "none" ? "block" : "none";
      areaj.classList.toggle("codeContainer");
      jsta.classList.toggle("ta");

	});

	var clearBtn = document.getElementById("clear");
	clearBtn.addEventListener("click",function(){
		htmlta.value = "";
		cssta.value = "";
		jsta.value = "";

		var htmlClear = "";
        rsta.contentWindow.document.open();
		rsta.contentWindow.document.write(htmlClear);
		rsta.contentWindow.document.close();
	})