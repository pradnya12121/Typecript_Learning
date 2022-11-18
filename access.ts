class Student {
    private _userName: string;
 
    get name() : string {
     // format 
     return this._userName;
    }
    set name(name: string) {
     if(name == "codemind") {
         this._userName = name;
     }
     
    }
   display() {
     console.log(this._userName);
   }
 }
 
 var objstudent = new Student();
 objstudent.name = "Codemind";
 console.log(objstudent.name);
 