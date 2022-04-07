import { Fragment } from "preact";

const Wrapper = (props: any) => {
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