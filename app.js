//Завдання 1-2

function count(expression){
    function getValues(expression){
        let values = [...expression]
        return values;
    }
        let values = getValues(expression);
        switch (values[1]) {
            case '+':
            return  showResult(sum(values));
            case '-':
            return  showResult(subtract(values));
            case '*':
            return  showResult(multiply(values));
            case '/':
            return showResult(divide(values))
        }
        function showResult(value){
            return value
        }
    }
    function sum(values) {
        return +(values[0]) + +(values[2]);
        }
    function subtract(values) {
        return values[0] - values[2];
    }
    function multiply(values) {
        return values[0] * values[2];
    }
    function divide(values) {
        try{
            if (values[2]==0){
                throw new Error("Can't divide by 0")
            } else
            return values[0] / values[2];
        } catch(error){
            console.log(error.message);
            console.log(values[2]);
        }
    }
        
    // Завдання 3   
     
    function count(expression){
        function getValues(expression){
          let values = [...expression]
            return values;
        }
        let values;
        try{
        values = Values(expression);//line1
        }catch(error){
                if(error.message === 'not iterable' ){values = [0, '+', 0];}
                else {
                    throw new Error('Please write in string format')
                }
        }
        switch (values[1]) {
            case '+':
            return  showResult(sum(values));
            case '-':
            return  showResult(subtract(values));
            case '*':
            return  showResult(multiply(values));
            case '/':
            return showResult(divide(values))
        }
        function showResult(value){
            return value
        }
    }
    function sum(values) {
            return +values[0] + +values[2];
        }
    function subtract(values) {
        return +values[0] - +values[2];
    }
    function multiply(values) {
        return +values[0] * +values[2];
    }
    function divide(values) {
        return +values[0] / +values[2];
    }
    try{
        count(5*2)
    }catch(error){
        console.log(error.message);
    }
 //line2
 
 //Завдання 4
 function MakeUsers(name, age){
    this.name = name;
    this.age = age;
}
let user = new MakeUsers('Mike');//*Forgot to pass the second parameter
function showMovie (user){
    try{
        if (user.age == undefined){
            throw new SyntaxError('Age not determined');
        }
        if(user.age >= 18){//undefined
            return alert('You can watch this movie');
        } else {
            return alert('Sorry, you are too young');
    }
    } catch(error){
        alert(error.message)
            user.age = +prompt('age')
            if(user.age >= 18){//undefined
                return alert('You can watch this movie');
            } else  {
                alert('Sorry, you are too young');
            }
    } 
}
        showMovie(user); 


        