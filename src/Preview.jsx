import "./Preview.css";
import ReactDom from "react-dom";

function Preview() {
  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="container">
        <header>
          <p className="first-name"></p>
          <p className="last-name"></p>
          <p className="title"></p>
        </header>
        <main>
          <h3 className="about-me"></h3>
          <h3 className="education"></h3>
          <h3 className="experience"></h3>
        </main>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Preview;
