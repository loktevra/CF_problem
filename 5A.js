var users = 0;
var mes = 0;
var result = 0;
var mass = [];
while (line = readline()) {
    line = line.split(":")
    if (line[0][0]=="+") {
        users++;
    }
    if (line[0][0]=="-") {
        users--;
    }
    if (line[1]!=undefined) {
        mes = line[1].length;
        result += mes*users;
    }
}

write(result);