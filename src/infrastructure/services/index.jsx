import console from './logger/console';
import elasticConsole from './logger/elastic-console';
import writeLocal from './local/write-local';
import elasticWriteLocal from './local/elastic-write-local';
import getLocal from './local/get-local';
import elasticGetLocal from './local/elastic-get-local';
import api from './api';

const env = process.env.REACT_APP_NODE_ENV;

const services = {
  //  INI ADALAH PENDAFTARA MODULE YANG NANTINYA BISA DI EXPOSE KE LUAR ( MIDDLEWARE , DLL)
  log: env === 'development' ? console : elasticConsole,
  getLocal: env === 'development' ? getLocal : elasticGetLocal,
  writeLocal: env === 'development' ? writeLocal : elasticWriteLocal,
  api,
};

export default services;
