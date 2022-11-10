var emp = {
    name: "Dnyanesh",
    score: 250
}


for(var e in emp)
{
   console.log(e);
   console.log(emp[e]);
}


function display(id:number, name:string, role:string ='Guest user') 
{
    console.log("Id", id);
    console.log("Name", name);
    if(role!= undefined)
    {
        console.log("Role", role);
    }
    
}

display(1, "Dnyanesh", "Admin");
display(1, "Dnyanesh");
