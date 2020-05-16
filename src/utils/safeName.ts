import isIllegalName from "./isIllegalName";

const safeName = (name: string) => (isIllegalName(name) ? name + "Name" : name);

export default safeName;
