import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div className="text-center m-4 p-4">
      <div className="font-bold text-3xl sm:text-2xl my-8 sm:my-6">
        Contact Us
      </div>
      <div className="text-xl sm:text-2xl w-auto text-themePurple">
        <div className="email my-6 px-2">
          Email:<span className="font-bold px-2">pmdfarhan@gmail.com</span>
        </div>
        <div className="my-6">
          <a
            className="font-bold text-xl px-3 py-2 rounded bg-themePurple text-white"
            href="https://github.com/FarhanP"
            target="_self"
            role="button"
          >
            Github
            <FontAwesomeIcon className="px-2" icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
