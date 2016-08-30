var line = readline().split(' ');

function findS(a,b,c) {
	a = parseInt(a,10)
	b = parseInt(b,10)
	c = parseInt(c,10)
	var p = (a+b+c)/2;
	var S = Math.sqrt(p*(p-a)*(p-b)*(p-c))
	return S;
}

function find(){
	if(findS(line[0],line[1],line[2])>0) return 'TRIANGLE'
	if(findS(line[1],line[2],line[3])>0) return 'TRIANGLE'
	if(findS(line[0],line[2],line[3])>0) return 'TRIANGLE'
	if(findS(line[0],line[1],line[3])>0) return 'TRIANGLE'
	if(findS(line[0],line[1],line[2])==0) return 'SEGMENT'
	if(findS(line[1],line[2],line[3])==0) return 'SEGMENT'
	if(findS(line[0],line[2],line[3])==0) return 'SEGMENT'
	if(findS(line[0],line[1],line[3])==0) return 'SEGMENT'
	return 'IMPOSSIBLE'
}
write(find());