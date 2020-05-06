import NameSpace from 'store/name-spaces';

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => state[NAME_SPACE].isAuthorized;
export const getEmailValidationError = (state) => state[NAME_SPACE].emailValidationError;
export const getEmail = (state) => state[NAME_SPACE].profile.email;
