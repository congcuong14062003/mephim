import Content from "../content/content";
import Intro from "../Intro/Intro";
import NavBar from "../navBar/navbar";
import Footer from "../footer/footer";
import "./home.scss"
export default function Home(){
  window.scrollTo(0, 0);
  return (
    <div className="home">
      <NavBar className="navbar-home" />
      <Intro />
      <Content className="content-home"/>
      <Footer/>
    </div>
  );
}

