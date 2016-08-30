var table = [];
var result = 0;

for (var i=0;i<8;i++){
	table[i]=readline();
	if(table[i]=="BBBBBBBB") result++; 
}
for(var x=0;x<8;x++){
	var row = "";
	for (var i=0;i<8;i++){
		row+=table[i][x];
	}	
	if(row=="BBBBBBBB") result++; 
}

if(result==16) result=8;
write(result);