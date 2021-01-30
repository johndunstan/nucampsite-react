import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class CampsiteInfo extends Component {
  render() {
    const renderCampsite = (campsite) => {
      return (
        <div className="col-md-5 m-1">
          <Card>
            <CardImg top src={campsite.image} alt={campsite.name} />
            <CardBody>
              <CardTitle>{campsite.name}</CardTitle>
              <CardText>{campsite.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )
    }

    const renderComments = (comments) => {
      if (comments) {
        return (
          <div className="col-md-5 m-1">
            <h4>Comments</h4>
            {comments.map((comment) => (
              <div className="row m-1" key={comment.id}>
                <p>
                  {comment.text}
                  <br />
                  --{comment.author},{' '}
                  {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </div>
            ))}
          </div>
        )
      }
      return <div />
    }

    if (this.props.campsite) {
      return (
        <div className="container">
          <div className="row">
            {renderCampsite(this.props.campsite)}{' '}
            {renderComments(this.props.campsite.comments)}
          </div>
        </div>
      )
    }
    return <div />
  }
}

export default CampsiteInfo
