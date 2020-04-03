import React, {PureComponent, createRef} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Classes = {
  HEADER: `places__sorting-type`,
  OPTIONS: `places__options`,
  OPTIONS_OPENED: `places__options--opened`,
  OPTION: `places__option`,
  OPTION_ACTIVE: `places__option--active`,
};

const Events = {
  CLICK: `click`,
  KEY_DOWN: `keydown`,
};

const Keys = {
  SPACE: ` `,
  ENTER: `Enter`,
  ESCAPE: `Escape`,
  TAB: `Tab`,
  ARROW_UP: `ArrowUp`,
  ARROW_DOWN: `ArrowDown`,
  ARROW_RIGHT: `ArrowRight`,
  ARROW_LEFT: `ArrowLeft`,
};

const STEP = 1;
const FIRST_INDEX = 0;

class CustomSelect extends PureComponent {
  constructor(props) {
    super(props);
    const {value, options} = this.props;
    let index = 0;

    if (value) {
      index = options.indexOf(value);
    }

    this.state = {
      isOpened: false,
      index,
    };

    this._select = createRef();
    this._close = this._close.bind(this);
    this._handleSelectKeyDown = this._handleSelectKeyDown.bind(this);
    this._handleSelectClick = this._handleSelectClick.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
    this._handleOptionClick = this._handleOptionClick.bind(this);
  }

  get _value() {
    const {options} = this.props;
    const {index} = this.state;
    return options[index];
  }

  set _value(value) {
    const {options} = this.props;
    const newIndex = options.indexOf(value);
    this.setState({index: newIndex});
  }

  componentDidUpdate({value: prevValue}, {index: prevIndex}) {
    const {index} = this.state;
    const {onChange, value} = this.props;

    if (value !== prevValue) {
      this._value = value;
    }

    if (index !== prevIndex) {
      onChange(this._value);
    }
  }

  _handleSelectKeyDown(evt) {
    const {key} = evt;
    const {isOpened} = this.state;

    switch (key) {
      case Keys.SPACE:
        evt.preventDefault();
        this._open();
        break;

      case Keys.ESCAPE:
        this._close();
        break;

      case Keys.TAB:
        if (isOpened) {
          evt.preventDefault();
          this._close();
        }
        break;

      case Keys.ENTER:
        this._toggle();
        break;

      case Keys.ARROW_DOWN:
      case Keys.ARROW_RIGHT:
        evt.preventDefault();

        if (isOpened && key === Keys.ARROW_RIGHT) {
          break;
        }

        this._next();
        break;

      case Keys.ARROW_UP:
      case Keys.ARROW_LEFT:
        evt.preventDefault();

        if (isOpened && key === Keys.ARROW_LEFT) {
          break;
        }

        this._prev();
        break;
    }
  }

  _handleSelectClick() {
    this._toggle();
  }

  _handleDocumentClick({target}) {
    const {current} = this._select;


    if (!current.contains(target)) {
      this._close();
    }
  }

  _handleOptionClick(newIndex) {
    this.setState({index: newIndex});
    this._close();
  }

  _open() {
    document.addEventListener(Events.CLICK, this._handleDocumentClick);
    this.setState({isOpened: true});
  }

  _close() {
    document.removeEventListener(Events.CLICK, this._handleDocumentClick);
    this.setState({isOpened: false});
  }

  _toggle() {
    const {isOpened} = this.state;

    if (isOpened) {
      this._close();
      return;
    }

    this._open();
  }

  _next() {
    const {options: {length}} = this.props;
    const lastIndex = length - 1;

    this.setState(({index: oldIndex}) => {
      const newIndex = oldIndex + STEP;
      return {index: newIndex <= lastIndex ? newIndex : oldIndex};
    });
  }

  _prev() {
    this.setState(({index: oldIndex}) => {
      const newIndex = oldIndex - STEP;
      return {index: newIndex >= FIRST_INDEX ? newIndex : oldIndex};
    });
  }

  render() {
    const {_value} = this;
    const {isOpened} = this.state;
    const {label, options} = this.props;
    return (
      <label>
        <span className="places__sorting-caption">{label}</span>
        {` `}
        <span
          className={Classes.HEADER}
          tabIndex="0"
          ref={this._select}
          onKeyDown={this._handleSelectKeyDown}
          onClick={this._handleSelectClick}
        >
          {_value}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={classNames(
            Classes.OPTIONS,
            `places__options--custom`,
            {[Classes.OPTIONS_OPENED]: isOpened}
        )}>
          {options.map((it, i) => (
            <li
              key={it}
              onClick={() => this._handleOptionClick(i)}
              className={classNames(Classes.OPTION, {[Classes.OPTION_ACTIVE]: it === _value})}
            >
              {it}
            </li>
          ))}
        </ul>
      </label>
    );
  }
}

CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default CustomSelect;
export {Classes, Events, Keys};
