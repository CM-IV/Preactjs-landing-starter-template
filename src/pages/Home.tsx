import { FooterComponent } from "../components/footerComponent";
import { HeroComponent } from "../components/heroComponent";
import { MainSection } from "../components/mainSection";
import { Layout } from "../layouts/layout";

const Home = () => {

  return (
    <Layout>
      <HeroComponent 
      title1="Preactjs"
      subtitle="Website landing page"
      />
      <MainSection 
      featureTitle="Your Title" 
      featureSubtitle="Features"
      />
      <FooterComponent />
    </Layout>
  )
}


export { Home };