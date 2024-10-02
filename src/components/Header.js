import { FaBars } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  a {
    padding: 20px 10px;
  }

  .header-center {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  input {
    display: none;
  }

  .header-end {
    display: flex;
    margin-right: 20px;
  }

  button {
    background: none;
    border: none;
    font-size: 20px;
  }

  /* 반응형 */
  @media screen and (min-width: 665px) {
    .header-center {
      justify-content: center;
    }
    .header-center input {
      display: block;
      padding: 10px 20px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      border: 1px solid #ddd;
      width: 30%;
      max-width: 500px;
    }
    .header-center button {
      border: 1px solid #ddd;
      border-left: none;
      padding: 6px 12px;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <header>
        <div className="header-start">
          <FaBars />{" "}
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        <div className="header-center">
          <input type="text" placeholder="검색" />
          <button type="button">
            <FaMagnifyingGlass />
          </button>
        </div>
        <div className="header-end">
          {token === null ? (
            <button type="button" onclick="location.href='/login'">
              로그인
            </button>
          ) : (
            <button></button>
          )}
        </div>
      </header>
    </StyledHeader>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  // 처음 불러오는 시점 - 로그인 여부 체크
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
};

export default Header;
