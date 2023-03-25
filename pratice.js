let student = {
    
    firstName: "Niyi",
    lastName: "Folarin",
    membership: true,
    sex: "male",
    email: "gbemineeyi@yahoo.com",
    grades: [ {
      year1: {firstSemester: 
                     {
                      CSS: "C",
                      HTML: "A",
                      JS: "B"
                     },
                      secondSemester:
                      {
                        HTML: "C",
                        CSS: "A",
                        JS: "B"
                      }
                     }
  
    }, {year2: {
                firstSemester: 
                {
                  python: "A",
                  C: "B",
                  java: "C"
                },
                secondSemester: 
                 {
                  python: "C",
                  C: "B",
                  java: "C"
                  }
               }
       
      },"moyo,", true ]
    
  }
  
  console.log(student.grades[0].year1)
  console.log(student.grades[1].year2)
  console.log(student.grades[1].year2.firstSemester.java)
  
  student.grades[1].year2.firstSemester.java = "A"
  
  console.log(student.grades[1].year2.firstSemester.java)


  