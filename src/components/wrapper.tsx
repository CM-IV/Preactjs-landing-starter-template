import { ComponentChildren, Fragment } from "preact";
import { Nav } from "./nav";

type WrapperProps = {
  children: ComponentChildren
}

const Wrapper = (props: WrapperProps) => {
  return (
    <Fragment>
      <Nav />
      <main class="main-container">
        <div class="columns is-centered">
          <div class="column is-three-quarters ">{props.children}</div>
        </div>
      </main>
    </Fragment>
  );
};

export { Wrapper };
