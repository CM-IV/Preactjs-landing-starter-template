type HeroProps = {
    title1: string;
    subtitle: string;
}

const HeroComponent = ({ title1, subtitle }: HeroProps) => {
    return (
        <section class="hero has-background-light is-halfheight">
            <div class="hero-body">
                <div class="">
                    <p class="title has-text-link">
                    {title1}
                    </p>
                    <p class="subtitle">
                    {subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}


export { HeroComponent }