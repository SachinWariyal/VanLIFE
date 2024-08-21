export const validateusername = (username) => {
    return username.length >= 5;
}
export const validatefirstname= (firstname) => {
    return firstname.length > 3 ;
}
export const validatelastname = (lastname) => {
    return lastname.length > 3;
}
export const validatepassword = (password) => {
    return password.length >=8 ;
}
export const validateconfirmpassword= (confirmpassword, password) => {
    return password === confirmpassword;
}
export const validateemail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
export const validatecontactnumber = (contactnumber) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(contactnumber));
}