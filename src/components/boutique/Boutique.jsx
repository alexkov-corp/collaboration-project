import React from "react"
import {connect} from "react-redux"
import ReactPlayer from 'react-player'
import {
  BoutiqueContainer,
  VideoWrapper,
  TextBlock,
  TextTitle,
  TextInfo,
  Text,
  DoubleImageBlock,
  FormWrapper,
} from "./boutique-styled";
import BoutiqueForm from './boutique-form/BoutiqueForm'

const Boutique = props => {
  return (
    <BoutiqueContainer>
      <VideoWrapper>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=mJoLPXXWHAE'
          controls={true}
          light={true}
          width='100%'
          height='100%'
        />
      </VideoWrapper>

      <TextBlock>
        <TextTitle>
          Via della spiga 30:
          the L.B.M.1911 experience
        </TextTitle>
        <TextInfo>
          <div>
            L.B.M.1911 celebrates its brand with an exciting new boutique
            in the heart of milan’s “golden quadrilateral”
          </div>
        </TextInfo>
        <Text>
          <div>
            L.B.M.1911 opted for luxury and an exclusive address in Via della Spiga as the ideal backdrop to present its collections, enhanced with an array of garments created exclusively for their Milan store. As well as the complete range of iconic outerwear models, fans of the L.B.M. brand will be able to create a personal total look from the collections of trousers, knitwear, shirts and accessories, including bags, shoes, belts, pocket squares and scarves.
          </div>
          <br/>
          <div>
            L.B.M.1911 opted for luxury and an exclusive address in Via della Spiga as the ideal backdrop to present its collections, enhanced with an array of garments created exclusively for their Milan store. As well as the complete range of iconic outerwear models, fans of the L.B.M. brand will be able to create a personal total look from the collections of trousers, knitwear, shirts and accessories, including bags, shoes, belts, pocket squares and scarves.
          </div>
          <br/>
          <div>
            L.B.M.1911 opted for luxury and an exclusive address in Via della Spiga as the ideal backdrop to present its collections, enhanced with an array of garments created exclusively for their Milan store. As well as the complete range of iconic outerwear models, fans of the L.B.M. brand will be able to create a personal total look from the collections of trousers, knitwear, shirts and accessories, including bags, shoes, belts, pocket squares and scarves.
          </div>
        </Text>
      </TextBlock>

      <DoubleImageBlock>
        <img src="https://www.lubiam.it/public/boutique/02.jpg" alt="img-1"/>
        <img src="https://www.lubiam.it/public/boutique/03.jpg" alt="img-2"/>
      </DoubleImageBlock>

      <TextBlock>
        <TextTitle>
          Made To Measure, but with a new twist
        </TextTitle>
        <Text>
          <div>
            L.B.M.1911 opted for luxury and an exclusive address in Via della Spiga as the ideal backdrop to present its collections, enhanced with an array of garments created exclusively for their Milan store. As well as the complete range of iconic outerwear models, fans of the L.B.M. brand will be able to create a personal total look from the collections of trousers, knitwear, shirts and accessories, including bags, shoes, belts, pocket squares and scarves.
          </div>
          <br/>
          <div>
            L.B.M.1911 opted for luxury and an exclusive address in Via della Spiga as the ideal backdrop to present its collections, enhanced with an array of garments created exclusively for their Milan store. As well as the complete range of iconic outerwear models, fans of the L.B.M. brand will be able to create a personal total look from the collections of trousers, knitwear, shirts and accessories, including bags, shoes, belts, pocket squares and scarves.
          </div>
        </Text>
      </TextBlock>

      <DoubleImageBlock>
        <img src="https://www.lubiam.it/public/boutique/04.jpg" alt="img-1"/>
        <img src="https://www.lubiam.it/public/boutique/05.jpg" alt="img-2"/>
      </DoubleImageBlock>

      <FormWrapper>
        <h1>Here will be a form</h1>
        <h1>Wait for it...</h1>
        <BoutiqueForm />
      </FormWrapper>

    </BoutiqueContainer>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Boutique);

