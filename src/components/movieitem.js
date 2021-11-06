
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

export class MovieItem extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem', float: 'left', margin: '1rem' }}>
                    <Card.Img variant="top" src={this.props.movie.Poster} />
                    <Card.Body>
                        <Card.Title>{this.props.movie.Title}</Card.Title>
                        <Card.Text>{this.props.movie.Year}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}