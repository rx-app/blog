// module.exports = {
//   reactStrictMode: true,
// }


const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({
  reactStrictMode: true,
})