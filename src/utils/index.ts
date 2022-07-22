import {
  BOOKS_APPSTORE_LINK,
  BOOKS_PLAYSTORE_LINK,
  TELIO_APPSTORE_LINK,
  TELIO_PLAYSTORE_LINK,
  ZALO_LINK,
  COUNTRY_CODE,
} from '../constants';

export const openInNewTab = (url: string) => {
  window.open(url, '_blank');
};

export const openTelioZalo = () => {
  openInNewTab(ZALO_LINK);
};

export const openTelioBooksAppStore = () => {
  openInNewTab(BOOKS_APPSTORE_LINK);
};

export const openTelioBooksPlayStore = () => {
  openInNewTab(BOOKS_PLAYSTORE_LINK);
};

export const openTelioAppAppStore = () => {
  openInNewTab(TELIO_APPSTORE_LINK);
};

export const openTelioAppPlayStore = () => {
  openInNewTab(TELIO_PLAYSTORE_LINK);
};

// export const changeLocale = (value:string) => {
//   if (value === "vi") {
//     navigate("/vi");
//   } else {
//     navigate("/en");
//   }
// };

// profile = JSON of profile property key-value pairs
export const initCleverTapUserProfile = (profile: any) => {
  try {
    const clevertap = (window as any)?.clevertap;
    clevertap.onUserLogin.push({
      Site: {
        ...profile,
      },
    });

    console.log('clevertap', clevertap, profile);
  } catch (error) {
    console.log('Failed to initialize clevertap profile');
  }
};

// profile = JSON of profile property key-value pairs
export const updateClevertapUserProfile = (profile: any) => {
  try {
    const clevertap = (window as any)?.clevertap;
    clevertap.profile.push({
      Site: {
        ...profile,
      },
    });
  } catch (error) {
    console.log('Failed to update clevertap profile');
  }
};

export const pushClevertapEvent = (eventName: any, eventProps?: any) => {
  try {
    const clevertap = (window as any)?.clevertap;
    const viewType = 'Zalo WebView';
    const channel = viewType;
    const clevertapEventProps = {
      channel,
      ...eventProps,
    };

    clevertap.event.push(eventName, clevertapEventProps);
  } catch (error) {
    console.log('Failed to register clevertap event');
  }
};

export const formatMobileNumber = (value: any, isCountryCode: any) => {
  if (!value || !value.trim()) {
    return '';
  }
  if (value.length < 10) {
    return isCountryCode ? `${COUNTRY_CODE}${value}` : `0${value}`;
  }
  if (value.substring(0, 1) === '0') {
    return isCountryCode
      ? `${COUNTRY_CODE}${value.substring(1, 10)}`
      : `${value.substring(0, 10)}`;
  }
  return isCountryCode
    ? `${COUNTRY_CODE}${value.substring(0, 9)}`
    : `0${value.substring(0, 9)}`;
};
