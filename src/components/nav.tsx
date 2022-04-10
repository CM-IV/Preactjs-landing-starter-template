import { Fragment } from "preact";
import { Link } from "wouter-preact";

const Nav = () => {
  return (
    <Fragment>
      {/* <nav
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
      </nav> */}

    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="logo">
          <a href="#" class="nav-link">
            <span class="link-text logo-text">Template</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </a>
        </li>

        <li class="nav-item pl-5">
          <a href="/" class="nav-link">
            <i class="fa fa-home fa-2x" aria-hidden="true"></i>
            <span class="link-text">Home</span>
          </a>
        </li>
      </ul>
    </nav>
    </Fragment>
  );
};

export { Nav };
