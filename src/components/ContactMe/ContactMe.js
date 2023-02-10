import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './ContactMe.css';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';

function ContactMe() {
    return (
        <div className='contactMe'>
            <h3>Contact Me</h3>
            <CardGroup>
                <Card>
                    <Card.Img class="image" src={instagram} />
                    <Card.Body>
                        <Card.Title>Via Instagram</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img class="image" src={twitter} />
                    <Card.Body>
                        <Card.Title>Via Twitter</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img class="image" src={facebook} />
                    <Card.Body>
                        <Card.Title>Via Facebook</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
}

export default ContactMe;