import React from "react";
import Images from "./Images/react_img.png";
import comparison_angular_React from "./Images/comparison_angular_React.png";

const About = () => {
  return (
    <div className="container">
      <div className="py-4">
        <div>
          <img src={Images} className="img-fluid" alt={Images} />
        </div>
        <h1>What is React?</h1>
        <div className="content">
          React is an open-source JavaScript library used for frontend
          development. It is used for building user interface or UI components.
          Its component-based and declarative traits let developers create
          interactive and complex UIs easily. Developers can build fast and
          scalable apps for all platforms due to its “learn once write anywhere”
          principle. React is managed by Facebook and a community of individual
          developers and communities.
        </div>
      </div>
      <hr />
      <div className="content_tow">
        <div>
          <img
            src={comparison_angular_React}
            className="img-fluid"
            alt={comparison_angular_React}
          />
        </div>
        <hr/>
        <h1>Key Features of React</h1>
        <ul>
<li>Allows you to use 3rd party libraries</li>
<li>Time-Saving</li>
<li>Simplicity and Composable</li>
<li>Fully supported by Facebook.</li>
<li>Better user experience and very fast performance.</li>
<li>Faster Development</li>
<li>Code Stability with One-directional data binding</li>
<li>React Components</li>
</ul>
<div>
    <h1>Advantages of React</h1>
    <ul>
<li>Easy to learn because of its simple Design</li>
<li>The HTML-like syntax for which allows templating, and highly detailed documentation.</li>
<li>Developers can spend more time writing modern JavaScript, and less time worrying about the framework-specific code.</li>
<li>Enhance support for server-side rendering, making it a robust framework for content-focused applications.</li>
<li>Migrating between versions is in React.</li>
<li>Facebook offers  “codemod” feature to automate much of the process.</li>
<li>Skills learned in React can be applied to Native development.</li>
<li>When you combine with ES6/7,  ReactJS is perfect for managing heavy loads with relative ease.</li>
</ul>
</div>
      </div>
    </div>
  );
};

export default About;
