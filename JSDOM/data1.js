let employees=[
    {id:1,name:"srinu", salary:45000},
    {id:2,name:"vamsi", salary:55000},
    {id:3,name:"siva", salary:65000},
    {id:4,name:"gopi", salary:165000}

]
function display_Employees(){
    //iterate array and construct table rows
    // using while loop iterating function
    let rows=""
    let i=0
    while(i<=employees.length-1){
        rows = rows+`<tr>
                        <td>${employees[i].id}</td>
                        <td>${employees[i].name}</td>
                        <td>${employees[i].salary}</td>
                     </tr>`
        i++
    }
    document.getElementById('tdata').innerHTML=rows
}