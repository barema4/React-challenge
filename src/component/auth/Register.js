import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/AuthActions';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      user_name: '',
      email: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.errors.message == "Account created successfully") {
      window.location.href = '/login';
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      user_name: this.state.user_name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.registerUser(newUser),
      this.setState({ user_name: '', email: '', password: '' });
  }

  render() {
    const { errors } = this.state;

    return (
      <section id="register" className="flex-grow-1">
        <div className="container" id="registration-container">
          <div className="row">
            <div className="header">
              <h1>Please signup with fast food fast</h1>
              <form noValidate onSubmit={this.onSubmit} className="form">
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.user_name
                    })}
                    placeholder="Username"
                    name="user_name"
                    value={this.state.user_name}
                    onChange={this.onChange}
                  />
                  {errors.user_name && (
                    <div className="invalid-feedback">{errors.user_name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                    placeholder="email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4 zeus-color"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Register.propType = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    auth: state.auth.isAuthenticated,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
