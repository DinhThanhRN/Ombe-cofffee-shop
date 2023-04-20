import {formatTypeField} from './formatTypeField';
import {User} from '../../../interfaces/User';
import {UserData} from '../../../interfaces/User';

interface UserOutput {
  email: any;
  name: any;
  phone: any;
  avatarURL: any;
  location: any;
  favorites: any;
}

const tranferUserDataToUsableUserData = (data: UserOutput): User => {
  const {
    email: emailObj,
    location: locationObj,
    name: nameObj,
    phone: phoneObj,
    avatarURL: avatarUrlObj,
    favorites: favoritesObj,
  } = data;

  const email = emailObj.stringValue;
  const name = nameObj.stringValue;
  const phone = phoneObj.stringValue;
  const location = locationObj.stringValue;
  const avatarURL = avatarUrlObj.stringValue;
  const favorites = favoritesObj.arrayValue.values
    ? favoritesObj.arrayValue.values.map((item: any) => item.stringValue)
    : [];

  return {email, name, phone, location, avatarURL, favorites};
};

const tranferUserDataToUserInputFormat = (data: User) => {
  return {
    fields: {
      name: formatTypeField(data.name),
      phone: formatTypeField(data.phone),
      location: formatTypeField(data.location),
      avatarURL: formatTypeField(data.avatarURL),
      email: formatTypeField(data.email),
      favorites:
        data.favorites.length === 0
          ? {arrayValue: {values: []}}
          : formatTypeField(data.favorites),
    },
  };
};

export {tranferUserDataToUsableUserData, tranferUserDataToUserInputFormat};
