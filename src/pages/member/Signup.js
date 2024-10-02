import Input from "../../components/Inputs";
import { Signup } from "../../api/member";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate("");
  const [member, setMember] = useState({
    id: "",
    pasword: "",
    email: "",
    phone: "",
  });

  const submit = async () => {
    console.log(id, password, email, phone);
    // 회원가입 로직 구현
    const result = await Signup({ member });
    if (result.status === 200) {
      alert("회원가입 성공!");
      navigate("/login");
    }
  };
  return (
    <div className="flex items-center justify-centermin-h-screen bg-gray-100">
      <div>
        <Input
          label="아이디"
          type="text"
          placeholder="아이디를입력해주세요"
          value={member.id}
          change={(e) => setMember({ ...member, id: e.target.value })}
        />
        <Input
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={member.password}
          change={(e) => setMeber({ ...member, password: e.target.value })}
        />
        <Input
          labe="이메일"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={member.email}
          change={(e) => setMember({ ...member, email: e.target.value })}
        />
        <Input
          label="전화번호"
          type="tel"
          placeholder="전화번호를 입력해주세요"
          value={member.phone}
          change={(e) => setMember({ ...member, phone: e.target.value })}
        />
        <button type="button" className=""></button>
      </div>
    </div>
  );
};
