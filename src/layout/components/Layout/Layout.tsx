import Heading from "../../../shared/components/Heading";
import Header from "../Header";
import MainContent from "../MainContent";
import Sidebar from "../Sidebar";
import logo from "../../../assets/logo.svg";
import "./Layout.scss";

const Layout = (): React.ReactElement => {
  return (
    <div className="container">
      <Header>
        <img src={logo} alt="Logotipo bonMario" />
        <Heading>bonMario App</Heading>
      </Header>
      <Sidebar>sidebar</Sidebar>
      <MainContent>
        <Heading level={2}>Dashboard</Heading>
      </MainContent>
    </div>
  );
};

export default Layout;
