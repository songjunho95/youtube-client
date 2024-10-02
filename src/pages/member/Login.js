import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";
import { login } from "../../api/member";

const Login = () => {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    id: "",
    password: "",
  });
  const submit = () => async () => {
    const result = await login(member);
    if (result.status === 200) {
      localStorage.setItem("token", result.data);
      alert("로그인 성공!");
      navigate("/");
    }
        } catch {
        alert("로그인 실패!");
    }
  };
  const signup = () => {
    navigate("/signup");
  };
  const google = () => {
    window.location.href="http://localhost:8080/oauth2/authorization/google";
  }
  return (
    <div className="flex items-center justify-center min-h-screenbg-gray-100">
      <div className="bg-white p-8 shadow-md max-w-md w-full"></div>
    </div>
  );
};
