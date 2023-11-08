/**
 * Returns a item in a dropdown menu. wrapped around by <li> </li>
 * @param {String} props props used for the component. Requires text and href
 */
function DropdownItem(props) {
  return <li><a className="dropdown-item" href={props.href}>{props.props}</a></li>
}