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

    validateAddress(inputData) {
      let errorMsg = "";
      const re = "/^([a-zA-Z]){5}$";
      const pin = "/^[0-9]{6}?$/";
        if(!inputData.name) {
          errorMsg +="Please enter valid name.\n"
        }
        else if(inputData.name.match(re)){
          errorMsg +="Please enter valid name.\n"
        }
        if(!inputData.address) {
          errorMsg +="Please enter valid address.\n"
        }
        else if(inputData.address.match(re)){
          errorMsg +="Please enter valid address.\n"
        }
        if(!inputData.city) {
          errorMsg +="Please enter valid city.\n"
        }
        else if(inputData.city.match(re)){
          errorMsg +="Please enter valid city.\n"
        }
        if(!inputData.pincode) {
          errorMsg +="Please enter valid pincode.\n"
        }
        else if(inputData.pincode.match(pin)){
          errorMsg +="Please enter valid pincode.\n"
        }
        if(!inputData.bag) {
          errorMsg +="Please select product.\n"
        }
        if(errorMsg.length === 0){
          return true;
        } else {
          alert(errorMsg);
          return false;
        }
      }
  }
 
  export default Validator;