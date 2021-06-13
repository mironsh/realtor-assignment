import React, {FunctionComponent} from 'react';
import {useRouteMatch} from "react-router-dom"
import Page from "./Page";

const Details: FunctionComponent = () => {
  const {params} = useRouteMatch();
  console.log(params, "params")
  return (
    <Page>
Here
    </Page>
  );
};

export default Details;
