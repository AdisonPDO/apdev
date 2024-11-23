"use client";

export default function Contact({ heading }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-md-70">
          <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
            <span className="text-outline-2">
              {heading ? heading : "Contactez moi"}
            </span>
            <span className="text-outline-1">
              {heading ? heading : "Contactez moi"}
            </span>
            <span className="text-outline">
              {heading ? heading : "Contactez moi"}
            </span>
          </h2>
          <p className="section-text mb-60 mb-md-40 mb-sm-30">
            <span className="section-title-inline">Comment?</span> Vous avez une question ?
            Envoyez-moi simplement un message par e-mail ou linkedin. Je suis
            disponible pour de nouveaux projets et des idées intéressantes.
          </p>
          <div>
            <a
              href="mailto:adison.apdev@gmail.com"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              adison.apdev@gmail.com
            </a>
          </div>
          <div>
            <a
              href="tel:+33627521624"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              +33 6 27 52 16 24
            </a>
          </div>
        </div>
        <div className="col-lg-7 col-xl-6 offset-xl-1 pt-30 pt-md-0">
          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form wow fadeInUp"
            id="contact_form"
          >
            {/* Name */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="name" className="mb-0 mb-sm-10 me-3">
                Votre nom
              </label>
              <div className="flex-grow-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-sm form-control underline text-md-center"
                  placeholder="Entrez votre nom ici"
                  pattern=".{3,100}"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            {/* Email */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="email" className="mb-0 mb-sm-10 me-3">
                Adresse email
              </label>
              <div className="flex-grow-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-sm form-control underline text-md-center"
                  placeholder="Entrez votre email ici"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message" className="mb-sm-10">
                Quelle est votre question ?
              </label>
              <textarea
                name="message"
                id="message"
                className="input-sm form-control underline"
                style={{ height: 120 }}
                placeholder="Entrez votre message ici"
                defaultValue={""}
              />
            </div>
            <div className="row">
              <div className="col-sm-5">
                {/* Button */}
                <button
                  className="submit_btn btn btn-mod btn-circle btn-white btn-ellipse"
                  data-btn-animate="ellipse"
                  id="submit_btn"
                  aria-controls="result"
                >
                  <span className="btn-ellipse-inner">
                    <span className="btn-ellipse-unhovered">Envoyer</span>
                    <span className="btn-ellipse-hovered" aria-hidden="true">
                      Envoyer
                    </span>
                  </span>
                </button>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* Inform Tip */}
                <div className="form-tip pt-30 pt-sm-20">
                  <i className="icon-info size-16" />
                  Tous les champs sont obligatoires. En envoyant le formulaire, vous acceptez
                  les <a href="#">Conditions</a> et{" "}
                  <a href="#">Politique de confidentialité</a>.
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
        </div>
      </div>
    </div>
  );
}
