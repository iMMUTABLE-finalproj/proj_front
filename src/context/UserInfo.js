import { createContext, useState } from "react"; 
export const UserContext = createContext(""); 

const UserStore = (props) => {
    const [userEmail, setUserEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [isLogin, setIsLogin] = useState(false); 
    const [signUpEmail, setSignUpEmail] = useState("");
    const [addr, setAddr] = useState("");
    const [item, setItem] = useState("");
    //어드민페이지 사이드 메뉴 선택시 출력 data저장
    const [customerData, setCustomerData] = useState("");
    const [qnaData, setQnaData] = useState("");
    const [orderData, setOrderData] = useState("");
    const [inventoryData, setInventoryData] = useState("");
    //어드민페이지 salDate시 가져와야 할 요일 별 주문건 DATA
    const [toDayBefore,setTodayBefore] = useState("");
    const [oneDayBefore,setOnedayBefore] = useState("");
    const [twoDayBefore,setTwodayBefore] = useState("");
    const [threeDayBefore,setThreedayBefore] = useState("");
    const [fourDayBefore,setFourdayBefore] = useState("");
    const [fiveDayBefore,setFivedayBefore] = useState("");   
    const [sixDayBefore,setSixdayBefore] = useState("");
    
    return (
        <UserContext.Provider value={{
            userEmail, setUserEmail, 
            password, setPassword, 
            isLogin, setIsLogin,
            signUpEmail,setSignUpEmail,
            addr,setAddr,
            item, setItem,
            customerData, setCustomerData,
            qnaData, setQnaData,
            orderData, setOrderData,
            inventoryData, setInventoryData,
            toDayBefore,setTodayBefore,
            oneDayBefore,setOnedayBefore,
            twoDayBefore,setTwodayBefore,
            threeDayBefore,setThreedayBefore,
            fourDayBefore,setFourdayBefore,
            fiveDayBefore,setFivedayBefore,
            sixDayBefore,setSixdayBefore}}>
            {props.children}
        </UserContext.Provider>   
    );
};

export default UserStore;