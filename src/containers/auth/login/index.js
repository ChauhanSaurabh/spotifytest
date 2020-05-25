import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {navigatorPush} from '../../../config/navigationOptions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {moderateScale} from '../../../utils/ResponsiveFonts';
import {loginUser, signupUser} from '../../../actions';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenState: 'signin',
      email: '',
      password: '',
    };
  }

  requestLogin = () => {
    const {email, password} = this.state;

    this.props.loginUser({
      email,
      password,
    });
  };

  requestSignUp = () => {
    const {email, password} = this.state;

    this.props.signupUser({
      email,
      password,
    });
  };

  render() {
    const {loading} = this.props;
    return (
      <KeyboardAwareScrollView style={{flexGrow: 1}}>
        <Text
          style={{
            fontSize: moderateScale(24),
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: moderateScale(30),
          }}>
          SpotifyTest
        </Text>
        <View
          style={{
            alignItems: 'center',
            borderColor: '#dadada',
            borderWidth: moderateScale(1),
            margin: moderateScale(30),
          }}>
          <Text
            style={{
              fontSize: moderateScale(18),
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: moderateScale(30),
            }}>
            {this.state.screenState == 'signin' ? 'SignIn' : 'SignUp'}
          </Text>
          <TextInput
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            keyboardType={'email-address'}
            placeholder={'Enter your email address'}
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
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
            placeholder={'Enter your password'}
            style={{
              height: moderateScale(45),
              width: '80%',
              borderColor: '#dadada',
              borderWidth: moderateScale(1),
              marginTop: moderateScale(30),
              borderRadius: moderateScale(8),
              fontSize: moderateScale(14),
              padding: moderateScale(10),
              marginBottom: moderateScale(30),
            }}
          />
          <TouchableOpacity
            style={{
              height: moderateScale(45),
              width: '80%',
              backgroundColor: 'black',
              borderRadius: moderateScale(8),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            disabled={loading}
            onPress={() => {
              this.state.screenState == 'signin'
                ? this.requestLogin()
                : this.requestSignUp();
            }}>
            {loading ? (
              <ActivityIndicator color={'white'} />
            ) : (
              <Text style={{color: 'white', fontSize: moderateScale(18)}}>
                {this.state.screenState == 'signin' ? 'Sign In' : 'Sign Up'}
              </Text>
            )}
          </TouchableOpacity>
          <View
            style={{marginVertical: moderateScale(30), flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: moderateScale(14),
                textAlign: 'center',
              }}>
              {this.state.screenState == 'signin'
                ? 'Create an account'
                : 'Go To'}
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  screenState:
                    this.state.screenState == 'signin' ? 'signup' : 'signin',
                })
              }>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {' '}
                {this.state.screenState == 'signin' ? 'SIGNUP' : 'SIGNIN'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({loginUser, signupUser}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
