import CustomFooter from "../components/organisims/CustomFooter";
import CustomHeader from "../components/organisims/CustomHeader";
import "bootstrap/dist/css/bootstrap.min.css";

export const Layout = ({ children }) => {
  return (
    <>
      <CustomHeader />
      <div className='p-5 m-5 d-flex justify-content-center'>{children}</div>
      <CustomFooter />
    </>
  );
};
