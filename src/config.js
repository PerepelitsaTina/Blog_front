const envType = process.env.NODE_ENV || 'development';

const config = {
  apiBaseUrl: 'http://localhost:4000'
};

switch (envType) {
  case 'production':
    config.apiBaseUrl = '';
    break;

  default:
    break;
}

export default config;
