export const getUserFromAuth = (user) => {
    if (user)
      return {
        id: 1,
        uid: user.id,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.avatar,
      };
    return user;
  };
  