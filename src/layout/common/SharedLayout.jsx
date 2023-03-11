import { Outlet } from 'react-router-dom';
import { Header } from 'layout/common/Header/Header';
import { MainContainer } from 'layout/common/SharedLayout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};