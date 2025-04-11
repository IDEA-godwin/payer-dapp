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
      <div className=" text-(--text-color) bg-(--linear-light-bg) dark:bg(--background-color)">
        <div className="mx-auto space-y-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
