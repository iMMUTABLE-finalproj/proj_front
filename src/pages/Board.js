import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AxiosFinal from "../api/AxiosFinal";
import ModalEmail from "./ModalEmail";
import { useNavigate } from "react-router-dom";
import { Axios } from "axios";

const Container = styled.div`
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const Inner = styled.div`
    margin-top: 100px;
    p {
        font-size: 20px;
        font-weight: bolder;
    }
    label {
        margin-right: 8px;
        font-size: 12px;
    }
    .item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .item2 {
        display: flex;
        align-items: start;
    }
    .txtTitle {
        width: 400px;
        height: 18px;
        resize: none;
    }
    .txtContent {
        width: 400px;
        height: 200px;
        resize: none;
    }
    .btn {
        margin-top: 40px;
        float: right;
    }
    button {
        background-color: white;
        border-style: none;
        &:hover{
            color: gray;
        }
    }
    .linkButton {
        margin-right: 10px;
        font-size: 13px;
        text-decoration: none;
        color: black;
        cursor: pointer;
        &:hover{
            color: gray;
        }
    }

    textarea::placeholder {
        font-size: 10px;
    }
`;
const Board = () => {

    const navigate = useNavigate();

    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");

    // 팝업
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState("");

    const [faq, setFaq] = useState([]);
    const faqId = window.localStorage.getItem("faqList")


     //모달 창 닫기 
    const closeModal = () =>{
        setModalOpen(false);
    };

    const handelTitle = (e) => {
        setInputTitle(e.target.value);
    };

    const handleContent = (e) => {
        setInputContent(e.target.value);
    };

    const onClickUpload = async() => {
        console.log("click");
            const response = await AxiosFinal.faqUpload(inputTitle, inputContent);
            if(response.data === true) {
                navigate("/FAQ");
            } else {
                setModalText("FAQ 업로드에 실패했습니다.")
                setModalOpen(true);

            }
    };

    useEffect(() => {
        const getFaqList = async() => {
            const response = await AxiosFinal.faqList(faqId);
            if(response.status === 200) setFaq(response.data);
            console.log(response.data);
        }
        getFaqList();
    },[])

    return(
        <Container>
            <Inner>
                <p>FAQ 글쓰기</p>
                <div className="item">
                    <label className="title">제목</label>
                    <textarea defaultValue={faq.faqTitle} value={faq.faqTitle} className="txtTitle" name="board" id="title" 
                    cols="10" rows="30" onChange={handelTitle} placeholder="제목을 입력하세요"></textarea>
                </div>
                <div className="item2">
                <label className="content">본문</label>
                    <textarea defaultValue={faq.faqContent} value={faq.faqContent} className="txtContent" name="board" id="content" 
                    cols="60" rows="10" onChange={handleContent} placeholder="내용을 입력하세요"></textarea>
                </div>
                
                <div className="btn">
                    <ModalEmail open={modalOpen} close={closeModal} header="오류">{modalText}</ModalEmail>
                    <Link to="/FAQ" className="linkButton">FAQ 목록으로 돌아가기</Link>
                    <button onClick={onClickUpload}>글쓰기</button>
                </div>
            </Inner>
        </Container>
    );
};

export default Board;