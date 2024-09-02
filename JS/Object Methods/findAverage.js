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
        let result = [];
        const ID = Object.groupBy(arr, (student) => student.studentId);
        let studentsObject = Object.values(ID);
        let students = Object.values(studentsObject);
        let acc1 = 0;
        let acc2 = 0;
        let acc3 = 0;
        let length1 = 0;
        let length2 = 0;
        let length3 = 0;
    
        for (const studentArr of students) {
            studentArr.filter(student1 => {
                if (student1.studentId === 1) {
                    acc1 += student1.score;
                    length1++;
                }
            });
            studentArr.filter(student2 => {
                if (student2.studentId === 2) {
                    acc2 += student2.score;
                    length2++;
                }
            });
            studentArr.filter(student3 => {
                if (student3.studentId === 3) {
                    acc3 += student3.score;
                    length3++;
                }
            });
        }
    
        acc1 = acc1 / length1;
        acc2 = acc2 / length2; 
        acc3 = acc3 / length3; 

        if (acc1 < 40) {
            const student1 = arr.find(e => e.studentId === 1);
            if (student1) {
                result.push({
                    studentId: student1.studentId,
                    studentName: student1.studentName
                });
            }
        }
        if (acc2 < 40) {
            const student2 = arr.find(e => e.studentId === 2);
            if (student2) {
                result.push({
                    studentId: student2.studentId,
                    studentName: student2.studentName
                });
            }
        }
        if (acc3 < 40) {
            const student3 = arr.find(e => e.studentId === 3);
            if (student3) {
                result.push({
                    studentId: student3.studentId,
                    studentName: student3.studentName
                });
            }
        }
    
        return result;
    }
    
    console.log(findAverage(evaluations));
    

