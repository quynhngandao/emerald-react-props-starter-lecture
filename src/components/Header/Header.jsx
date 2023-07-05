/* props is always an object that contains whatever properties we pass it where the component is rendered */

// (props)
// {props.title}

// ({title})
// {title}
/* title: dynamic value depending on what was passed in*/

function Header({title}) {
  return <h2>{title}</h2>;
}

export default Header;
