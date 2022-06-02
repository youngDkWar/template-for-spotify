import "../static/css/main.css";
import MainBlock from "./MainContent";
import {Aside, FakeAside} from "./Aside";
import {Header, FakeHeader} from "./Header";
import {Footer, FakeFooter} from "./Footer";

function Main() {
  return (
    <div className="app">
      <FakeHeader></FakeHeader>
      <Header></Header>
      <FakeAside></FakeAside>
      <Aside></Aside>
      <MainBlock></MainBlock>
      <Footer></Footer>
      <FakeFooter></FakeFooter>
    </div>
  );
}

export default Main;
