const ipUrl = "http://127.0.0.1:7001/default/";
const servicePath = {
  // 首页获取文章列表
  getArticleList: ipUrl + "getArticleList",
  // 获取文章详细信息
  getArticleById: ipUrl + "getArticleById/",
  // 获取类别
  getTypeInfo: ipUrl + "getTypeInfo",
  // 获取不同类型的文章列表
  getListById: ipUrl + "getListById/",
};
export default servicePath;
