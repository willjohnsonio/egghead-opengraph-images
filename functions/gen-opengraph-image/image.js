(function (core, Textfit, reactDom) {
  'use strict';

  Textfit = Textfit && Object.prototype.hasOwnProperty.call(Textfit, 'default') ? Textfit['default'] : Textfit;

  /** @jsx jsx */
  function App() {
    return core.jsx("div", {
      css: {
        width: 1200,
        height: 630,
        backgroundImage: "linear-gradient(80deg, rgb(83,72,250),rgb(49,106,255))",
        position: "absolute",
        display: "flex",
        overflow: "hidden"
      }
    }, core.jsx(core.Global, {
      styles: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          fontFamily: "system-ui"
        }
      }
    }), core.jsx("div", {
      css: {
        background: "#041016",
        margin: "40px",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 15,
        padding: "8rem",
        boxShadow: "\n  0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n  0 6.7px 5.3px rgba(0, 0, 0, 0.028),\n  0 12.5px 10px rgba(0, 0, 0, 0.035),\n  0 22.3px 17.9px rgba(0, 0, 0, 0.042),\n  0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n  0 100px 80px rgba(0, 0, 0, 0.07)"
      }
    }, core.jsx("h1", {
      css: {
        color: "#E9F5FB",
        height: "100%",
        textAlign: "center"
      }
    }, core.jsx(Textfit, {
      max: 256,
      min: 24,
      style: {
        minHeight: "80%",
        maxHeight: "80%",
        lineHeight: 1
      }
    }, "What are partials in Ruby on Rails?")), core.jsx("div", {
      css: {
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 36,
        margin: "-5rem"
      }
    }, core.jsx("ul", {
      css: {
        listStyleType: "none",
        display: "flex",
        "& li": {
          marginRight: ".5rem",
          "&:not(:last-child):after": {
            content: "'•'",
            marginLeft: ".5rem"
          }
        }
      }
    }), core.jsx("span", null, "@willjohnsonio"))));
  }

  return App;

}(core, Textfit, reactDom));
