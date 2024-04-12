let students = [1, 4, -4, 8, -9];
let startOfClass = 3;
let studentsAtTime = 0;
let studentsOutOfTime = 0;

for (let i = 0; i < students.length; i++) {
    studentsGoingToClass = students[i];

    if (studentsGoingToClass <= 0) {
        studentsAtTime++;
    } else {
        studentsOutOfTime++;
    }
}

if (studentsAtTime >= startOfClass) {
    console.log("NO, Inicia la clase")
} else {
    console.log("YES, Se cancela la clase")
}