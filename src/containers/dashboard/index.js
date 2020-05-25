import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  Dimensions,
  Platform,
} from 'react-native';
import {navigatorPush} from '../../config/navigationOptions';
import {connect} from 'react-redux';
import {moderateScale} from '../../utils/ResponsiveFonts';
import {getDashboardData, logout} from '../../actions';
import {bindActionCreators} from 'redux';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getDashboardData();
  }

  render() {
    const {loading, albums} = this.props;
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 0.1,
            backgroundColor: 'black',
            paddingHorizontal: moderateScale(20),
          }}>
          <TouchableOpacity onPress={() => this.props.logout()}>
            <Text
              style={{
                color: 'white',
                fontSize: moderateScale(16),
                fontWeight: 'bold',
              }}>
              LOGOUT
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.9}}>
          {albums && albums.length > 0 ? (
            <FlatList
              data={albums}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={{
                    height: moderateScale(120),
                    marginHorizontal: moderateScale(20),
                    marginTop: moderateScale(20),
                    borderRadius: moderateScale(8),
                    borderWidth: 1,
                    borderColor: '#dadada',
                    backgroundColor: '#dadada',
                    flexDirection: 'row',
                  }}
                  onPress={() => {
                    navigatorPush({
                      componentId: this.props.componentId,
                      screenName: 'AddNote',
                    });
                  }}
                  key={item.key}>
                  <View style={{flex: 0.3}}>
                    <Image
                      style={{flex: 1}}
                      source={{
                        uri: item.images && item.images[0].url,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.7,
                      justifyContent: 'space-evenly',
                      paddingHorizontal: moderateScale(20),
                    }}>
                    <Text
                      style={{fontSize: moderateScale(16), fontWeight: 'bold'}}>
                      {item.name}
                    </Text>
                    <Text style={{fontSize: moderateScale(14)}}>
                      {item.label}
                    </Text>
                    <Text style={{fontSize: moderateScale(14)}}>
                      Release date: {item.release_date}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>NO RECORD FOUND</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.dashboardReducer.loading,
  albums:
    state.dashboardReducer.albumsData &&
    state.dashboardReducer.albumsData.albums,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({getDashboardData, logout}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
