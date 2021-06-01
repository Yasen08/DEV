const env = process.env.NODE_ENV
const appenv = process.env.VUE_APP_CURRENTMODE

let config = {}

if (env === 'development') {
  config = {
    baseUrl: 'http://admin.jqxinyue.com/xyiot/'
  }
} else if(appenv === 'test'){
  config = {
    baseUrl: 'http://192.168.1.81:8999/xyiot/',
  }
}  else if(appenv === 'production'){
  config = {
    baseUrl: 'https://www.jqxinyue.com/xyiot/'
  } 
}

export default config