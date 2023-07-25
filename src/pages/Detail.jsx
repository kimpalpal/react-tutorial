import {React, useParams} from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import * as St from "../styled/DetailStyled"
import { useSelector } from "react-redux/es/hooks/useSelector";


export default function Detail() {
  const navigate = useNavigate();
  const lists = useSelector((state)=>state.내용들);
  const {id} = useParams();
  const list = lists.find((list) => list.id === id);

  return (
    <>
      <Header />
      <Container>
        <St.DetailH1>
          제목
        </St.DetailH1>
        <St.DetailDiv1>
          내용
        </St.DetailDiv1>
        <St.DetailDiv2>
          <St.DetailBtn1
            onClick={() => {
              navigate("/edit");
            }}
          >
            수정
          </St.DetailBtn1>
          <St.DetailBtn2
            onClick={() => {
              alert("삭제할까?");
            }}
          >
            삭제
          </St.DetailBtn2>
        </St.DetailDiv2>
      </Container>
    </>
  );
}
