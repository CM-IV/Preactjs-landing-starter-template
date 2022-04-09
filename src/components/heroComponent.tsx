import { ComponentChildren } from "preact";

type HeroProps = {
  title?: ComponentChildren;
  subtitle?: ComponentChildren;
  description?: string;
};

const HeroComponent = (props: HeroProps) => {
  return (
    <section class="hero has-background-light is-halfheight">
      <div class="hero-body">
        <div class="">
          {(props.title || props.subtitle || props.description) && (
            <header>
              {props.title && <h1 class="title">{props.title}</h1>}
              {props.subtitle && <h2 class="subtitle">{props.subtitle}</h2>}
              {props.description && <p>{props.description}</p>}
            </header>
          )}
        </div>
      </div>
    </section>
  );
};

export { HeroComponent };
