import React from "react";

const CookiePolicy = () => {
  return (
    <section className="container px-5 py-10 mx-auto">
      <div className="md:mx-40 flex flex-col gap-5">
        <h2>Cookie Policy</h2>
        <p className="text-slate-200">
          <strong>Effective Date:</strong> 09 Jan. 2024
        </p>

        <p className="text-slate-200">
          Shotune.com ("us", "we", or "our") uses cookies on Shotune.com(the
          "Service"). By using the Service, you consent to the use of cookies.
        </p>

        <p className="text-slate-200">
          Our Cookie Policy explains what cookies are, how we use cookies, how
          third-parties we may partner with may use cookies on the Service, your
          choices regarding cookies, and further information about cookies.
        </p>

        <h3 className="md:text-2xl text-xl  semi-bold">What Are Cookies</h3>
        <p className="text-slate-200">
          Cookies are small pieces of text sent by your web browser by a website
          you visit. A cookie file is stored in your web browser and allows the
          Service or a third party to recognize you and make your next visit
          easier and the Service more useful to you.
        </p>
        <p className="text-slate-200">
          Cookies can be "persistent" or "session" cookies. They are associated
          with the browser, not the person, so they do not usually store
          sensitive information about you.
        </p>

        <h3 className="md:text-2xl text-xl  semi-bold">How We Use Cookies</h3>
        <p className="text-slate-200">
          When you use and access the Service, we may place a number of cookie
          files in your web browser. We use cookies for various purposes,
          including enabling certain functions of the Service, providing
          analytics, storing preferences, and enabling advertisements delivery,
          including behavioral advertising.
        </p>

        <p className="text-slate-200">
          We use both session and persistent cookies on the Service, and we use
          different types of cookies to run the Service:
        </p>

        <h4>Essential/Technical Cookies</h4>
        <p className="text-slate-200">
          These allow the proper functioning of the web features, such as
          navigating through a web page, controlling traffic, identifying
          sessions, etc.
        </p>

        <h4>Third-party Cookies</h4>
        <p className="text-slate-200">
          The Site may use third-party services, such as Google Analytics, for
          statistical purposes and other related website activities. These
          services may collect information, including IP addresses, and may
          transmit, process, and store such information according to their
          terms.
        </p>

        <h3 className="md:text-2xl text-xl  semi-bold">Manage And Reject</h3>
        <p className="text-slate-200">
          At any time, you can adapt the browser settings to manage, disregard
          the use of Cookies, and be notified before they are downloaded. If
          you'd like to delete or refuse cookies, please visit the help pages of
          your web browser. Note that refusing cookies may impact your ability
          to use certain features of the Service.
        </p>

        <ul className="text-slate-200 list-disc list-inside">
          <li>
            <a href="https://support.google.com/chrome/answer/95647">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies">
              Internet Explorer
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/en-us/HT201265">Apple Safari</a>
          </li>
        </ul>

        <h3 className="md:text-2xl text-xl  semi-bold">More Information</h3>
        <ul className="text-slate-200 list-disc list-inside">
          <li>
            <a href="https://www.allaboutcookies.org/">AllAboutCookies</a>
          </li>
          <li>
            <a href="https://www.networkadvertising.org/">
              Network Advertising Initiative
            </a>
          </li>
        </ul>

        <h3 className="md:text-2xl text-xl  semi-bold">Contact</h3>
        <p className="text-slate-200">
          If you have any questions regarding this Cookie Policy or the
          practices of this Site, please contact us at{" "}
          <a href="mailto:shotune.com@gmail.com">Shotune.com@gmail.com</a>.
        </p>
      </div>
    </section>
  );
};

export default CookiePolicy;
