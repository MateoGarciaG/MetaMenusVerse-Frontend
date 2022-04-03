import { PropTypes, validateProps } from "vanilla-prop-types";

const menuProps = {
  _id: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  descriptionMenu: PropTypes.string.isRequired,
  stock:PropTypes.number.isRequired,
  price:PropTypes.number.isRequired,
  ingredients:PropTypes.arrayOf(PropTypes.object).isRequired,
  category:PropTypes.objectOf(PropTypes.string).isRequired,
  state:PropTypes.objectOf(PropTypes.number).isRequired,
}

export const validateMenuArgs = validateProps(menuProps);