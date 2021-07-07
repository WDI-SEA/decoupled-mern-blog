import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <>
        <div className="jumbotron mb-0">
            <h1 className="display-4">Hello, welcome to our blog!</h1>
            <p className="lead">We have many interesting blog posts to be sure to entice you! Start clicking away and be amazed!</p>
        </div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-3">
            <Container>
                <Navbar.Brand href="/">Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/new">Post Article</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}