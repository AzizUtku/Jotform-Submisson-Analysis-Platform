/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import {
  Route, Switch, withRouter, Redirect,
} from 'react-router-dom';
import Card from '../components/Card/Card';
import Forms from '../components/Forms/Forms';
import Questions from '../components/Questions/Questions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      apiKey: null,
    };
  }

  authenticateHandler = () => {
    const { history } = this.props;

    window.JF.login(
      () => {
        const apiKey = window.JF.getAPIKey();

        this.setState({
          isAuthenticated: true,
          apiKey,
        });

        history.push('/forms', {
          isAuthenticated: true,
          apiKey,
        });
      },
      () => {
        this.setState({
          isAuthenticated: false,
          apiKey: null,
        });
        alert('Could not authorize user');
      }
    );
  };

  render() {
    const { apiKey, isAuthenticated } = this.state;
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
              render={() => <Forms apiKey={apiKey} isAuthenticated={isAuthenticated} />}
            />
          ) : null}

          {isAuthenticated ? (
            <Route
              path="/questions"
              exact
              render={() => <Questions apiKey={apiKey} isAuthenticated={isAuthenticated} />}
            />
          ) : null}

          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
