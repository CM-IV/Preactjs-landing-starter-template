import { ComponentChildren } from "preact";
import { Wrapper } from "../components/wrapper";

type LayoutProps = {
  children: ComponentChildren
}

const Layout = (props: LayoutProps) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

export { Layout };
