import React from 'react';
import Avatar from 'react-native-elements/src/avatar/Avatar';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


import { List, ListItem} from 'react-native-elements'

const list = [
  {
    name: 'Aloo',
    avatar_url: 'data:image/jpeg;base64,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',
    subtitle: 'Fresh AF',
    price:'30'
  },
  {
    name: 'Kheera',
    avatar_url: 'https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ni8yMTkvb3JpZ2luYWwvY3VjdW1iZXJzLmpwZw==',
    subtitle: 'Fresh AF, from murree',
    price : '40'
  },
  {
    name: 'Tomatoes',
    avatar_url: 'http://www.mymobfit.com/wp-content/uploads/2016/05/Tomatoe.jpg',
    subtitle: 'Fresh AF',
    price : '40'
  },
  {
    name: 'gajar',
    avatar_url: 'https://media.istockphoto.com/photos/carrot-picture-id619252960?k=6&m=619252960&s=612x612&w=0&h=XbDTdt5CUVpw2V9RrnPJ9q5Ua-52ie1KpUAOf5EQdMw=',
    subtitle: 'Fresh AF',
    price : '40'
  },
  {
    name: 'Moli',
    avatar_url: 'https://www.theayurveda.org/wp-content/uploads/2015/07/White-radish-with-leaves.jpg',
    subtitle: 'Fresh AF',
    price : '40'
  },
  {
    name: 'Thipar',
    avatar_url: 'https://5.imimg.com/data5/IP/TH/MY-30125612/fresh-turnip-500x500.jpg',
    subtitle: 'Fresh AF, form the farms of UK',
    price : '40'
  },
 ]


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <View style={styles.container}>

       <View style={styles.welcomeContainer}>
          <Image style={styles.welcomeImage} source={require('../assets/images/vege.png')} />
          <Text fontSize={30}>Vegetables</Text>
        </View>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          

          <List containerStyle={{marginBottom: 20}}>
            {
              list.map((l) => (
                <ListItem
                  avatar={<Avatar
                    large
                    source={l.avatar_url && {uri: l.avatar_url}}
                    title={l.name[0]}
                  />}
                  key={l.name}
                  title={l.name}
                  chevron
                  subtitle={l.subtitle}
                  rightTitle={l.price+' PKR / KG'}
                  bottomDivider
                  rightIcon={{name : 'add-shopping-cart'}}
                />
              ))
            }
          </List>

        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:10
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    
  },
  welcomeImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
