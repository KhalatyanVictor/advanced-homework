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
        let courseName1 = "";
        let courseName2 = "";
        let courseName3 = "";
        let acc1 = 0;
        let acc2 = 0;
        let acc3 = 0;
        let length1 = 0;
        let length2 = 0;
        let length3 = 0;
    
        for (const studentArr of students) {
            studentArr.filter(student1 => {
                if (student1.studentId === 1) {
                    courseName1 = student1.courseName;
                    acc1 += student1.score;
                    length1++;
                }
            });
            studentArr.filter(student2 => {
                if (student2.studentId === 2) {
                    courseName2 = student2.courseName;
                    acc2 += student2.score;
                    length2++;
                }
            });
            studentArr.filter(student3 => {
                if (student3.studentId === 3) {
                    courseName3 = student3.courseName;
                    acc3 += student3.score;
                    length3++;
                }
            });
        }
    
        acc1 = acc1 / length1;
        acc2 = acc2 / length2; 
        acc3 = acc3 / length3; 

        result.push({
            'Course Name': courseName1,
            'Average Score': acc1
        }, {
            'Course Name': courseName2,
            'Average Score': acc2
        }, {
            'Course Name': courseName3,
            'Average Score': acc3
        });
    
        return result;
    }
    
    console.log(findAverage(evaluations));
    

