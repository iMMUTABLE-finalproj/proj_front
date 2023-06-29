import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SaleDate from "./SaleDate";
import OrderCheck from "./OrderCheck";
import ItemUpload from "./ItemUpload";
import Inventory from "./Inventory";
import Qna from "./Qna";
import CustomerMan from "./CustomerMan";
import AxiosFinal from "../api/AxiosFinal";
import { UserContext } from "../context/UserInfo";
import ChatList from "./ChatList";


const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
`
const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 175px;
    margin-top: 5px;
    .headTop{
        width: 98%;
        height: 20px;
        display: flex ;
        justify-content: space-between;
        align-items: center;
        button{
            font-size: 12px;
            border: none;
            background-color: white;
            &:hover{color: #CCC;}}
        a{
            font-size: 12px;
            text-decoration: none;
            color: black;
            &:hover{color: #CCC;}}
    }
    .headFooter{
        margin-top:5px;
        width: 98%;
        height: 120px;
        display: flex;
        border-top:  1px solid #CCC;
        .newOrder,.shipTrack{
            width: 33%;
            height: 100%;
            margin-right: 3px;
            font-size: 15px;
            display: flex;
            justify-content: center;
            align-items: center;       
        }
        .customerAlert{
            width: 33%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;           
        }
        span{
            color: red;
            font-size:20px;
            font-weight: bolder;
            &:hover{color: #CCC;}}
    }
`
const Sidemenu = [
    //버튼을 카테고리로 분류하여 값을 쉽게 가져오기 위해 name으로 설정한다.
    { name : "saleDate"},
    { name : "orderCheck"},    
    { name : "itemUpload"},
    { name : "inventory"},
    { name : "qna"},
    { name : "customer Management"},
    { name : "chat list"}
  ]

const MainBody = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 100%;
    margin-bottom: 10px;
    .sideMenu{
        width: 200px;
        height: 100%;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .body{
        width: 100%;
        height: 100%;
        border-top: 1px solid #CCC;        
    }
`
const SideBustton=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-top: 1px solid #CCC;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    cursor: pointer;
    &:hover{color: #CCC;}

`
const AdminPage=()=>{
    
    const context = useContext(UserContext);
    //어드민페이지에서 사이드메뉴에서 받아온 data 넘길 contextAPI
    const {setCustomerData, setQnaData, setOrderData, setInventoryData,
        setTodayBefore,setOnedayBefore,setTwodayBefore,setThreedayBefore,
        setFourdayBefore,setFivedayBefore,setSixdayBefore,setChatList} = context;
    //어드민 sideMenu를 바꾸는 useState
    const [changeMenu,setChangeMenu] =useState();
    //페이지값이 바뀌는 컴포넌트
    const onChangePage =(e)=>{
        setChangeMenu(e);   
    }
    //customermanagement선택시 실행되는 엑시오스
    const onLoadCustomerData = async() =>{ 
        const response = await AxiosFinal.customerManage();
        // console.log(response.data);
        setCustomerData(response.data);
    }
    //qna 선택시 샐행되는 엑시오스
    const onLoadQnaData = async() =>{ 
        const response = await AxiosFinal.qnaLoadManage();
        // console.log(response.data);
        setQnaData(response.data);
        // console.log("qnadata",qnaData);
    }
    //orderCheck 선택시 실행되는 엑시오스
    const onLoadOrderData = async()=>{
        const response = await AxiosFinal.orderLoadManage();
        setOrderData(response.data);
        console.log(response.data);
    }
    //inventory 선택시 실행되는 엑시오스
    const onLoadInventory=async()=>{
        const response = await AxiosFinal.shop();
        setInventoryData(response.data)
        console.log(response.data);
    }
    //saleDate 선택시 실행되는 엑시오스
    const onLoadSaleDate=async()=>{
        const date= new Date;
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);     
        const todayBefore= year+"-"+ month +"-"+day;
        const oneDayBefore= year+"-"+ month +"-"+(day-1);
        const towDayBefore= year+"-"+ month +"-"+(day-2);
        const threeDayBefore= year+"-"+ month +"-"+(day-3);
        const fourDayBefore= year+"-"+ month +"-"+(day-4);
        const fiveDayBefore= year+"-"+ month +"-"+(day-5);
        const sixDayBefore = year+"-"+ month +"-"+(day-6);
        //각 날짜 별 전달받기.
        const today = await AxiosFinal.onLoadOrderDate(todayBefore);
        setTodayBefore(today.data);
        const onday = await AxiosFinal.onLoadOrderDate(oneDayBefore);
        setOnedayBefore (onday.data);
        const twoday = await AxiosFinal.onLoadOrderDate(towDayBefore);
        setTwodayBefore (twoday.data);
        const threeday = await AxiosFinal.onLoadOrderDate(threeDayBefore);
        setThreedayBefore (threeday.data);
        const fourday = await AxiosFinal.onLoadOrderDate(fourDayBefore);
        setFourdayBefore (fourday.data);
        const fiveday = await AxiosFinal.onLoadOrderDate(fiveDayBefore);        
        setFivedayBefore (fiveday.data);
        const sixday = await AxiosFinal.onLoadOrderDate(sixDayBefore);
        setSixdayBefore(sixday.data);  
    }
    const onLoadChatList =async()=>{
        const response = await AxiosFinal.onLoadChatList();
        setChatList(response.data);
        console.log(response.data);
    }
    //사이드메뉴 선택시 실행
    const onLoadCustomer=(e)=>{
        if(e==="customer Management"){
            onLoadCustomerData();
        }else if(e==="qna"){
            onLoadQnaData();
        }else if(e==="orderCheck"){
            onLoadOrderData();
        }else if(e==="inventory"){
            onLoadInventory();
        }else if(e==="saleDate"){
            onLoadSaleDate();
        }else if(e==="chat list"){
            onLoadChatList();
        }
    }
    //임시 주문건 입력
    const [newOrder,setNewOrder] = useState(0);    
    const [shipRrder,setShipOrder] = useState(0);    
    const [newQna,setNewQna] = useState(0);
    //헤드 주문상태창 신규 갱신
    const onReLoadData=async()=>{
        const newOrder = await AxiosFinal.newOrderCheck("CHECK");
        const shipOrder = await AxiosFinal.shipOrderCheck("SHIP");
        const newQna = await AxiosFinal.newQnaCheck("HOLD");     
        setNewOrder(newOrder.data.length);
        setShipOrder(shipOrder.data.length);
        setNewQna(newQna.data.length);
    }
    return(
        <Container>
            <Head> 
                <div className="headTop">
                    <button>logout</button>
                    <button onClick={onReLoadData}>reload</button>
                    <Link to="/">home</Link>
                </div>
                
                <div className="headFooter">
                    <div className="newOrder">
                        신규 주문 &nbsp; <span>{newOrder}</span>&nbsp;건
                    </div>
                    <div className="shipTrack">
                        배송중 주문 &nbsp;<span>{shipRrder}</span>&nbsp;건  
                    </div>
                    <div className="customerAlert">
                        고객 문의  &nbsp;<span>{newQna}</span>&nbsp;건 
                    </div>
                </div>
            </Head>

            <MainBody> 
                <div className="sideMenu">
                    {Sidemenu.map(s=>(<SideBustton key={s.name} onClick={()=>{onChangePage(s.name);
                                                                               onLoadCustomer(s.name);}}>
                        {s.name}
                    </SideBustton> ))}
                </div>
                <div className="body">
                    {changeMenu ==="saleDate" &&<SaleDate/>}                    
                    {changeMenu ==="orderCheck" &&<OrderCheck/>}
                    {changeMenu ==="itemUpload" &&<ItemUpload/>}
                    {changeMenu ==="inventory" &&<Inventory />}
                    {changeMenu ==="qna" &&<Qna/>}                    
                    {changeMenu ==="customer Management" &&<CustomerMan />}      
                    {changeMenu ==="chat list" &&<ChatList />}    
                </div>
            </MainBody>
        </Container>
    );
};

export default AdminPage;