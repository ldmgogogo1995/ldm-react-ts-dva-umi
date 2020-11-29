import * as React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
interface Props {
  children: React.ReactElement;
}
export default (props: Props): React.ReactElement => {
  return (
    <PageHeaderWrapper
      style={{
        height: '100%',
      }}
    >
      {props.children}
    </PageHeaderWrapper>
  );
};
