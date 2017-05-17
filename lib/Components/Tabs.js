'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding: 20px;\n  margin-top: 10px;\n  position: relative;\n\n  @media (max-width: 768px) {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      padding: 0;\n      margin-top: 10px;\n  }\n'], ['\n  padding: 20px;\n  margin-top: 10px;\n  position: relative;\n\n  @media (max-width: 768px) {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      padding: 0;\n      margin-top: 10px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: flex-end;\n  top: 20px;\n  height: 50px;\n  overflow-x: scroll;\n\n  @media (max-width: 768px) {\n      height: auto;\n      position: initial;\n      display: flex;\n      max-width: 100%;\n      ', '\n      -ms-overflow-style: none;\n      overflow: -moz-scrollbars-none;\n      &::-webkit-scrollbar {\n        ', '\n        display: none;\n      }\n  }\n'], ['\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: flex-end;\n  top: 20px;\n  height: 50px;\n  overflow-x: scroll;\n\n  @media (max-width: 768px) {\n      height: auto;\n      position: initial;\n      display: flex;\n      max-width: 100%;\n      ', '\n      -ms-overflow-style: none;\n      overflow: -moz-scrollbars-none;\n      &::-webkit-scrollbar {\n        ', '\n        display: none;\n      }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  white-space: nowrap;\n  background: ', ';\n  border-top: 1px solid black;\n  border-right: 1px solid black;\n  border-left: 1px solid black;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  height: ', ';\n  margin-right: 3px;\n  margin-top: 1px;\n  transition: all 0.17s ease;\n\n  &:hover {\n    background: ', ';\n  }\n\n  @media (max-width: 768px) {\n    position: relative;\n    margin-right: 0px;\n    border-left: none;\n    height: 45px;\n    border-radius: 0px;\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  white-space: nowrap;\n  background: ', ';\n  border-top: 1px solid black;\n  border-right: 1px solid black;\n  border-left: 1px solid black;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  height: ', ';\n  margin-right: 3px;\n  margin-top: 1px;\n  transition: all 0.17s ease;\n\n  &:hover {\n    background: ', ';\n  }\n\n  @media (max-width: 768px) {\n    position: relative;\n    margin-right: 0px;\n    border-left: none;\n    height: 45px;\n    border-radius: 0px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 25px;\n  height: 45px;\n  display: none;\n  position: absolute;\n  right: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1;\n  opacity: ', ';\n  transition: opacity 0.25s ease;\n  pointer-events: none;\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    border-top: 7px solid transparent;\n    border-bottom: 7px solid transparent;\n    border-left: 7px solid white;\n    z-index: 2;\n  }\n\n  @media (max-width: 768px) {\n    display: block;\n  }\n'], ['\n  width: 25px;\n  height: 45px;\n  display: none;\n  position: absolute;\n  right: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1;\n  opacity: ', ';\n  transition: opacity 0.25s ease;\n  pointer-events: none;\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    border-top: 7px solid transparent;\n    border-bottom: 7px solid transparent;\n    border-left: 7px solid white;\n    z-index: 2;\n  }\n\n  @media (max-width: 768px) {\n    display: block;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width: 25px;\n  height: 45px;\n  display: none;\n  position: absolute;\n  left: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1;\n  opacity: ', ';\n  transition: opacity 0.25s ease;\n  pointer-events: none;\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    border-top: 7px solid transparent;\n    border-bottom: 7px solid transparent;\n    border-right: 7px solid white;\n    z-index: 2;\n  }\n\n  @media (max-width: 768px) {\n    display: block;\n  }\n'], ['\n  width: 25px;\n  height: 45px;\n  display: none;\n  position: absolute;\n  left: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1;\n  opacity: ', ';\n  transition: opacity 0.25s ease;\n  pointer-events: none;\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    border-top: 7px solid transparent;\n    border-bottom: 7px solid transparent;\n    border-right: 7px solid white;\n    z-index: 2;\n  }\n\n  @media (max-width: 768px) {\n    display: block;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  height: 100%;\n  width: 100%;\n  display: flex;\n  padding: ', ';\n  transition: all 0.17s ease;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  box-sizing: border-box;\n\n  @media (max-width: 768px) {\n    padding: 10px 15px;\n  }\n'], ['\n  height: 100%;\n  width: 100%;\n  display: flex;\n  padding: ', ';\n  transition: all 0.17s ease;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  box-sizing: border-box;\n\n  @media (max-width: 768px) {\n    padding: 10px 15px;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: block;\n  color: ', ';\n'], ['\n  display: block;\n  color: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  position: relative;\n  border: 1px solid black;\n  transition: height 0.3s ease;\n  height: auto;\n  padding: 20px;\n  margin-top: 50px;\n  transition: height 0.3s ease;\n\n  @media (max-width: 768px) {\n    margin-top: 0px;\n    border-width: 1px 0px;\n  }\n'], ['\n  position: relative;\n  border: 1px solid black;\n  transition: height 0.3s ease;\n  height: auto;\n  padding: 20px;\n  margin-top: 50px;\n  transition: height 0.3s ease;\n\n  @media (max-width: 768px) {\n    margin-top: 0px;\n    border-width: 1px 0px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _reactRouterDom = require('react-router-dom');

var _Pane = require('./Pane');

var _Pane2 = _interopRequireDefault(_Pane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);
var TabBar = _styledComponents2.default.div(_templateObject2, '' /* border-top: 1px solid black; */, '' /* width: 0 !important; */);
var Tab = _styledComponents2.default.div(_templateObject3, function (props) {
    return props.active ? props.theme.primary ? props.theme.primary : '#15317e' : props.theme.secondary ? props.theme.secondary : '#A3BAE9';
}, function (props) {
    return props.active ? '45px' : '35px';
}, function (props) {
    return !props.active && props.theme.secondary ? (0, _polished.lighten)(0.1, props.theme.secondary) : '#15317e';
});
var RightArrow = _styledComponents2.default.div(_templateObject4, function (props) {
    return props.visible ? 1 : 0;
});
var LeftArrow = _styledComponents2.default.div(_templateObject5, function (props) {
    return props.visible ? 1 : 0;
});
var Link = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject6, function (props) {
    return props.active ? '10px 20px' : '10px 15px';
});
var Text = _styledComponents2.default.p(_templateObject7, function (props) {
    return props.active ? props.theme.tabText ? props.theme.tabText : 'white' : props.theme.secondaryTabText ? props.theme.secondaryTabText : 'black';
});
var Content = _styledComponents2.default.div(_templateObject8);

var theme = {
    primary: '#15317e',
    secondary: '#A3BAE9',
    tabText: 'white'
};

var Tabs = function (_Component) {
    _inherits(Tabs, _Component);

    function Tabs() {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

        _this.renderTabs = function () {
            var _this$props = _this.props,
                tabs = _this$props.tabs,
                match = _this$props.match;
            var pathname = _this.props.location.pathname;

            var loc = pathname.split('/')[pathname.split('/').length - 1];
            return tabs.map(function (tab, i) {
                var active = loc === tab.link ? true : false;
                return _react2.default.createElement(
                    Tab,
                    {
                        key: i,
                        active: active
                    },
                    _react2.default.createElement(
                        Link,
                        { to: match.url + '/' + tab.link, active: active },
                        _react2.default.createElement(
                            Text,
                            { active: active },
                            tab.title
                        )
                    )
                );
            });
        };

        _this.fromTop = function () {
            var _this$props2 = _this.props,
                location = _this$props2.location,
                tabs = _this$props2.tabs;

            var loc = location.pathname.split('/')[location.pathname.split('/').length - 1];
            for (var i = 0; i < tabs.length; i++) {
                if (loc === tabs[i].link) {
                    return true;
                }
            }
            return false;
        };

        _this.handleScroll = function (e) {
            var scrollPos = _this.state.scrollPos;

            var max = _this.tabBar.scrollWidth - _this.tabBar.clientWidth;
            if (e.target.scrollLeft < 15 && scrollPos != 'left') {
                _this.setState({
                    scrollPos: 'left'
                });
            } else if (e.target.scrollLeft > max - 15 && scrollPos != 'right') {
                _this.setState({
                    scrollPos: 'right'
                });
            } else if (e.target.scrollLeft > 15 && e.target.scrollLeft < max - 15) {
                _this.setState({
                    scrollPos: 'middle'
                });
            }
        };

        _this.handleResize = function (e) {
            var scrollPos = _this.state.scrollPos;

            if (_this.tabBar.scrollWidth <= _this.tabBar.clientWidth && scrollPos != 'none') {
                console.log('kek');
                _this.setState({
                    scrollPos: 'none'
                });
            }
        };

        _this.state = {
            scrollPos: 'left'
        };
        return _this;
    }

    _createClass(Tabs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.tabBar.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.tabBar.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                match = _props.match,
                tabs = _props.tabs,
                location = _props.location;
            var scrollPos = this.state.scrollPos;

            return _react2.default.createElement(
                _styledComponents.ThemeProvider,
                { theme: theme },
                _react2.default.createElement(
                    Container,
                    null,
                    !this.fromTop() && _react2.default.createElement(_reactRouterDom.Redirect, { to: match.url + '/' + tabs[0].link }),
                    _react2.default.createElement(
                        TabBar,
                        { innerRef: function innerRef(el) {
                                return _this2.tabBar = el;
                            } },
                        _react2.default.createElement(LeftArrow, { visible: scrollPos != 'left' && scrollPos != 'none' ? true : false, pos: 'left' }),
                        this.renderTabs(),
                        _react2.default.createElement(RightArrow, { visible: scrollPos != 'right' && scrollPos != 'none' ? true : false, pos: 'right' })
                    ),
                    _react2.default.createElement(
                        Content,
                        { innerRef: function innerRef(el) {
                                return _this2.content = el;
                            } },
                        _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/:tab', component: function component(props) {
                                return _react2.default.createElement(_Pane2.default, _extends({}, props, { tabs: tabs }));
                            } })
                    )
                )
            );
        }
    }]);

    return Tabs;
}(_react.Component);

Tabs.displayName = 'Tabs';
exports.default = Tabs;