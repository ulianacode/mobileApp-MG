import axios from 'axios';
import { API_URL, tokens, auth } from '../variables/ip';

const refreshTokens = async () => {
  try {
    const response = await axios.post(`http://${API_URL}:8082/v1/auth/refresh`, {
      refreshToken: tokens.refreshToken,
    });

    if (response.status === 200) {
      const { accessToken, expiresIn, refreshToken, refreshExpiresIn, username, role  } = response.data;

      tokens.accessToken = accessToken;
      tokens.expiresIn = expiresIn;
      tokens.refreshToken = refreshToken;
      tokens.refreshExpiresIn = refreshExpiresIn;
      tokens.username = username;
      tokens.role = role;

      // Schedule the next refresh
      scheduleTokenRefresh(expiresIn, refreshExpiresIn);

      console.log('Tokens refreshed successfully');
      auth.status = true;

      console.log('user: ',tokens.username);
    } else {

      console.error('Failed to refresh tokens');
      auth.status = false;
    }
  } catch (error) {
    console.error('Error refreshing tokens:', error);
    auth.status = false;
  }
};

const scheduleTokenRefresh = (accessTokenExpiresIn, refreshTokenExpiresIn) => {
  // Convert expiration times to milliseconds
  const accessTokenTimeout = accessTokenExpiresIn * 1000;
  const refreshTokenTimeout = refreshTokenExpiresIn * 1000;

  // Schedule the access token refresh
  setTimeout(refreshTokens, accessTokenTimeout);

  // Schedule the refresh token expiration check
  setTimeout(() => {
  }, refreshTokenTimeout);

  console.log('Auth status: ', auth.status);
  console.log('refresh token: ', tokens.refreshToken);
  console.log('-------------------------------------');
};

export { refreshTokens, scheduleTokenRefresh };