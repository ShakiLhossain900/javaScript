//break keyword er use

// for(var i=1; i<=100; i++)
// {
//     if(i==50){
//         break;
//     }
//     document.write(" "+ i);
// }


//continue for 1 to 100 if i==10 so 10 can't print
// for(var i=1; i<=100; i++){
//     if(i==10)
//     {
//         continue;
//     }
//     document.write(" " + i)
// }

   for(var i=1; i<=100; i++){
        if(i%2!=0)
        {
            continue;
        }
        document.write(" " + i)
    }


