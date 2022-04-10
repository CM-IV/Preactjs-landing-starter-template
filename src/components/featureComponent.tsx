import { ComponentChildren, Fragment } from "preact";

type FeatureProps = {
  title?: ComponentChildren;
  subtitle?: ComponentChildren;
  description?: string;
};

const FeatureComponent = (props: FeatureProps) => {
  return (
    <Fragment>
      <section class="section">
        <p class="subtitle has-text-centered">
          <strong class="has-text-white">{props.title}</strong>
        </p>
        <p class="has-text-info has-text-centered">{props.subtitle}</p>
      </section>
      <section class="section">
        <div class="columns is-centered is-multiline">
          <div class="column is-half">
            <div class="card">
              <div class="card-content">
                <p class="subtitle has-text-centered">
                  <strong class="has-text-white">Your Title</strong>
                </p>
                <p class="has-text-centered">{props.description}</p>
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
                <p class="subtitle has-text-centered">
                  <strong>Your Title</strong>
                </p>
                <p class="has-text-centered">{props.description}</p>
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
                <p class="subtitle has-text-centered">
                  <strong>Your Title</strong>
                </p>
                <p class="has-text-centered">{props.description}</p>
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
  );
};

export { FeatureComponent };
