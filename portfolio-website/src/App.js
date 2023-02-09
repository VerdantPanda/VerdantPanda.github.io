import './App.css';
import logo from './assets/ibrahim.png';
import {
  Box,
  Image,
  Heading,
  Footer,
  Anchor,
  Text,
  Main,
  Grommet,
  Carousel,
} from 'grommet';

function App() {
  return (
    <Grommet
      theme={{
        global: {
          colors: { doc: 'blanchedalmond' },
        },
      }}
      full
    >
      <Main>
        <Box fill={true} background="doc" pad="small">
          <Heading>Hi, I'm Ibrahim!</Heading>
          <Box
            alignSelf="center"
            width="medium"
            height="medium"
            round="full"
            overflow={'hidden'}
          >
            <Image fill fit="contain" src={logo} />
          </Box>
          {/*  */}
          <Box pad="medium">
            <Text>
              I am a current student at the{' '}
              <Anchor
                href="https://www.upenn.edu/"
                label="University of Pennsylvania"
              />{' '}
              studying{' '}
              <Anchor
                label="Computer Science"
                href="https://www.cis.upenn.edu/"
              />{' '}
              in the{' '}
              <Anchor
                label="School of Engineering and Applied Sciences."
                href="https://www.seas.upenn.edu/"
              />
            </Text>
          </Box>
          {/*  */}
          <Box pad="medium">
            <Text>
              Originally from Tallahassee, FL and culturally Yoruba, I enjoy
              spicy foods 🌶️, running 🏃🏿💨, and going to bed at 1am after an
              hours long Wikipedia rabbit hole. 🥲
            </Text>
          </Box>
          {/*  */}

          <Box pad="small">
            {/* <Heading level={2}>Work Experience:</Heading> */}

            {/* Internships */}
            {/* <Box height="small" width="medium" overflow="hidden">
              <Carousel fill>
                <Image
                  fit="cover"
                  src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                />
                <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
              </Carousel>
            </Box> */}
          </Box>
          <Box>
            {/* <Heading level={2}>Find me elsewhere:</Heading> */}
            <Text>
              <Anchor label="twitter" href="https://twitter.com/ifgbmila" />{' '}
              <Anchor
                label="linkedin"
                href="https://www.linkedin.com/in/ibrahimfagbamila/"
              />
            </Text>
          </Box>
        </Box>

        <Footer background="brand" pad="medium">
          <Text>Made with ❤️ in Philadelphia, PA</Text>
        </Footer>
      </Main>
    </Grommet>
  );
}

export default App;
