import { useRef, useState } from "react";
import checkForm from "./checkForm";

const FormValidation = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const validateForm = () => {
        const msg = checkForm(email.current.value, password.current.value);
        setErrorMsg(msg);
    }
    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div className="w-10/12 h-full">
            <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col  p-12 text-white bg-black bg-opacity-70 justify-center rounded-lg">
                <h1 className="font-bold text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} className="mx-auto my-2 p-2 w-96 bg-gray-800" placeholder="Full Name" type="text" />}
                <input ref={email} className=" mx-auto my-2 p-2 w-96 bg-gray-800" placeholder="Email" type="email" />
                <input ref={password} className="mx-auto my-2 p-2 w-96 bg-gray-800" placeholder="Password" type="password" />
                <p className="text-red-600" >{errorMsg}</p>
                <button className="bg-red-600 mx-auto my-4 p-2 font-bold w-96  rounded-lg" onClick={validateForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer" onClick={toggleForm}>
                    {isSignInForm ? "New User ? Sign Up Now" : "Already User? Sign In Now"}
                </p>
            </form>
        </div>
    );
}
export default FormValidation;