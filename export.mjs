Mehran: class Student{
    constructor(name,matricno,major){
        this.name = name;
        this.matricno=matricno;
        this.major=major;
    }
    get Name(){
        return this.name;
    }
    
    set Name(name){
        this.name = name;
    }
    get Matricno(){
        return this.matricno;
    }
    
    set Matricno(matricno){
        this.matric = matricno;
    }
    
    get Major(){
        return this.major;
    }
    
    set Major(major){
        this.major = major;
    }
    

    
    display=()=>{
        
        console.log(`Name: ${this.name}`);
        console.log(`Matric No: ${this.matricno}`);
        console.log(`Major: ${this.major}`);
    }

    
    }


export{Student};