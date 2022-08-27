// https://github.com/expo/react-native-community-cli/blob/master/docs/autolinking.md#how-can-i-disable-autolinking-for-unsupported-library
module.exports = {
  dependencies: {
    'expo': {
      platforms: {
        android: null,
        ios: null,
      },
    },
  },
};
