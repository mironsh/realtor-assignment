import React, {FunctionComponent} from 'react';
import Header from "./Header";
import useDataContext from "../hooks/useDataContext";

const Page: FunctionComponent = ({children}) => {
  const data = useDataContext()
  return (
    <>
      <Header site={data?.site} profile={data?.profile} />
      <div className={"page"}>
        {children}
      </div>
    </>
  );
};

export default Page;
