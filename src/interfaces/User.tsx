interface User {
  name: string;
  email: string;
  phone: string;
  location: string;
  avatarURL: string;
  favorites: Array<string>;
}

interface UserData {
  id: string;
  data: User;
}

export type {User, UserData};
