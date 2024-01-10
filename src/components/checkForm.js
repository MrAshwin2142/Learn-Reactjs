const checkForm = (email, password) => {
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.)(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!emailCheck) {
        return "Email is Invailid";
    };
    if (!passwordCheck) return "Password is Invailid";

    return null;
}
export default checkForm;