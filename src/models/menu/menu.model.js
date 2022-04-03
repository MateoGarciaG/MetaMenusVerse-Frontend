import { PropTypes, validateProps } from "vanilla-prop-types";

const menuProps = {
  title:PropTypes.string.isRequired,
  descriptionMenu: PropTypes.string.isRequired,
  stock:PropTypes.number.isRequired,
  price:PropTypes.number.isRequired,
  ingredients:PropTypes.arrayOf(PropTypes.object).isRequired,
  category:PropTypes.objectOf(PropTypes.string).isRequired,
  state:PropTypes.objectOf(PropTypes.number).isRequired,
}

const menuDataFormProps = {
  title:PropTypes.string.isRequired,
  descriptionMenu: PropTypes.string.isRequired,
  stock:PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  price:PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  ingredients:PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object).isRequired,
    PropTypes.string.isRequired,
  ]),
  
  category:PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string).isRequired,
    PropTypes.string.isRequired,
  ]),
  energy:PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  radiation: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  toxicity: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
}


export const validateMenuArgs = validateProps(menuProps);

export const validateDataFormMenu = validateProps(menuDataFormProps);