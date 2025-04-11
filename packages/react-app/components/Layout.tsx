import { FC, ReactNode } from "react";
import Loading from "./Loading";

interface Props {
  children: ReactNode;
  loading: boolean
}
const Layout: FC<Props> = ({ children, loading }) => {
  return (
    <>
      {loading && <Loading />}
      <div className="max-w-sm bg-primary">
        {children}
      </div>
    </>
  );
};

export default Layout;
