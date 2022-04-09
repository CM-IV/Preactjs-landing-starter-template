import { ComponentChildren } from "preact";
import { Nav } from "../components/nav";
import { Wrapper } from "../components/wrapper";

type LayoutProps = {
  children: ComponentChildren
}

const Layout = (props: LayoutProps) => {
  return (
    <Wrapper>
      <Nav />
      {props.children}
    </Wrapper>
  );
};

export { Layout };
