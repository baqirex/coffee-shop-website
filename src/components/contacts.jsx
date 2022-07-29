import React from "react";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts-in">
        <div>
          <h1 className="c-head">Contacts</h1>
        </div>
        <div className="c-body">
          <ul>
            <li>
              <i
                style={{ color: "white" }}
                className="fa fa-instagram"
                aria-hidden="true"
              />
              <a className="c-link" href="https://www.instagram.com">
                Instagram
              </a>
            </li>
            <li>
              <i
                style={{ color: "white" }}
                class="fa fa-facebook-official"
                aria-hidden="true"
              />
              <a className="c-link" href="https://www.facebook.com">
                Facebook
              </a>
            </li>
            <li>
              <i
                style={{ color: "white" }}
                i
                class="fa fa-envelope-o"
                aria-hidden="true"
              />
              <a className="c-link" href="https://www.gmail.com">
                E-mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
