import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
const Nav = () => {
  return (
    
      <Container className="p-3">
       

        <div>
          <nav className="nav-item">
          <div className="bigTitle">Cmon and Slam</div>
            <Row >
              
              <div className="Col navButton">
                <a href="/blog">
                    Home
                </a>
              </div>
           
              <div className="Col navButton">
                <a href="/newpost">
                    New Post
                </a>
              </div>
               
            </Row>
          </nav>
        </div>
    
      </Container>

  )
}


export default Nav