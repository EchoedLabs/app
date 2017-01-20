import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'My Screen',
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        { /* Go ahead and delete ExponentLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */ }
           <Text style={styles.getStartedText}>
            This is a test!v uyhj
           </Text>

      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  getStartedText: {
    color: "#333"
  }
});
