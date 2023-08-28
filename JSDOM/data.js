let users=[{id:1,name:srinivas,sal:55000},
           {id:2,name:gopi,sal:65000},
           {id:3,name:vamsi,sal:75000}]

function get_details(){
    // alert("Testing")
    let rows=" "
    for(user of users){
        rows=rows+ `<tr>
                     <td>${user.id}</td>
                     <td>${user.name}</td>
                     <td>${user.sal}</td>
        
        
                 </tr>`


    }




    document.getElementById("abc").innerHTML=rows
}
