const url = 'https://api.latinagirls.tube';
const webUrl = 'https://latinagirls.tube/';
const tubeUrl = 'https://tube.latinagirls.tube/'

// const url = 'http://localhost:8080';
// const webUrl = 'http://localhost:4200/';

export const environment = {
  production: false,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.latinagirls.tube',
  siteKey: '0x4AAAAAAAZb2DV_DCFRU271',
  secretKey: '0x4AAAAAAAZb2EPH58gkU3rCvwWHalhnV-k',
  qrLink: `${webUrl}settings/edit-profile/`,
  EncryptIV: 8625401029409790,
  EncryptKey: 8625401029409790,
};
