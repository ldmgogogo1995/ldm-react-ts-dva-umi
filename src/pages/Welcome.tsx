import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';

export default (): React.ReactNode => (
  <PageContainer>
    <Card style={{ textAlign: 'center', fontWeight: 800, fontSize: '32px' }}>
      其实只是个私人记录生活日常的地方而已啦...
    </Card>
  </PageContainer>
);
