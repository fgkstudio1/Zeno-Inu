import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainLayout;