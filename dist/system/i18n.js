System.register(["i18next", "./utils"], function (_export) {
  var i18n, assignObjectToKeys, _createClass, _classCallCheck, I18N;

  return {
    setters: [function (_i18next) {
      i18n = _i18next["default"];
    }, function (_utils) {
      assignObjectToKeys = _utils.assignObjectToKeys;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      I18N = _export("I18N", (function () {
        function I18N() {
          _classCallCheck(this, I18N);

          this.i18next = i18n;
          this.Intl = window.Intl;

          // check whether Intl is available, otherwise load the polyfill
          if (window.Intl === undefined) {
            System["import"]("Intl").then(function (poly) {
              window.Intl = poly;
            });
          }
        }

        _createClass(I18N, {
          setup: {
            value: function setup(options) {
              var defaultOptions = {
                resGetPath: "locale/__lng__/__ns__.json",
                lng: "en",
                getAsync: false,
                sendMissing: false,
                fallbackLng: "en",
                debug: false
              };

              i18n.init(options || defaultOptions);
            }
          },
          setLocale: {
            value: function setLocale(locale) {
              var _this = this;

              return new Promise(function (resolve) {
                _this.i18next.setLng(locale, resolve);
              });
            }
          },
          getLocale: {
            value: function getLocale() {
              return this.i18next.lng();
            }
          },
          nf: {
            value: function nf(options, locales) {
              return new this.Intl.NumberFormat(locales || this.getLocale(), options);
            }
          },
          df: {
            value: function df(options, locales) {
              return new this.Intl.DateTimeFormat(locales || this.getLocale(), options);
            }
          },
          tr: {
            value: function tr(key, options) {
              return this.i18next.t(key, assignObjectToKeys("", options));
            }
          }
        });

        return I18N;
      })());
    }
  };
});