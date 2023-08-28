let employees=[
    {id:1,name:"srinu", salary:45000},
    {id:2,name:"vamsi", salary:55000},
    {id:3,name:"siva", salary:65000},
    {id:4,name:"gopi", salary:165000}

]
function display_Employees(){
   
    //iterate array and construct table rows
    // using for-of 
    let rows=""
    for(emp of employees){
        rows=rows+`<tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.salary}</td>
                  </tr>`
    }
    document.getElementById('tdata').innerHTML=rows
}
