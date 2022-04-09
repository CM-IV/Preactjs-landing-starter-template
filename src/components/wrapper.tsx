import { ComponentChildren, Fragment } from "preact";

type WrapperProps = {
  children: ComponentChildren
}

const Wrapper = (props: WrapperProps) => {
  return (
    <Fragment>
      <main class="main-container">
        <div class="columns is-centered">
          <div class="column is-three-quarters ">{props.children}</div>
        </div>
      </main>
    </Fragment>
  );
};

export { Wrapper };
