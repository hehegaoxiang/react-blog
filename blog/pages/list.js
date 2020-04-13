import { useState } from "react";
import Head from "next/head";
import { Row, Col, List, Breadcrumb } from "antd";
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined,
} from "@ant-design/icons";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../public/style/pages/list.css";

const MyList = () => {
  const [mylist, setMylist] = useState([
    {
      title: "50元加入小密圈 胖哥带你学一年",
      context: "50元跟着胖哥学一年，掌握程序人的学习方法。",
    },
    {
      title: "React实战视频教程-技术胖Blog开发(更新04集)",
      context: "50元跟着胖哥学一年，掌握程序人的学习方法。",
    },
    {
      title: "React服务端渲染框架Next.js入门(共12集)",
      context: "50元跟着胖哥学一年，掌握程序人的学习方法。",
    },
    {
      title: "React Hooks 免费视频教程(共11集)",
      context: "50元跟着胖哥学一年，掌握程序人的学习方法。",
    },
    {
      title: "React Hooks 免费视频教程(共11集)",
      context: "50元跟着胖哥学一年，掌握程序人的学习方法。",
    },
    {
      title: "React Hooks 免费视频教程(共11集)",
      context: "50元跟着胖哥学一年，掌握程序人的学习方法。",
    },
  ]);
  return (
    <div>
      <Head>
        <title>何高</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <a href="/">首页</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>视频教程</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            }
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span>
                    <CalendarOutlined />
                    2019-06-28
                  </span>
                  <span>
                    <FolderOpenOutlined />
                    视频教程
                  </span>
                  <span>
                    <FireOutlined />
                    666
                  </span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default MyList;
