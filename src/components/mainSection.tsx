import { Fragment } from "preact"
import { FeatureComponent } from "./featureComponent"
import { FooterComponent } from "./footerComponent"
import { HeroComponent } from "./heroComponent"
import { MediaComponent } from "./mediaComponent"

const MainSection = () => {
    return (
        <Fragment>
            <HeroComponent 
                title={
                    <>
                    <h1>{"Website template for\n"}</h1>
                    <span class="has-text-link">Preactjs</span>
                    </>
                }
            />
            <MediaComponent 
                title={
                    <>
                        {"Your Title"}
                    </>
                }
                mediaImg1="https://ik.imagekit.io/xbkhabiqcy9/img/8408-9516_rOgPNpTDl.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649357309737"
                mediaImg2="https://ik.imagekit.io/xbkhabiqcy9/img/1085-8766_j1o8sa6gY.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649357323494"
                mediaImg3="https://ik.imagekit.io/xbkhabiqcy9/img/8304-7449_iFeGbfuvj.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649357323553"
            />
            <FeatureComponent 
                title={
                    <>
                    {"Your Title"}
                    </>
                }
                subtitle={
                    <>
                    {"Features"}
                    </>
                }
                description="
                Morbi tristique senectus et netus et malesuada fames. 
                Amet consectetur adipiscing elit duis tristique. 
                Gravida rutrum quisque non tellus orci ac auctor augue mauris. 
                Adipiscing commodo elit at imperdiet dui accumsan.
                Ac turpis egestas integer eget aliquet nibh. 
                Nunc id cursus metus aliquam eleifend mi. 
                Tempus iaculis urna id volutpat lacus laoreet non curabitur. 
                Vestibulum lorem sed risus ultricies tristique nulla aliquet.
                In nisl nisi scelerisque eu ultrices vitae auctor. 
                Fermentum leo vel orci porta non pulvinar. 
                Facilisis sed odio morbi quis commodo odio aenean sed.
                "
            />
            <FooterComponent 
                copyright={
                    <>
                        <p>
                            <strong>
                            &copy; <em>Preactjs Starter</em>
                            </strong>
                        </p>
                    </>
                }
                footerImg="https://ik.imagekit.io/xbkhabiqcy9/img/starter2_yb5kYf7Nfv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649374251980"
            />
            
        </Fragment>
    )
}


export { MainSection }