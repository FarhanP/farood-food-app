import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="text-center m-4 p-4">
      <div className="font-bold text-3xl sm:text-2xl my-8 sm:my-6">
        Contact Me
      </div>
      <div className="text-xl sm:text-2xl flex sm:w-6/12 sm:m-auto  flex-col text-themePurple">
        <a
          className="font-bold my-6 px-5 py-2 rounded bg-themePurple text-white"
          href="mailto:pmdfarhan@gmail.com"
          target="_tab"
          role="button"
        >
          Email
          <FontAwesomeIcon className="px-2" icon={faEnvelope} />
        </a>
        <a
          className="font-bold my-6 px-5 py-2 rounded bg-themePurple text-white"
          href="https://github.com/farhanp"
          target="_tab"
          role="button"
        >
          Github
          <FontAwesomeIcon className="px-2" icon={faGithub} />
        </a>
        <a
          className="font-bold my-6 px-5 py-2 rounded bg-themePurple text-white"
          href="https://x.com/farhancodes"
          target="_tab"
          role="button"
        >
          X (Twitter)
          <FontAwesomeIcon className="px-2" icon={faXTwitter} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
