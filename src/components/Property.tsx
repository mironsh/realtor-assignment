import React, { FunctionComponent, ReactNode } from "react"
import classNames from "classnames";

type PropertyProps = { title: string; data: ReactNode; isShort?: boolean }
const Property: FunctionComponent<PropertyProps> = ({
  title,
  data,
  isShort = false,
}) => (
  <div className={classNames("property", {"property__short": isShort})}>
    <span className={"property--title"}>{title}</span>
    <span className={"property--data"}>{data}</span>
  </div>
)

export default Property
