import React, {FunctionComponent} from 'react';
import Header from "./Header";
import useDataContext from "../hooks/useDataContext";

/**
 * Page component is used to deliver consistent style for all app pages, including the header
 */
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
