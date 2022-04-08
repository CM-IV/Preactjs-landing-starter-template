import { ComponentChildren } from "preact"

type MediaProps = {
    title?: ComponentChildren;
    mediaImg1?: string;
    mediaImg2?: string;
    mediaImg3?: string;
}

const MediaComponent = (props: MediaProps) => {
    return (
        <section class="section">
            <div class="columns is-centered is-multiline is-mobile">
                <div class="column is-one-third">
                    <article class="media">
                        <div class="media-content">
                            <figure class="image is-64x64" id="logo">
                                <img class="is-rounded" src={props.mediaImg1} />
                            </figure>
                            <p class="subtitle has-text-centered pt-2">{props.title}</p>
                        </div>
                    </article>
                </div>
                <div class="column is-one-third">
                    <article class="media">
                        <div class="media-content">
                            <figure class="image is-64x64" id="logo">
                                <img class="is-rounded" src={props.mediaImg2} />
                            </figure>
                            <p class="subtitle has-text-centered pt-2">{props.title}</p>
                        </div>
                    </article>
                </div>
                <div class="column is-one-third">
                    <article class="media">
                        <div class="media-content">
                            <figure class="image is-64x64" id="logo">
                                <img class="is-rounded" src={props.mediaImg3} />
                            </figure>
                            <p class="subtitle has-text-centered pt-2">{props.title}</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}


export { MediaComponent }