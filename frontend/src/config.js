const isProd = !(process.env.NODE_ENV || process.env.NODE_ENV == 'development')
const configs = {
    isProd,
    UrlPrefix: isProd ? '' : 'https://api.home-243.online'
}
export default configs;
