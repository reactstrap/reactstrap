import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBlock>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBlock>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBlock>
      </Card>
    </div>
  );
};

export default Example;
