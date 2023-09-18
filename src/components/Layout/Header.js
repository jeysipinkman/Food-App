import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Los Pollos Hermanos</h1>
        <HeaderCartButton onClick={props.onShowCart}>My Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="los pollos hermanos meals" />
      </div>
    </>
  );
};
export default Header;
