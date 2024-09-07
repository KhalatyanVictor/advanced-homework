// 4. * Return array of students for whom the average evaluation is
// less than 40,
// Վերադարձնել այն ուսանողների ցուցակը որոնց միջին գնահատականը 40 ից
// ցածր է։

const evaluations = [
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 70
    },
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 60
    },
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 50
    },
    {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    
    score: 60
    },
    {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 50
    },
    {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 40
    },
    {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 45
    },
    {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 35
    },
    {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 3, // Unique identifier for each course
    
    courseName: "JS Level 1",
    score: 25
    }
    ];

function findAverage(arr) {
    let studentScores = {};

    arr.forEach(evaluation => {
        if (!studentScores[evaluation.studentId]) {
            studentScores[evaluation.studentId] = {
                studentName: evaluation.studentName,
                scores: []
            };
        }
        studentScores[evaluation.studentId].scores.push(evaluation.score);
    });

    let result = [];
    for (let studentId in studentScores) {
        let student = studentScores[studentId];
        let average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
        if (average < 40) {
            result.push({ studentId, studentName: student.studentName, averageScore: average });
        }
    }

    return result;
}
    
    console.log(findAverage(evaluations));
    

