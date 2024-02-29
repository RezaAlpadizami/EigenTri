import { Route, Routes } from "react-router-dom";
import NewsMain from "./pages/News/news.component";
import { ConfigProvider } from "antd";

const App = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#9DB2BF",
              algorithm: true,
            },
            Input: {
              colorPrimary: "#9DB2BF",
              algorithm: true,
            },
          },
        }}
      >
        <Routes>
          <Route path="/" element={<NewsMain />} />
        </Routes>
      </ConfigProvider>
    </>
  );
};

export default App;
