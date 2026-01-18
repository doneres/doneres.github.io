import { NavLink  } from "react-router";

export default function LinksNavBar(props) {
  const linkStyle =
    "px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white transition duration-300";

  return (
    <>
      <NavLink className={linkStyle} to={props.link} end>
        {props.nomeLink}
      </NavLink>
    </>
  );
}
