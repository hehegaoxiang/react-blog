import Head from "next/head";
import { Row, Col, Breadcrumb, Affix } from "antd";
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined,
} from "@ant-design/icons";
import Header from "../components/Header";
// import Author from "../components/Author";
// import Advert from "../components/Advert";
// import Footer from "../components/Footer";
import axios from "axios";
import "../public/style/pages/detailed.css";
import ReactMarkdown from "react-markdown";
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
// marked+highlight.js
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
// marknav
import Tocify from "../components/tocify.tsx";
import servicePath from "../config/apiUrl";
import Link from "next/link";

const Detailed = (list) => {
  const tocify = new Tocify();
  // 配置marked
  const renderer = new marked.Renderer();
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id=${anchor} href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false, // 容错检验
    sanitize: false, //忽略HTMl标签
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });
  let html = marked(list.article_content);
  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="detailed-bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link
                    href={{ pathname: "/list", query: { id: list.typeId } }}
                  >
                    <a>
                      {list.typeId == 1
                        ? "文章"
                        : list.typeId == 2
                        ? "分享"
                        : "生活"}
                    </a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{list.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">{list.title}</div>
              <div className="list-icon center">
                <span>
                  <CalendarOutlined />
                  {list.addTime}
                </span>
                <span>
                  <FolderOpenOutlined />
                  {list.typeId == 1
                    ? "文章"
                    : list.typeId == 2
                    ? "分享"
                    : "生活"}
                </span>
                <span>
                  <FireOutlined />
                  {list.view_count}人
                </span>
              </div>
              <div
                className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}
              >
                {/* markdown展示内容 */}
                {/* <ReactMarkdown source={markdown} escapeHtml={false} /> */}
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              {/* <MarkNav className="article-menu" source={html} ordered={true} /> */}
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
    </div>
  );
};
Detailed.getInitialProps = async (context) => {
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleById + id).then((res) => {
      resolve(res.data.data[0]);
    });
  });
  return await promise;
};

export default Detailed;
