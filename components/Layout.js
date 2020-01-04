import Header from './Header';
import Head from './Head';
import Footer from './Footer';
import Scripts from './Scripts';

{/*const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}; */}

const Layout = props => (
  <div>
    <Head />
    <Header />
    {props.children}
    <Footer />
    <Scripts />
  </div>
);

export default Layout;
