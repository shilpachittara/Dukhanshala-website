class Validator {

    validateContact(inputData) {
    let errorMsg = "";
    const re = "/^[6-9][0-9]{9}$";
      if(!inputData) {
        errorMsg +="Please enter your contact number.\n"
      }
      else if(inputData.match(re))
        errorMsg +="Please enter correct contact number.\n"
      
      if(errorMsg.length === 0){
        return true;
      } else {
        alert(errorMsg);
        return false;
      }
    }
  }
 
  export default Validator;