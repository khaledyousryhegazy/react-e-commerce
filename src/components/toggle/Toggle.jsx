import styles from "./Toggle.module.css";

function Toggle() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  const colorTheme = localStorage.getItem("theme");

  if (colorTheme === "dark") {
    setDarkMode();
  } else if (colorTheme === "light") {
    setLightMode();
  }

  return (
    <>
      <label className={styles.switch}>
        <input
          type="checkbox"
          id="theme-toggle"
          defaultChecked={colorTheme === "dark"}
          onChange={toggleTheme}
        />
        <span className={styles.slider}></span>
      </label>
    </>
  );
}

export default Toggle;
