import propTypes from 'prop-types';

export const itemType = propTypes.shape({
  uuid: propTypes.string.isRequired,
  name: propTypes.string,
  modificationDate: propTypes.string,
});

export const itemsType = propTypes.arrayOf(itemType);

export const cartType = propTypes.shape({
  uuid: propTypes.string.isRequired,
  name: propTypes.string,
  items: propTypes.array,
  modificationDate: propTypes.string,
});

export const cartsType = propTypes.arrayOf(cartType);
