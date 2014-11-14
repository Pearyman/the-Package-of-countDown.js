	/*
	time:2014/11/14
	author:NaN
	edit by chriswang

	*/
	function countDown(time){
		var futureTime,
			nowDate,
			countDowntime,
			newTime,
			box,
			day,
			hour,
			min,
			sec,
			formatDate;
		var body=document.getElementsByTagName("body")[0];
		var oDiv=document.createElement("div");
			oDiv.id="box";
			oDiv.style.width="800px";
			oDiv.style.height="60px";
			oDiv.style.background="#f90";
			oDiv.style.color="#fff";
			oDiv.style.textAlign="center";
			oDiv.style.fontSize="30px";
			oDiv.style.lineHeight="60px";
			oDiv.style.fontWeight="bold";
			body.appendChild(oDiv);
		var div=document.getElementsByTagName("div")[0];
			var span1=document.createElement("span");
			var span2=document.createElement("span");
			var span3=document.createElement("span");
			var span4=document.createElement("span");
			span1.id="day";
			span1.marginRight=10+"px";
			span2.id="hour";
			span3.id="min";
			span4.id="sec";
		    div.appendChild(span1);
		    div.appendChild(span2);
		    div.appendChild(span3);
		    div.appendChild(span4);	

			box=document.getElementById("box");

			dayBox=document.getElementById("day");
			hourBox=document.getElementById("hour");
			minBox=document.getElementById("min");
			secBox=document.getElementById("sec");
			//minsecBox=document.getElementById("minsec");
			futureTime = +new Date(time); 
			console.log(futureTime);

			if(futureTime<nowDate){
				alert("你输入的日期有错误");
			}else{
				formatDate = function(o) {
					return ('' + o).length === 1 ? '0' + o : o;
				}
				setInterval(function(){
					// make lots of errors when -1000 because of single-thread js
					// particularly in page which has lots of Interval 
					nowDate = +new Date;
					newTime = ~~( (futureTime - nowDate) / 1000 );

					sec     = formatDate( newTime % 60 );
					newTime = ~~(newTime / 60);

					min     = formatDate( newTime % 60 );
					newTime = ~~(newTime / 60);

					hour    = newTime % 24;
					newTime = ~~(newTime / 24);

					day     = newTime;

					dayBox.innerHTML = day + 'd  ';
					hourBox.innerHTML = hour + ':';
					minBox.innerHTML = min + ':';
					secBox.innerHTML = sec;
				}, 1000);
				


			}
			
		
		
	};

