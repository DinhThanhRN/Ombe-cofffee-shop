import storage from '@react-native-firebase/storage';

const getImageFromStorage = async (path: string) => {
  return await storage().ref(path).getDownloadURL();
};

export {getImageFromStorage};
