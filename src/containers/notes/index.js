import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {navigatorPush} from '../../config/navigationOptions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {moderateScale} from '../../utils/ResponsiveFonts';
import {Navigation} from 'react-native-navigation';
import {addNewNote} from '../../actions';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }

  addNote = () => {
    const {title, body} = this.state;

    this.props.addNewNote({
      name: title,
      job: body,
    });
  };

  render() {
    const {loading} = this.props;
    return (
      <KeyboardAwareScrollView style={{flexGrow: 1}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => Navigation.pop(this.props.componentId)}>
            <Text
              style={{
                fontSize: moderateScale(14),
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: moderateScale(30),
                marginLeft: moderateScale(20),
              }}>
              Go Back
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: moderateScale(24),
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: moderateScale(30),
              marginLeft: moderateScale(60),
            }}>
            Add Note
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            borderColor: '#dadada',
            borderWidth: moderateScale(1),
            margin: moderateScale(30),
          }}>
          <TextInput
            value={this.state.title}
            onChangeText={(title) => this.setState({title})}
            placeholder={'Enter note title'}
            style={{
              height: moderateScale(45),
              width: '80%',
              borderColor: '#dadada',
              borderWidth: moderateScale(1),
              marginTop: moderateScale(30),
              borderRadius: moderateScale(8),
              fontSize: moderateScale(14),
              padding: moderateScale(10),
            }}
            autoCapitalize={'none'}
          />
          <TextInput
            value={this.state.body}
            onChangeText={(body) => this.setState({body})}
            placeholder={'Enter note body'}
            numberOfLines={20}
            style={{
              height: moderateScale(45),
              width: '80%',
              borderColor: '#dadada',
              borderWidth: moderateScale(1),
              marginTop: moderateScale(30),
              borderRadius: moderateScale(8),
              fontSize: moderateScale(14),
              padding: moderateScale(10),
            }}
            autoCapitalize={'none'}
          />
          <TouchableOpacity
            style={{
              height: moderateScale(45),
              width: '80%',
              backgroundColor: 'black',
              borderRadius: moderateScale(8),
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: moderateScale(30),
            }}
            disabled={loading}
            onPress={() => this.addNote()}>
            {loading ? (
              <ActivityIndicator color={'white'} />
            ) : (
              <Text style={{color: 'white', fontSize: moderateScale(18)}}>
                ADD NOTE
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.dashboardReducer.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({addNewNote}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
