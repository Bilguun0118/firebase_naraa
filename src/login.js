import "./App.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { async } from "@firebase/util";

export const Login = () => {
  const [value, setValue] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const recaptchaVerifier = useRef();
  const confirmationResult = useRef();

  useEffect(() => {
    const auth = getAuth();
    recaptchaVerifier.current = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
  }, []);

  const onc = (e) => {
    setValue(e.target.value);
  };
  const onclick = async () => {
    const auth = getAuth();
    const phoneNumber = value;
    console.log(auth, "+976" + phoneNumber, confirmationResult.current);
    confirmationResult.current = await signInWithPhoneNumber(
      auth,
      "+976" + phoneNumber,
      recaptchaVerifier.current
    );

    setValue("");
    setIsSubmit(true);
  };

  const onClickCheckCode = async () => {
    const code = value;

    await confirmationResult.current.confirm(code);
    let navigate = useNavigate();
    navigate('home')
    console.log('this');
    alert('logged in');
  };

  return (
    <div>
      {isSubmit ? (
        <div>
          <input type="number" value={value} onChange={onc} />
          <button onClick={onClickCheckCode}>sent</button>
        </div>
      ) : (
        <div>
          <div id="recaptcha-container"></div>
          <input type="number" value={value} onChange={onc} />
          <button onClick={onclick}>submit</button>
        </div>
      )}
    </div>
  );
};