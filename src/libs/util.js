let util = {

  };
  util.title = function (title) {
      title = title ? title  : 'iVews';
      window.document.title = title;
  };

  export default util;