/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import {
  Route, Switch, withRouter, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import Card from '../components/Card/Card';
import Main from '../components/Main/Main';
import './App.scss';

const propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  onSetApiKey: PropTypes.func.isRequired,
  onSetIsAuthenticated: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

class App extends React.Component {
  authenticateHandler = () => {
    const { history, onSetApiKey, onSetIsAuthenticated } = this.props;
    window.JF.login(
      () => {
        const apiKey = window.JF.getAPIKey();

        onSetApiKey(apiKey);
        onSetIsAuthenticated(true);

        history.push('/forms');
      },
      () => {
        onSetApiKey(null);
        onSetIsAuthenticated(false);
        alert('Could not authorize user');
      }
    );
  };

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Card title="Authentication" content="Please sign in to continue!">
                <button type="button" className="btnLogin" onClick={this.authenticateHandler}>
                  Sign in
                </button>
              </Card>
            )}
          />

          {isAuthenticated ? (
            <Route
              path="/forms"
              exact
              render={() => <Main />}
            />
          ) : null}

          {isAuthenticated ? (
            <Route
              path="/questions"
              exact
              render={() => <Main />}
            />
          ) : null}

          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  apiKey: state.auth.apiKey,
});

const mapDispatchToProps = dispatch => ({
  onSetApiKey: apiKey => dispatch(actionCreators.setApiKey(apiKey)),
  onSetIsAuthenticated: isAuthenticated => dispatch(actionCreators.setIsAuthenticated(isAuthenticated)),
});

App.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
