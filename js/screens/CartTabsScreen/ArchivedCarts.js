import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class ArchivedCarts extends React.Component {
  render() {
    return <Text>{this.props.archivedText}</Text>;
  }
}

const mapStateToProps = props => props;

const ArchivedCartsContainer = connect(mapStateToProps)(ArchivedCarts);
export default ArchivedCartsContainer;
