import * as React from 'react';
interface Props {
  title: string;
}
const Home: React.FC<Props> = ({ title }) => {
  return <div className="home-title">标题：{title}</div>;
};
export default Home;
