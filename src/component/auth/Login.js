import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/AuthActions';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors:{}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors})
    }
    else {
      window.localStorage.setItem('token', loginUser.nextProps.user.token);
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <section id="login" className="flex-grow-1">
        <div className="container" id="registration-container">
          <div className="row">
            <div className="header">
              <h3 className="display-5 text-center">Welcome To Fast Food Fast</h3>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                    placeholder="Email Address"
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
                      'is-invalid': errors.Password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.Password && (
                    <div className="invalid-feedback">{errors.Password}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4 zeus-color"
                />
                
              </form>
              <div>
                <Link to="/register">Please Sign Up here if you donot have account</Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
Login.propType = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};
export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
