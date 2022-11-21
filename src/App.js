import styled from 'styled-components'
import avatar from './images/profile.png'
import { FaCamera, FaExpand, FaSun, FaToggleOff, FaToggleOn, FaWifi } from "react-icons/fa"
import { BsToggles } from "react-icons/bs"
import { BiDoorOpen, BiConversation } from "react-icons/bi"
import { MdDashboard, MdFavorite, MdHome, MdSearch, MdSettings} from "react-icons/md"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Container = styled.header`
    background: #F86F44;
    height: 230px;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-top: 60px;
    padding-left: 32px;
    padding-right: 32px;
    border-radius: 5px;
`

const HeaderMenu = styled.div`
    margin-left: 32px;
    margin-right: 32px;
    background: white;
    box-shadow: 0px 20px 20px 0px #EFF3FF;
    margin-top: -60px;
    padding: 16px;
    border-radius: 5px;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Content = styled.div`
    width: 100%;
    background: white;
    box-shadow: 0px 20px 20px 0px #EFF3FF;
    margin: 8px;
    padding: 16px;
    border-radius: 5px;
`;

const HeaderMenuWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    .condition {
        h2 {
            color: #3E5480;
            font-weight: 600;
            font-size: 18px;
            margin-top: 10px;
        }
        p {
            color: #A0A6C1;
            font-size: 14px;
        }
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    .condition {
        h2 {
            color: #3E5480;
            font-weight: 600;
            font-size: 18px;
            margin-top: 10px;
        }
        p {
            color: #A0A6C1;
            font-size: 14px;
        }
    }
`;

const HeaderMenuDegree = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    flex-direction: row;
    .temperature {
        h2 {
            color: #FD7449;
            font-weight: 600;
            font-size: 18px;
        }

        p {
            color: #A8ADC5;
            font-weight: bold;
            font-size: 12px;
        }
    }
`;

const ContentSwitch = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 32px;
    .switch-description {
        h2 {
            color: #475C86;
            font-weight: 600;
            font-size: 18px;
        }

        p {
            margin-top: 10px;
            color: #A8B5D6;
            font-weight: bold;
            font-size: 12px;
        }
    }
`;

const Left = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    h2 {
        color: white;
    }
    p {
        color: wheat;
    }
`

const Right = styled.div`
    flex: 1;
    img {
        width: 70px;
        height: 70px;
        float: right;
    };
`

const Main = styled.main`
    margin-top: 32px;
    margin-left: 32px;
    margin-right: 32px;
    margin-bottom: 80px;
`

const Devices = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    h2 {
        color: #475C86;
        font-weight: 600;
        font-size: 18px;
        margin-left: 10px;
    }
`

const SlideContainer = styled.div`
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .kc {
        flex: 1;
        background: #EFF3FF;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        h2 {
            color: #475C86;
            font-weight: 600;
            font-size: 16px;
            margin-left: 10px;
        }
    }

    .lr {
        flex: 1;
        background: #F86F44;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        h2 {
            color: white;
            font-weight: 600;
            font-size: 16px;
            margin-left: 10px;
        }
    }

    .br {
        flex: 1;
        background: #EFF3FF;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        h2 {
            color: #475C86;
            font-weight: 600;
            font-size: 16px;
            margin-left: 10px;
        }
    }
`

const BottomNavigation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 32px;
    background: #EFF3FF;
`

function createSlide(){
    return(
       <SwiperSlide>
            <div className='kc'>
                <BiDoorOpen style={{ fontSize: "28px", color: "#475C86"}} />
                <h2>Kitchen</h2>
            </div>
        </SwiperSlide> 
    )
}

function createSlide2() {
    return (
        <SwiperSlide>
            <div className='lr'>
                <BiConversation style={{ fontSize: "28px", color: "white"}} />
                <h2>Living Room</h2>
            </div>
        </SwiperSlide>
    )
}

function createSlide3() {
    return (
        <SwiperSlide>
            <div className='br'>
                <MdDashboard style={{ fontSize: "28px", color: "#475C86"}} />
                <h2>Bed Room</h2>
            </div>
        </SwiperSlide>
    )
}

function App() {

  return (
    <div className="App">
      <Container>
        <Wrapper>
            <Left>
                <h2>Hello Dean,</h2>
                <p>Manage your home quickly</p>
            </Left>
            <Right>
                <img src={avatar} alt="avatar" />
            </Right>
        </Wrapper>
      </Container>
      <HeaderMenu>
            <HeaderMenuWrapper>
                <div className='condition'>
                    <p>17 Aug, 2020</p>
                    <h2>Sunny</h2>
                </div>
                <div>
                    <FaSun style={{ color: "#FC794F", width: "32px", height: "32px"}} />
                </div>
            </HeaderMenuWrapper>
            <hr style={{ marginTop: "10px", marginBottom: "10px", border: "0.5px solid #F2F8FF"}}/>
            <HeaderMenuDegree>
                <div className='temperature'>
                    <h2>10°C</h2>
                    <p>Indoor temp.</p>
                </div>
                <div className='temperature'>
                    <h2>20°C</h2>
                    <p>Outdoor temp.</p>
                </div>
                <div className='temperature'>
                    <h2>18°C</h2>
                    <p>Ideal temp.</p>
                </div>
            </HeaderMenuDegree>
      </HeaderMenu>
      <Main>
        <SlideContainer>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                autoplay={{ delay: 1000 }}
            >
                {createSlide()}
                {createSlide2()}
                {createSlide3()}
                
            </Swiper>
        </SlideContainer>
        <Devices>
            <BsToggles style={{ color: "#F86F44", fontSize: "28px"}} />
            <h2>Devices</h2>
        </Devices>
        <MainContent>
            <Content>
                <ContentWrapper>
                    <div>
                        <FaSun style={{ color: "#FC794F", width: "32px", height: "32px"}} />
                    </div>
                    <div>
                        <FaToggleOn style={{ color: "#FC794F", width: "32px", height: "32px"}} />
                    </div>
                </ContentWrapper>
                <ContentSwitch>
                    <div className='switch-description'>
                        <h2>Lamp</h2>
                        <p>Connected . 8H 12M</p>
                    </div>
                </ContentSwitch>
            </Content>
            <Content>
                <ContentWrapper>
                    <div>
                        <FaCamera style={{ color: "#FC794F", width: "32px", height: "32px"}} />
                    </div>
                    <div>
                        <FaToggleOff style={{ color: "#A8B5D6", width: "32px", height: "32px"}} />
                    </div>
                </ContentWrapper>
                <ContentSwitch>
                    <div className='switch-description'>
                        <h2>Smart Cam</h2>
                        <p>Disconnected</p>
                    </div>
                </ContentSwitch>
            </Content>
        </MainContent>
        <MainContent>
            <Content>
                <ContentWrapper>
                    <div>
                        <FaExpand style={{ color: "#FC794F", width: "32px", height: "32px"}} />
                    </div>
                    <div>
                        <FaToggleOn style={{ color: "#FC794F", width: "32px", height: "32px"}} />
                    </div>
                </ContentWrapper>
                <ContentSwitch>
                    <div className='switch-description'>
                        <h2>Turbo AC</h2>
                        <p>Connected . 8H 12M</p>
                    </div>
                </ContentSwitch>
            </Content>
            <Content>
                <ContentWrapper>
                    <div>
                        <FaWifi style={{ color: "#FC794F", width: "32px", height: "32px"}} />
                    </div>
                    <div>
                        <FaToggleOn style={{ color: "#A8B5D6", width: "32px", height: "32px"}} />
                    </div>
                </ContentWrapper>
                <ContentSwitch>
                    <div className='switch-description'>
                        <h2>Router</h2>
                        <p>Connected . 9H 6M</p>
                    </div>
                </ContentSwitch>
            </Content>
        </MainContent>  
      </Main>
      <BottomNavigation>
        <MdHome  style={{ fontSize: "32px", color: "#F76E43"}}/>
        <MdSearch  style={{ fontSize: "32px", color: "#CCDFF6"}}/>
        <MdFavorite  style={{ fontSize: "32px", color: "#CCDFF6"}}/>
        <MdSettings  style={{ fontSize: "32px", color: "#CCDFF6"}}/>
      </BottomNavigation>
    </div>
  );
}

export default App;
