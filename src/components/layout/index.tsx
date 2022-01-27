import { Layout } from '@douyinfe/semi-ui';
import { Header } from '@/components/Header';

export default () => {
  const { Header: BHeader, Sider, Content } = Layout;
  return (
    <Layout className="h-screen w-screen">
      <BHeader>
        <Header />
      </BHeader>
      <Layout className="w-3/4 mx-auto my-6">
        <Content>Content</Content>
        <Sider className="hidde ml-6 lg:w-1/5 lg:block">Sider</Sider>
      </Layout>
    </Layout>
  );
};
