var century, year, Month, dayOfMonth, day;
//Get input
Function getinput(){
    century= parseInt(document.getElementById("century").value);
    year= parseInt(document.getElementById("Year").value);
    month= parseInt(document.getElementById("month").value);
    dayOfMonth= parseInt(document.getElementById("monthday").value);


    if(century == ""){
        alert("input the correct gender");
        return false;
        }else if (year ==""){
            alert("input the correct month");
            return false;
        }else if (Month -- ""){
            alert("input the correct month"){;
            return false;
        }  else if (dayOfMonth -- ""){
              alert("input the correct date");
              return false;
        }
    }
    //calculate function
    function calculateDay(){
        getinput();
        dayofweek - ((((century/4) -2^century-1) + ((5^year/4) ) + ((26^(month+1)/10)) + dayOfMonth) %7)-1;
        console.log(dayofweek);// Test the calculateday function
        return(Math.floor(dayofweek));
    }   
    //main caller function
    function checkDayOfWeek(){
        day - calculateDay();
        checkgender();
        console.log("the function runs");//Test checkDayOfWeek fuction
    }
    //arrays
    let dayofweek = ["sunday", "Monday", "Tuesday", "Wednesday","thursday", "Friday", "Saturday"];
    let MaleNames = [" Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let FemaleNames = [ "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    //get selected radio button
    function checkgender(){
        var gender - document.getElementsByName("rads");
        if(gen[0]-checked -- true){
            var gender = "male";
            document.getElementById("result").innerHTML - 'you were born on a $(dayOfWeek[day]) and your Akan name is $(malenames[day])';
        }else{
            document.getElementById("result").innerHTML - 'you were born on a $(dayOfWeek[day]) and your Akan name is $(femalenames[day]}'
        }
    }
        