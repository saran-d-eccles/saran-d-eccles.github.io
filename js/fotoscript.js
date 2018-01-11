//Code adapted from https://blog.alexdevero.com/learn-react-practice-create-gallery/

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Cache gallery container
var galleryContainer = document.querySelector('.react-gallery');

// Create new array with URLs for images
var imgUrls = ['../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/',
              '../drawings/'];

var descArray = ["First photo",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""];

// Component for gallery image

var GalleryImage = function (_React$Component) {
  _inherits(GalleryImage, _React$Component);

  function GalleryImage() {
    _classCallCheck(this, GalleryImage);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  GalleryImage.prototype.render = function render() {
    return React.createElement('img', { className: this.props.className, src: this.props.src, alt: this.props.alt });
  };

  return GalleryImage;
}(React.Component);

// Component for gallery modal

var GalleryModal = function (_React$Component2) {
  _inherits(GalleryModal, _React$Component2);

  function GalleryModal() {
    _classCallCheck(this, GalleryModal);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  GalleryModal.prototype.render = function render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return React.createElement(
      'div',
      { isOpen: this.props.isOpen, className: 'modal-overlay', onClick: this.props.onClick, name: this.props.name },
      React.createElement(
        'div',
        { className: 'modal-body' },
        React.createElement(
          'a',
          { className: 'modal-close', href: '#', onClick: this.props.onClick },
          React.createElement('span', { className: 'fa fa-times' })
        ),
        React.createElement('img', { src: this.props.src })
      )
    );
  };

  return GalleryModal;
}(React.Component);

// Component for gallery

var Gallery = function (_React$Component3) {
  _inherits(Gallery, _React$Component3);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this3 = _possibleConstructorReturn(this, _React$Component3.call(this, props));

    _this3.state = {
      showModal: false,
      url: ''
    };

    _this3.openModal = _this3.openModal.bind(_this3);

    _this3.closeModal = _this3.closeModal.bind(_this3);
    return _this3;
  }

  Gallery.prototype.render = function render() {
    var _this4 = this;

    return React.createElement(
      'div',
      { refs: 'gallery-container', className: 'container-fluid gallery-container' },
      React.createElement(
        'div',
        { className: 'row' },
        imgUrls.map(function (url, index) {
          return React.createElement(
            'div',
            { className: 'col-sm-6 col-md-3 col-xl-2' },
            React.createElement(
              'div',
              { className: 'gallery-card' },
              React.createElement(GalleryImage, { className: 'gallery-thumbnail', src: url, alt: 'Image number ' + (index + 1) }),
              React.createElement('span', { className: 'card-icon-open fa fa-expand', value: url, onClick: function onClick(e) {
                  return _this4.openModal(url, e);
                } }),
              React.createElement('p', {id: 'p '+index}, descArray[index])
            )
          );
        })
      ),
      React.createElement(GalleryModal, { isOpen: this.state.showModal, onClick: this.closeModal, src: this.state.url })
    );
  };

  // Function for opening modal dialog

  Gallery.prototype.openModal = function openModal(url, e) {
    this.setState({
      showModal: true,
      url: url
    });
  };

  // Function for closing modal dialog

  Gallery.prototype.closeModal = function closeModal() {
    this.setState({
      showModal: false,
      url: ''
    });
  };

  return Gallery;
}(React.Component);

// Let's render the whole thing

ReactDOM.render(React.createElement(Gallery, { imgUrls: imgUrls }), galleryContainer);
