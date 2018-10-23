import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

class Layout extends React.Component {
  handleNavigation(route) {
    const { history } = this.props;
    history.push(route);
  }

  render() {
    const { children } = this.props;
    
    return (
      <div className="all">
        { children }
      </div>
    );
  }
}

Layout.propTypes = {
  history: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default withRouter(Layout);
