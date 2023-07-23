

const validation = (input) => {
    let errors={};
   
    if(!input.name){
        errors.name="name required"
    }
    if(!input.email){
        errors.email="email required"
    }else if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email="email is invalid"
    }

    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if(!input.password){
        errors.password="password required"
    } else if (!input.password.match(lowerCase)) {
        errors.password = "Password should contains lowercase letters!";
     } else if (!input.password.match(upperCase)) {
        errors.password = "Password should contain uppercase letters!";
     } else if (!input.password.match(numbers)) {
        errors.password = "Password should contains numbers also!";
     } else if (input.password.length < 8) {
        errors.password = "Password length should be more than 8.";
     } 
  return errors;
}

export default validation
