import { Fragment } from "preact";
import { Link } from "wouter-preact";

const Nav = () => {
  return (
    <Fragment>
      <nav
        class="navbar"
        id="nav"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item mt-2" href="/">
            <img
              src="https://ik.imagekit.io/xbkhabiqcy9/img/starter2_yb5kYf7Nfv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649374251980"
              class="image-responsive"
              alt="logo"
            />
          </a>
        </div>

        <input
          type="checkbox"
          id="navbar-burger-toggle"
          class="navbar-burger-toggle is-hidden"
        />
        <label for="navbar-burger-toggle" class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <Link to={"/"} class="navbar-item mt-2">
              Home
            </Link>
            <Link to={"#"} class="navbar-item mt-2">
              GitHub
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export { Nav };
