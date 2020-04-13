import { Avatar, Divider } from "antd";
import {} from "@ant-design/icons";
import "../public/style/component/author.css";
const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar
          size={100}
          src="https://img2.woyaogexing.com/2020/04/08/adb8962102094285afb574bffb8f6fc2!400x400.jpeg"
        />
        <div className="author-introduction">
          一只前端小萌新。
          <Divider>社交账号</Divider>
          {/* <Avatar size={28} icon="github" className="account" />
          <Avatar size={28} icon="qq" className="account" />
          <Avatar size={28} icon="wechat" className="account" /> */}
        </div>
      </div>
    </div>
  );
};
export default Author;
