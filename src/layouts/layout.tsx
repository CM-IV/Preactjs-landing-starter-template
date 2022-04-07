import { Nav } from "../components/nav";
import { Wrapper } from "../components/wrapper";

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Nav />
      {props.children}
    </Wrapper>
  );
};

export { Layout };