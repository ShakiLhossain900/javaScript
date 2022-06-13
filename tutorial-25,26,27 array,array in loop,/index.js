//work 1
// var name1, name2, name3, name4, name5;
// name1="shakil";
// name2="shima ";
// name3="nafisa";
// name4="noushin";
// name5="rinki";
// console.log(name4);




//work 2 array program 

// var names= new Array();
// names[0]="Shakil";
// names[1]="Noushin";
// names[2]="Nafisa";
// names[3]="Nourin";
// names[4]="sika";
// names[5]="rima";
// names[6]="shompa";
// names[7]="newone";
// names[8]="hasim";
// names[9]="halim";
// names[10]="Shakil";
// names[11]="Noushin";
// names[12]="Nafisa";
// names[13]="Nourin";
// names[14]="sika";
// names[15]="rima";
// names[16]="shompa";
// names[17]="newone";
// names[18]="hasim";
// names[19]="halim";
// console.log(names.length);
// console.log(names);




//array program 3 

// var names= ["shakil","shima", "shifat", "rima", "nourin" ,"faysal"]
// console.log(names.length);
// console.log(names);
// console.log(names[4])


//push add noton array last theke jog kora jay
// var names= ["shakil","shima", "shifat", "rima", "nourin" ,"faysal"]
// console.log(names.length);
// names.push("rina");
// names.push("moon");
// names.push("emon");
// console.log(names.length);
// console.log(names[6]);

// //pop korle last er name or array ke remove kore fele 
//  names.pop();
//  console.log(names);

//  names.pop();
//  console.log(names);

//  names.pop();
//  console.log(names);

//  names.pop();
//  console.log(names);





//arry program 5 concat korle akta array shathe arekta array jog kora jay

// var country1 =[ "bangladesh", "india"];
// var country2 =[" pakistan", "napal"];

// country=country1.concat(country2);
// console.log(country);




                    //////////array in loop////////////////


                    //loop diye first program  // all array er velue golo print korbe
                    // var num = [10,20,30,40,50];
                    // for(var i=0; i<5; i++)
                    // {
                    //     console.log(num[i]);

                    // }



                    //2nd program 
                    // var num = [10,20,30,40,50];
                    // sum=0;
                    // for(var i=0; i<5; i++)
                    // {
                    //     console.log(num[i]);
                    //    sum=sum+num[i];
                    // }
                    // console.log("sum =" + sum)




                    //3rd program
            
                    // var num=new Array();
                    // for(var i=0; i<5; i++){
                    //     num[i]= parseInt(prompt("enter number : "));
                    // }
                    // sum=0;
                    // for(var i=0; i<5; i++)
                    // {
                    //     console.log(num[i]);
                    //    sum=sum+num[i];
                    // }
                    // console.log("sum =" + sum)





                   /////////// ////tutorial 27 array related method /////




                               ///shift er use shift pop er oposide kaj kore , pop ses er element remove kore ar shift starting array element remove kore
                            //    var names =["shakil", "nafisa", "rima", "anonna"];
                            //      console.log(names)
                               //shift opposite of pop
                                 //names.shift();
                                //console.log(names)
                                //unshift opposite of push
                                //names.unshift("wife");
                                //console.log(names)
                                
                                //splice er modde element er position pothome bola jay than ,romove korte chaile kroa jay ,add kora jay positon moto 
                                // names.splice(2,1,"korim","rohim");
                                // console.log(names);

                                //removing element using splice
                                // names.splice(1,2);
                               // console.log(names);

                               //slice 
                            //    var newArray=names.slice(1);
                            //    console.log(newArray);
                            //    console.log(names);

                            //sort array word er letter deke sajay /// reverse korle abar olta dik theke dekhabe //sort only alpabet niye kaj kore number na
                        //     var sortName= names.sort();
                        //    var nam= names.reverse();
                        //     console.log(sortName);




                        ///number sorting 
                        var numbers=[20,2,40,10,4,29,1];
                        numbers.sort(function(a,b){
                        //    return a-b;
                        return b-a;
                        });
                        console.log(numbers)