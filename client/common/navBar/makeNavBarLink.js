import React from 'react';
import { Link } from "react-router-dom";

export default function makeNavBarLink(route) {
  const NavBarLink = props => <Link to={route} {...props} />;
  return NavBarLink;
}
