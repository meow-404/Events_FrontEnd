const server = "http://localhost:8080"
// const server = "http://192.168.31.186:8080" //真机调试

const config = {
  server,
  loginUrl: server + '/api/login', //微信小程序登陆接口
  eventsUrl: server + '/api' //其余接口
}

export default config
