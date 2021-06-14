import React, {FunctionComponent} from "react";

type PropertyProps = { title: string; data: string | number }
const Property: FunctionComponent<PropertyProps> = ({title, data}) => (
  <div className={"property"}>
    <span className={"property--title"}>{title}</span>
    <span className={"property--data"}>{data}</span>
  </div>
)

export default Property