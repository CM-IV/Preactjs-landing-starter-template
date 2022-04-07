import { Fragment } from "preact"

type MainProps = {
    featureTitle: string;
    featureSubtitle: string;
}

const MainSection = ({ 
    featureTitle, 
    featureSubtitle,
 }: MainProps) => {
    return (
        <Fragment>
            <section class="section">
                <div class="columns is-centered is-multiline is-mobile">
                    <div class="column is-one-third">
                        <article class="media">
                            <div class="media-content">
                                <figure class="image is-64x64" id="logo">
                                    <img class="is-rounded" src="https://ik.imagekit.io/xbkhabiqcy9/img/8408-9516_rOgPNpTDl.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649357309737" />
                                </figure>
                                <p class="subtitle has-text-centered pt-2">Your title</p>
                            </div>
                        </article>
                    </div>
                    <div class="column is-one-third">
                        <article class="media">
                            <div class="media-content">
                                <figure class="image is-64x64" id="logo">
                                    <img class="is-rounded" src="https://ik.imagekit.io/xbkhabiqcy9/img/1085-8766_j1o8sa6gY.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649357323494" />
                                </figure>
                                <p class="subtitle has-text-centered pt-2">Your title</p>
                            </div>
                        </article>
                    </div>
                    <div class="column is-one-third">
                        <article class="media">
                            <div class="media-content">
                                <figure class="image is-64x64" id="logo">
                                    <img class="is-rounded" src="https://ik.imagekit.io/xbkhabiqcy9/img/8304-7449_iFeGbfuvj.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649357323553" />
                                </figure>
                                <p class="subtitle has-text-centered pt-2">Your title</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section class="section">
                <p class="subtitle has-text-centered"><strong>{featureTitle}</strong></p>
                <p class="has-text-info has-text-centered">{featureSubtitle}</p>
            </section>
            <section class="section">
                <div class="columns is-centered is-multiline">
                    <div class="column is-half">
                        <div class="card">
                            <div class="card-content">
                                <p class="subtitle has-text-centered"><strong>Your Title</strong></p>
                                <p class="has-text-centered">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
                                tempor incididunt ut labore et dolore magna aliqua. 
                                Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. 
                                Nulla facilisi morbi tempus iaculis urna id. Sed risus pretium quam vulputate 
                                dignissim suspendisse in. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. 
                                Hac habitasse platea dictumst vestibulum rhoncus. 
                                Integer eget aliquet nibh praesent tristique magna sit. 
                                Purus non enim praesent elementum facilisis leo. 
                                Volutpat commodo sed egestas egestas fringilla phasellus. 
                                Egestas purus viverra accumsan in nisl nisi scelerisque eu. Elit at imperdiet dui accumsan sit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3" id="logo">
                                    <img src="https://ik.imagekit.io/xbkhabiqcy9/img/undraw_business_shop_re_ruf4_Zr6XQR2p4.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649360106929" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="columns is-centered is-multiline">
                    <div class="column is-half">
                        <div class="card">
                            <div class="card-content">
                                <p class="subtitle has-text-centered"><strong>Your Title</strong></p>
                                <p class="has-text-centered">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
                                tempor incididunt ut labore et dolore magna aliqua. 
                                Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. 
                                Nulla facilisi morbi tempus iaculis urna id. Sed risus pretium quam vulputate 
                                dignissim suspendisse in. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. 
                                Hac habitasse platea dictumst vestibulum rhoncus. 
                                Integer eget aliquet nibh praesent tristique magna sit. 
                                Purus non enim praesent elementum facilisis leo. 
                                Volutpat commodo sed egestas egestas fringilla phasellus. 
                                Egestas purus viverra accumsan in nisl nisi scelerisque eu. Elit at imperdiet dui accumsan sit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3" id="logo">
                                    <img src="https://ik.imagekit.io/xbkhabiqcy9/img/undraw_newspaper_re_syf5_8WIeKTBza.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649360115378" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="columns is-centered is-multiline">
                    <div class="column is-half">
                        <div class="card">
                            <div class="card-content">
                                <p class="subtitle has-text-centered"><strong>Your Title</strong></p>
                                <p class="has-text-centered">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
                                tempor incididunt ut labore et dolore magna aliqua. 
                                Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. 
                                Nulla facilisi morbi tempus iaculis urna id. Sed risus pretium quam vulputate 
                                dignissim suspendisse in. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. 
                                Hac habitasse platea dictumst vestibulum rhoncus. 
                                Integer eget aliquet nibh praesent tristique magna sit. 
                                Purus non enim praesent elementum facilisis leo. 
                                Volutpat commodo sed egestas egestas fringilla phasellus. 
                                Egestas purus viverra accumsan in nisl nisi scelerisque eu. Elit at imperdiet dui accumsan sit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3" id="logo">
                                    <img src="https://ik.imagekit.io/xbkhabiqcy9/img/undraw_hooked_re_vl59_nHFTs7uqs.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649360115376" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}


export { MainSection }