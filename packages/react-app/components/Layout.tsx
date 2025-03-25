import { FC, ReactNode } from "react";
import Loading from "./Loading";

interface Props {
  children: ReactNode;
  loading: boolean
}
const Layout: FC<Props> = ({ children, loading }) => {
  return (
    <>
      { loading && <Loading />}
      <div className="bg-[#332807] flex justify-center flex-col min-h-screen">
        {/* <Header /> */}
        <div className="mx-auto space-y-8 sm:px-6 lg:px-8">
          {children}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
