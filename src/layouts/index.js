import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

class Layout extends React.Component {
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
  children: PropTypes.element.isRequired,
};

export default withRouter(Layout);
