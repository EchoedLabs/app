import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Linking,
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';

export default class InfoScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'Camps',
    },
  }

  render() {
    let data = [
      {title: "Web Development Bootcamp l", link: "https://echoedlabs.github.io"},
      {title: "Web Development Bootcamp 2.0 l", link: "https://echoedlabs.github.io"}
    ]
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        {data.map(d => <List data={d} key={d.title}/>)}

      </ScrollView>
    );
  }
}

const go = link => Linking.openURL(link)

const List = props => (
  <TouchableOpacity style={styles.optionsContainer} onPress={() => go(props.data.link)}>
    <View style={styles.option}>
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionText}>
           {props.data.title}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionsContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.02)',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
