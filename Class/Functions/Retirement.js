// JavaScript Document
//Input
	// bal->Initial Balance $'s
	// intR-> Interest Rate %/year
	// nPer-> Number of compounding periods (Years)
	// mDep-> monthly Deposits accrued till end of year
	//Output
	// retirement->$'s
	function retire(bal,intR,nPer,mDep){
		var retirement = bal;
		for (var year=1;year<=nPer;year++){
		retirement*=(1+intR/100);
		retirement+=(mDep*12);
		retirement=retirement.tofixed(2);
		}
		return retirement;
	}
//Input
	// bal->Initial Balance $'s
	// intR-> Interest Rate %/year
	// nPer-> Number of compounding periods (Years)
	// mDep-> monthly Deposits accrued till end of year
	//Output
	// retirement in an array->$'s
	function retireArray (bal,intR,nPer,mDep){
		var retirement = [];
		retirement[0]= bal;;
		for (var year=1;year<=nPer;year++){
		retirement[year]=retirement[year-1]*(1+intR/100);
		retirement[year]+=(mDep*12);
		retirement[year]=retirement[year].tofixed(2);
		}
		return retirement;
	}
	
	//display table function
	//inputs
	// heading-> array with column names
	// data-> array with data
	//output
	//str->formatted table
	function display(heading,fata){
		var str="";
		str+='<table width="200" border="1">';
		str+="<tr>";
		for (var col=0;col<heading.length;col++){
    	str+="<th>"+heading[col]+"</th>";
		}
		str+="</tr>";
		for (var year=1;year<=data.length;year++){
		str+="<tr>";
		str+=("<td>"+year+"</td>");
		str+=("<td>"+data[year]+"</td>");
		str+="</tr>";
		}
		str+="</table>"
		return str;
	}