import React, {useState} from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import { useNavigate, Link } from "react-router-dom";
import test from "../img/shop.webp"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;    
`

const Mainboby=styled.div`
    width: 100%;
    margin: 0px 40px 0px 40px;
`

const TopButton = styled.button`
    border: none;
    background-color: white;
    &:hover{
        color: rgba(0,0,0,0.5);
    }
`    

const Head = styled.div`
    width: 100%;
    height: 80px;
    a{
        text-decoration: none;
        color: black;
    }
    .nav{
        width: 100%;
        display: flex;
        justify-content: space-between;
        
    }
    .nav1{
        width: 300px;
        display: flex;        
        align-items: center;
        font-size: 13px;    
        cursor: pointer;
             
        div{
            margin-right: 20px;
            
            &:hover{
                color: rgba(0,0,0,0.5);
            }
        }
    }

    .nav2{      
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        font-size: 50px;
    }
    .nav3{
        width: 300px;
        display: flex;
        justify-content: flex-end;
        font-size: 13px;
        
        div{
            margin-left: 20px;
        }
    }

`

const Filter = styled.div`
    margin-top: 20px;
    color: black;
    float: right;
     cursor: pointer;
    &:hover{
        color: rgba(0,0,0,0.5);
    }
    
    
`


const Article = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .blur{
        filter: blur(5px); 
        pointer-events: none; 
        opacity: 0.8; 
    }
    
   
`

const Container_in = styled.div`
    display: flex;
    height: 380px;
    width: 400px;
    align-items: center;    
    justify-content: center;
    color: black;
    
    img{
        display: block;
        width: 300px;
        height: 300px;
    }

    .logo{
        width: 200px;
        font-size: 15px;
        font-weight:bolder;
    
    }

    .price{
        width: 200px;
        font-size: 10px;
    }
`;



const MenuList = [
    {name : "iMMUTABLE"},
    {name : "test1"},
    {name : "test2"}
]

const IsLoginFalse = [
    { name : "login"}
  ]
  const IsLoginTrue = [
    { name : "logout"},
    { name : "mypage"},    
    { name : "cart"},    
    { name : "FAQ"}
  ]

//카트 영역
const CartToggle=styled.div`
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    border: 1px solid black;
    background-color: white;
    position: absolute;
    right: 2.8rem;
    top:3rem;

    a{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    text-decoration: none;
    background-color: black;
    color: white;
    
  }
`

const Shop = () => {
    const [selectedMenu, setSelectedMenu] = useState(null)
    const [isLogin, setIsLogin] = useState(true);
    const [isMenuClicked, setIsMenuClicked] = useState(false);  

    const [openCart, setOpenCart] = useState(false);
    const onChangePage=(e)=>{
        console.log(e);
        if(e==="cart"){
            //카트 창 열리기
            setOpenCart(!openCart);
        }
        else if(e==="logout"){
            setIsLogin(false);
        }
    }

    
    const handleMenuClick = (menuName) => {
        if (selectedMenu === menuName) {
          setSelectedMenu(null) // 이미 선택된 메뉴를 다시 클릭하면 닫힙니다.
          setIsMenuClicked(false)
        } else {
          setSelectedMenu(menuName);
          setIsMenuClicked(true)
        }
      };

    

    return(
      <Container> 
        {openCart && <CartToggle>
                            카트 
                            <Link to="/Cart">장바구니</Link>
                    </CartToggle>}
        <Mainboby>
            <Head>
                <div className="nav">
                    <div className="nav1">
                        {MenuList.map(v=>(
                            <div key={v.name}
                            onClick={() => handleMenuClick(v.name)} 
                            className={selectedMenu === v.name ? "active" : ""}>        
                            {v.name} 
                          </div>
                        ))}
                    </div>
                    <a href="/"><div className="nav2">
                        iMMUTABLE
                    </div></a>
                    <div className="nav3">
                    {IsLoginFalse.map(s=>( isLogin===false &&
                                        <TopButton key={s.name}>
                                            <Link to="/Login">{s.name}</Link>
                                        </TopButton>
                                    ))}
                           {IsLoginTrue.map(s=>( isLogin===true &&
                                        <TopButton key={s.name} onClick={()=>onChangePage(s.name)}>
                                            {s.name}
                                        </TopButton>
                                    ))}
                    </div>
                </div>
                {selectedMenu === "iMMUTABLE" && <DropdownMenu />} 
            </Head>
            <Filter>
                FILTER
            </Filter>
            <Article>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}>
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in> 
            <div className={isMenuClicked ? "blur" : ""}> 
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}> 
            <div className="view"> 
                <img src={test}/> 
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}> 
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}>
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}>
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in>
            <div className={isMenuClicked ? "blur" : ""}>
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            <Container_in> 
            <div className={isMenuClicked ? "blur" : ""}>          
            <div className="view">
                <img src={test}/>
                <div className="logo">iMMUTABLE</div>      
                <div className="info">Viscose Tricot Crewneck</div>
                <div className="price">₩‌1,043,000</div>
            </div>
            </div>
            </Container_in>
            </Article>
        </Mainboby>
      </Container>  
    )
};


export default Shop;        