import "../static/css/search.css";
import "../static/css/main.css";
import { Navigate } from "react-router-dom";
import MainBlock from "./MainContent";
import Search from "./Search";
import {Aside, FakeAside} from "./Aside";
import {Spotify} from "./spotify";
import {Header, FakeHeader} from "./Header";
import {Footer, FakeFooter} from "./Footer";

interface PageProps {
  page: string;
}

function Main( { page }: PageProps ) {
  const {isLogOut} = Spotify();
  if (isLogOut()) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="app">
      <FakeHeader></FakeHeader>
      <Header></Header>
      <FakeAside></FakeAside>
      <Aside></Aside>
      {
        getPage(page)
      }
      <Footer></Footer>
      <FakeFooter></FakeFooter>
    </div>
  );
}

function getPage( page : string){
  if (page == "main"){
    return <MainBlock></MainBlock>
  }
  else if (page == "search"){
    return <Search></Search>
  }
}

export default Main;
