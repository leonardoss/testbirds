import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import MembersItem from './MembersItem';

import * as actions from '../../../actions';

class MembersList extends React.Component {
  render() {
    const { members } = this.props;

    return (
      !this.props.showAll
        ? (
          members.slice(0, this.props.limitMembers).map((item, index) => (
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

MembersList.propTypes = {
  members: PropTypes.array,
  limitMembers: PropTypes.number,
  toogleShowAll: PropTypes.func,
};

export default compose(connect(store => ({
  members: store.MembersReducer.members,
}), {
  ...actions,
}))(MembersList);
