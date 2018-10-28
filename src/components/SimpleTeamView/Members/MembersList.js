import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import MembersItem from './MembersItem';

import * as actions from '../../../actions';

class MembersList extends React.Component {
  render() {
    const { members, limitMembers, showAll } = this.props;

    return (
      !showAll
        ? (
          members.slice(0, limitMembers).map((item, index) => (
            <MembersItem
              item={ item }
              key={ `item_${index + 1}` }
            />
          ))
        ) : (
          members.map((item, index) => (
            <MembersItem
              item={ item }
              key={ `item_${index + 1}` }
            />
          ))
        )
    );
  }
}

MembersList.defaultProps = {
  members: [],
  limitMembers: 5,
  showAll: false,
};

MembersList.propTypes = {
  members: PropTypes.instanceOf(Array),
  limitMembers: PropTypes.number,
  showAll: PropTypes.bool,
};

export default compose(connect(store => ({
  members: store.MembersReducer.members,
}), {
  ...actions,
}))(MembersList);
