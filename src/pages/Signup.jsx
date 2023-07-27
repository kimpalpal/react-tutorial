import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router";
import * as St from "../css/LoginStyled";
export default function Signup() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <St.LoginDiv>
          <form>
            <St.LoginInputDiv>
              <St.LoginInput placeholder="이메일" />
            </St.LoginInputDiv>
            <St.LoginInputDiv>
              <St.LoginInput placeholder="비밀번호" type="password" />
            </St.LoginInputDiv>
            <St.LoginInputDiv>
              <St.LoginInput placeholder="비밀번호확인" type="password" />
            </St.LoginInputDiv>
            <St.SignupBtnDiv>
              <St.SignupBtn>회원가입하기</St.SignupBtn>
            </St.SignupBtnDiv>
            <St.LoginBtnDiv
              style={{
                width: "360px",
              }}
            >
              <St.LoginBtn
                onClick={() => {
                  navigate("/login");
                }}
                style={{
                  width: "100%",
                  border: "none",
                  padding: "12px",
                  borderRadius: "6px",
                  backgroundColor: "#78C1F3",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                로그인하러 가기
              </St.LoginBtn>
            </St.LoginBtnDiv>
          </form>
        </St.LoginDiv>
      </Container>
    </>
  );
}
