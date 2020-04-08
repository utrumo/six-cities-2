import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator, Operation} from 'store/user/user.js';
import {getEmailValidationError} from 'store/user/selectors.js';

const EMAIL = `email`;
class LoginForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
      isSeended: false,
    };

    this._email = createRef();
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _updateValidationError(validationError) {
    if (validationError) {
      this.setState({isSended: false});
    }

    setTimeout(() => {
      const {current: email} = this._email;
      email.setCustomValidity(validationError);
      email.reportValidity();
    });
  }

  _clearValidationError(name) {
    const {emailValidationError, onEmailChange} = this.props;
    if (name === EMAIL && emailValidationError) {
      onEmailChange(``);
    }
  }

  componentDidUpdate({emailValidationError: prevEmailValidationError}) {
    const {emailValidationError} = this.props;

    if (emailValidationError !== prevEmailValidationError) {
      this._updateValidationError(emailValidationError);
    }
  }

  _handleInputChange({target: {name, value}}) {
    this._clearValidationError(name);
    this.setState({[name]: value});
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {email, password} = this.state;

    this.props.onSubmit(email, password);
    this.setState({isSended: true});
  }

  render() {
    const {_handleFormSubmit, _handleInputChange} = this;
    const {email, password, isSended} = this.state;
    return (
      <form className="login__form form" onSubmit={_handleFormSubmit}>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email"
            name={EMAIL}
            placeholder="Email"
            required
            pattern=".+@.+\..{2,}"
            disabled={isSended}
            value={email}
            onChange={this._handleInputChange}
            ref={this._email}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            disabled={isSended}
            value={password}
            onChange={_handleInputChange}
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
          style={isSended ? {cursor: `default`} : {}}
          disabled={isSended}
        >
        Sign in
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  emailValidationError: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  emailValidationError: getEmailValidationError(state),
});

const mapDispatchToProps = {
  onSubmit: Operation.authorize,
  onEmailChange: ActionCreator.changeEmailValidationMessage,
};

export {LoginForm};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
