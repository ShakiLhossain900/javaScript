//student er details store korte hobe using objet
////////Object/////////
 

// var student1 = {
// name:"Gazi Shakil",
// age: 22,
// cgpa:3.00,
// lang: ["bangla", "malaya", "Hindi", "English"]
// }

// var student1 = {
//     name:"Gazi Shakil",
//     age: 22,
//     cgpa:3.00,
//     lang: ["bangla", "malaya", "Hindi", "English"]
//     }

//     var student1 = {
// name:"Gazi Shakil",
// age: 22,
// cgpa:3.00,
// lang: ["bangla", "malaya", "Hindi", "English"]
// }
// console.log(student1.cgpa);




                 ////adding constructor to store student details using object
                //  function Student (name,age,cgpa,lang){
                //    this.name=name;
                //    this.age=age;
                //    this.cgpa=cgpa;
                //    this.lang=lang;
                //  }
                //  var student1 = new Student("Gazi Shakil", 22, 3.20, ["bangla", "malaya", "Hindi", "English"]);
                //  var student2 = new Student("Shima akter", 21, 3.40, ["bangla", "Hindi", "English"]);
                //  var student3 = new Student("Shoriful Islam", 23, 3.20, ["bangla", "English"]);

                //  console.log(student1.name);
                //  console.log(student1.age);
                //  console.log(student1.cgpa);
                //  console.log(student1.lang);
                    


                 ////adding constructor function use kore print korte easy way
                 function Student (name,age,cgpa,lang){
                    this.name=name;
                    this.age=age;
                    this.cgpa=cgpa;
                    this.lang=lang;

                      this.print =function(){
                        console.log(this.name);
                        console.log(this.age);
                        console.log(this.cgpa);
                        console.log(this.lang);
                      }
                  }
                  var student1 = new Student("Gazi Shakil", 22, 3.20, ["bangla", "malaya", "Hindi", "English"]);
                  var student2 = new Student("Shima akter", 21, 3.40, ["bangla", "Hindi", "English"]);
                  var student3 = new Student("Shoriful Islam", 23, 3.20, ["bangla", "English"]);
 
                  student1.print();
                  student2.print();
                  student3.print();


 

                 