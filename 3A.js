var S = readline();
var T = readline();
var minimum = -1;
var steps = [];
var L="L",R="R",U="U",D="D";

var S1 = S.charCodeAt(0);
var T1 = T.charCodeAt(0);
var S2 = parseInt(S[1]);
var T2 = parseInt(T[1]);

while (S1!=T1 || S2 != T2){
	minimum++;
	steps[minimum]="";
	if(S1>T1){
		steps[minimum]+=L;
		S1--;
	}
	if(S1<T1){
		steps[minimum]+=R;
		S1++;
	}
	if(S2>T2){
		steps[minimum]+=D;
		S2--;
	}
	if(S2<T2){
		steps[minimum]+=U;
		S2++;
	}
}

minimum++;
write(minimum);
write("\n");
for(var i=0;i<steps.length;i++){
	write(steps[i])
	write("\n");
}