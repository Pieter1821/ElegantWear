import './button.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, button_Type, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[button_Type]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
