import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, ViewStyle} from 'react-native';

import IconButton from '../../ui/atoms/IconButton';
import {Colors} from '../../../config/colors';
import {getImageFromStorage} from '../../../utils/functions/getImageFromStorage';
import Header from '../../ui/molecules/Header';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../reducers/store';
import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from '../../../reducers/user';
import {updateUserInfor} from '../../../utils/functions/database/user/updateUserInfor';

interface Props {
  name: string;
  imageURL: string;
  containerStyle?: ViewStyle;
}
type UpdateMode = 'add' | 'remove';

const TopPart = ({name, imageURL, containerStyle}: Props): JSX.Element => {
  // Get image for background
  const [image, setImage] = useState('');
  useEffect(() => {
    getImageFromStorage(imageURL)
      .then(response => setImage(response))
      .catch(error => {
        // console.log('Get image faild');
      });
  }, [imageURL]);

  const {token} = useSelector((state: RootState) => state.authentication);
  const {user} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const isIn = user.data.favorites.includes(name);

  const [isInFavorites, setInFavorites] = useState(isIn);
  useEffect(() => {
    setInFavorites(isIn);
  }, [isIn]);

  const updateFavorites = async (mode: UpdateMode) => {
    if (mode === 'remove') {
      const pseudoUser = JSON.parse(JSON.stringify(user));
      const index = pseudoUser.data.favorites.findIndex(
        (item: string) => item === name,
      );
      pseudoUser.data.favorites.splice(index, 1);
      const reponse = await updateUserInfor(pseudoUser, token);
      dispatch(removeFavoriteProduct({name}));
    } else if (mode === 'add') {
      const pseudoUser = JSON.parse(JSON.stringify(user));
      pseudoUser.data.favorites.push(name);
      const reponse = await updateUserInfor(pseudoUser, token);
      dispatch(addFavoriteProduct({name}));
    }
  };

  const renderLeftIcon = () => {
    return (
      <IconButton
        name={isInFavorites ? 'bookmark' : 'bookmark-outline'}
        color={Colors.white}
        size={48}
        onPress={() => {
          if (isInFavorites) updateFavorites('remove');
          else updateFavorites('add');
          setInFavorites(!isInFavorites);
        }}
        style={{opacity: 0.2}}
      />
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Header
        title="Details"
        color={Colors.white}
        renderLeftIcon={renderLeftIcon}
      />
      <View style={styles.imageContainer}>
        {image && <Image source={{uri: image}} style={styles.image} />}
      </View>
    </View>
  );
};

export default TopPart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.theme,
    width: '100%',
    height: '40%',
    padding: 8,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: 0,
    borderRadius: 20,
  },
});
