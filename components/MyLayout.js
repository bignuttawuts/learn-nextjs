import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <style jsx global>
      {
        `
        a {
          font-family: 'Arial';
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }`
      }
    </style>
  </div>
)

export default Layout
