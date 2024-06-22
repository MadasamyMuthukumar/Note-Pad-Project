import { Container, Navbar } from "react-bootstrap";


export const Header: React.FunctionComponent=()=>{
return (
     <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>
                Handy Notes
            </Navbar.Brand>
        </Container>
     </Navbar>
);
}