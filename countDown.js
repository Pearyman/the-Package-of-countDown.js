	/*
	time:2014/10/22
	author:NaN
	content:

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
			sec;
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
			futureTime = (new Date(time)).getTime(); 
			console.log(futureTime);
			nowDate=new Date().getTime();
			console.log(nowDate);

			if(futureTime<nowDate){
				alert("你输入的日期有错误");
			}else{
				countDowntime=futureTime-nowDate;
				newTime=new Date(countDowntime);
				//.log(countDowntime);
				
				setInterval(function(){
					countDowntime=countDowntime-1000;
					day=parseInt(countDowntime/1000/3600/24);
					hour=parseInt((countDowntime-(day*24*3600*1000))/3600/1000);
					min=parseInt((countDowntime-day*24*3600*1000-hour*3600*1000)/60/1000);
					sec=parseInt((countDowntime-day*24*3600*1000-hour*3600*1000-min*60*1000)/1000);
					
					// console.log(day);
					dayBox.innerHTML=parseInt(countDowntime/1000/3600/24)+"d";

					hourBox.innerHTML=parseInt((countDowntime-(day*24*3600*1000))/3600/1000)+"h";
					minBox.innerHTML=parseInt((countDowntime-day*24*3600*1000-hour*3600*1000)/60/1000)+"min";
					secBox.innerHTML=parseInt((countDowntime-day*24*3600*1000-hour*3600*1000-min*60*1000)/1000)+"s";
					//minsecBox.innerHTML=parseInt(countDowntime-day*24*3600*1000-hour*3600*1000-min*60*1000-sec*1000)+"ms";
					//document.write(countDowntime);
					if(countDowntime<=0){
						dayBox.innerHTML="00";
						hourBox.innerHTML="00";
						minBox.innerHTML="00";
						secBox.innerHTML="00";
						clearInterval();
					}

					if(day<9){
						dayBox.innerHTML="0"+parseInt(countDowntime/1000/3600/24)+"d";
							
					}
					if(hour<9){
						hourBox.innerHTML="0"+parseInt((countDowntime-(day*24*3600*1000))/3600/1000)+"h";	
					}
					if(min<9){
						minBox.innerHTML="0"+parseInt((countDowntime-day*24*3600*1000-hour*3600*1000)/60/1000)+"min";	
					}
					if(sec<9){
						secBox.innerHTML="0"+parseInt((countDowntime-day*24*3600*1000-hour*3600*1000-min*60*1000)/1000)+"s";
					}
				},1000)
				


			}
			
		
		
	};

