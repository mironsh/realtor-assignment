import React, {FunctionComponent} from 'react';
import Header from "./Header";
import useDataContext from "../hooks/useDataContext";

const Page: FunctionComponent = ({children}) => {
  const data = useDataContext()
  return (
    <div>
      <Header site={data?.site} profile={data?.profile} />
      {children}
    </div>
  );
};

export default Page;
