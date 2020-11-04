import {Container, Row, Col, Button} from 'react-bootstrap'
import Link from 'next/link';

function TopContributors({ response }) {

    return (
        <Container fluid className="outer-container">
            <Row>
                <Col className="top-contributors-text">Top Contributors</Col>
            </Row>
            <Row>
                <Col className="rectangle"></Col>
            </Row>
            <div className="main-wrapper">
                {
                    response.map((res, index)=>(
                        <Col className="list-item col-3" key={index}>
                            <div className="content-wrapper">
                                <div className="outline">
                                    <div className="avatar" style={{backgroundImage: `url('${res.avatar_url}')`}}></div>
                                    <img class="icon-circle" src="/images/kisspng-computer-icons-google-maps-location-navigational-5ad80aa7c0bee4 1.png"></img>
                                </div>
                                <div class="inner-text">
                                <p className="contributor">{res.login}</p>
                                <p className="commits">{res.contributions} commits</p>
                                </div>
                                <Link href={res.html_url} passHref={true}>
                                    <Button className="view-repositories" variant="link">VIEW REPOSITORIES</Button>
                                </Link>
                            </div>
                        </Col>
                    ))
                }
            </div>
        </Container>
    )
}

TopContributors.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/angular/angular/contributors')
    const json = await res.json()
    return { response: json }
}
  
export default TopContributors