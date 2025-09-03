import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios"; //axios for data fetching
import { useUserStore } from "../store/useUserStore.js";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.js";

const value = useContext(UserContext);
    const login = useGoogleLogin({
        onSuccess: tokenResponse => getUserInfo(tokenResponse.access_token),
        onError: error => console.log(error),
    });

    const getUserInfo = (token) => {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: `application/json`
            }
        })
        .then((res) => {
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            value.setOpen(false);
        })
        .catch((err) => console.log(err));
    };

export { login };