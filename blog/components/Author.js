import { Avatar, Divider } from "antd";
import { GithubOutlined, QqOutlined } from "@ant-design/icons";
import "../public/style/component/author.css";
const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar
          size={100}
          src="https://img2.woyaogexing.com/2020/04/08/adb8962102094285afb574bffb8f6fc2!400x400.jpeg"
          alt="加载失败"
        />
        <div className="author-introduction">
          一只前端小萌新。
          <Divider>社交账号</Divider>
          <GithubOutlined style={{ fontSize: "2rem" }} />
          <h3>github.com//hehegaoxiang</h3>
          <QqOutlined style={{ fontSize: "2rem" }} />
          <h3>80224413</h3>
          {/* <Avatar size={28} icon="github" className="account" />
          <Avatar size={28} icon="qq" className="account" />
          <Avatar size={28} icon="wechat" className="account" /> */}
        </div>
      </div>
    </div>
  );
};
export default Author;
