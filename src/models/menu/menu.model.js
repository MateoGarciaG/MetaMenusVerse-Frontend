import { PropTypes, validateProps } from "vanilla-prop-types";

const menuProps = {
  title:PropTypes.string.isRequired,
  descriptionMenu: PropTypes.string.isRequired,
  stock:PropTypes.number.isRequired,
  price:PropTypes.number.isRequired,
  ingredients:PropTypes.arrayOf(PropTypes.string).isRequired,
  category:PropTypes.string.isRequired,
  state:PropTypes.objectOf(PropTypes.number).isRequired,
}

export const validateMenuArgs = validateProps(menuProps);