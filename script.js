// 1.  Write a javascript function to add rows to a table.
// function insert_Row(){
//     var x=document.getElementById('sampleTable').insertRow(0);
//     var y=x.insertCell(0);
//     var z=x.insertCell(1);

//     y.innerHTML="NewCell1";
//     z.innerHTML="NewCell2";
// }

// 2.write a javascript function that accepts a row,column (to identify a particular cell) and a 
//  string to update the cell's contents.


// function changeContent(){
//      rn=window.prompt("input the Row number(0,1,2)","0");
//      cn=window.prompt("input the Column number(0,1)","0");

//     content =window.prompt("input the cell content");
//     var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;

//     x[parseInt(cn,10)].innerHTML=content;
// }


// 3.write a javascript function to create a table , accept row and column numbers , and 
//   input row-column numbers as cell content (e.g. Row-0,Column-0).


// function CreateTable(){
//     rn=window.prompt("Input number of rows",1);
//     cn=window.prompt("Input number of columns",1);

//     for(var r=0;r<parseInt(rn,10);r++){
//         var x=document.getElementById('myTable').insertRow(r);
//         for(var c=0;c<parseInt(cn,10);c++)
//         {
//             var y=x.insertCell(c);
//             y.innerHTML="Row-"+r+"column-"+c;
//         }
//     }
// }



// 4.