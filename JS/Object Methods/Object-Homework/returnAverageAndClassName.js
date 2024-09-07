// 5. * Return array of courses including average evaluation for each
// course,
// Վերադարձնել բոլոր առարկաների ցուցակը եւ նրանց միջին քննական
// արդյունքը։

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
    let courseScores = {};

    arr.forEach(evaluation => {
        if (!courseScores[evaluation.courseId]) {
            courseScores[evaluation.courseId] = {
                courseName: evaluation.courseName,
                scores: []
            };
        }
        courseScores[evaluation.courseId].scores.push(evaluation.score);
    });

    let result = [];
    for (let courseId in courseScores) {
        let course = courseScores[courseId];
        let average = course.scores.reduce((sum, score) => sum + score, 0) / course.scores.length;
        result.push({ courseId, courseName: course.courseName, averageScore: average });
    }

    return result;
}

console.log(findAverage(evaluations));