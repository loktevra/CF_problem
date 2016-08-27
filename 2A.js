var step = readline();
var gamers = [];
var mass = []

for(var i=0;i<step;i++){
	//заполняем массив ходов
	mass[i] = readline().split(" ");
	addScore(mass[i][0],mass[i][1]);
}

//запоняем турнирную таблицу и сортируем её, на первом месте те кто больщше набрал
function addScore(name,score) {
	var index = gamers.findIndex(function(el,index,arr){
		return el.name == name;
	})
	if(index == -1) {
		gamers.push({name:name,score:parseInt(score,10)});
	} else {
		gamers[index].score += parseInt(score,10);
	}
	gamers.sort(function(a,b){
		if(a.score<b.score) return 1;
		if(a.score>b.score) return -1;
		if(a.score==b.score) return 0;
	})
}

//находим максимум
var maxScore = gamers[0].score;

//если победителей несколько то выбираем того из них, кто первый за всю игру набрал максимум
if(gamers[0].score == gamers[1].score) {
	//находим полный список всех набравших максимум
	var winners = gamers.filter(function(el){
		return el.score == maxScore;
	})

	//учитиываем только ходы тех кто набрал максимум, фильтруем массив ходов
	mass = mass.filter(function(el,index,arr){
		var ind = winners.findIndex(function(el2,inde2x,arr2){
			return el2.name == el[0];
		})
		if( ind > -1 ) {
			return true
		}else{
			return false
		}
	})

	var gamers2 = [];


	//заполняем турнирную таблицу до тех пор, пока один из них не наберет максимум, тот и победитель
	for(var i=0;i<mass.length;i++){
		var index = gamers2.findIndex(function(el,index,arr){
			return el.name == mass[i][0];
		})
		if(index == -1) {
			gamers2.push({name:mass[i][0],score:parseInt(mass[i][1],10)});
			if(gamers2[gamers2.length-1].score>= maxScore) {
				write(gamers2[gamers2.length-1].name);
				break;
			}
		} else {
			gamers2[index].score += parseInt(mass[i][1],10);
			if(gamers2[index].score>= maxScore) {
				write(gamers2[index].name);
				break;
			}
		}	
	}
} else {
	write(gamers[0].name);
}
