import { ComponentChildren } from "preact";

type FooterProps = {
    copyright?: ComponentChildren;
    footerImg?: string;
}

const FooterComponent = (props: FooterProps) => {
    return (
        <footer class="footer">
        <div class="content has-text-centered">
            {props.copyright}
            <img
                src={props.footerImg}
                class="image-responsive"
                width={112}
                height={28}
                alt="logo"
            />
        </div>
      </footer>
    )
}

export { FooterComponent }