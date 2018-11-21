import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class CurrentCarts extends React.Component {
  render() {
    return <Text>{this.props.currentText}</Text>;
  }
}

const mapStateToProps = props => props;

const CurrentCartsContainer = connect(mapStateToProps)(CurrentCarts);
export default CurrentCartsContainer;
