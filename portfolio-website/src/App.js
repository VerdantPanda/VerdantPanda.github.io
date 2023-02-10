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
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Accordion,
  AccordionPanel,
} from 'grommet';

function App() {
  return (
    <Grommet
      theme={{
        global: {
          colors: { doc: 'blanchedalmond' },
        },
      }}
      full="min"
      // full
    >
      <Main fill>
        <Box
          fill
          background={{
            image:
              'url(https://cdn.shopify.com/s/files/1/0285/1316/products/w0245_1s_Art-Deco-Hexagonal-Pattern-Wallpaper-for-Walls-F.-Scott-Fitzgerald_For-Workspaces-1.jpg?)',
            size: 'cover',
            rotate: 45,
            opacity: 'medium',
          }}
          // background="doc"
          pad="small"
        >
          <Heading textAlign="center" weight={300}>
            hi, i'm ibrahim fagbamila!
          </Heading>

          <ProfilePic />
          <Bio />
          <Social />
          <Experience />
          <Skills />
        </Box>

        <Footer background="brand" pad="small">
          <Text>Made with ❤️ in Philadelphia, PA</Text>
        </Footer>
      </Main>
    </Grommet>
  );
}

function Bio() {
  return (
    <Box margin="small">
      <Card background="blanchedalmond" pad="small">
        <Text>
          I am a current student at the{' '}
          <Anchor
            target="_blank"
            href="https://www.upenn.edu/"
            label="University of Pennsylvania"
          />{' '}
          studying{' '}
          <Anchor
            target="_blank"
            label="Computer Science"
            href="https://www.cis.upenn.edu/"
          />{' '}
          in the{' '}
          <Anchor
            target="_blank"
            label="School of Engineering and Applied Sciences."
            href="https://www.seas.upenn.edu/"
          />
        </Text>
        <br></br>
        <Text>
          Originally from <b>Florida</b> and culturally <b>Yoruba</b>. I enjoy
          spicy foods 🌶️, running 🏃🏿💨, and sleeping at 1am after an spending
          hours down long Wikipedia rabbit hole. 🥲
        </Text>
      </Card>
    </Box>
  );
}

function Social() {
  return (
    <Box margin="small">
      <Card background="blanchedalmond" pad="small" width="medium">
        <Text alignSelf="center" size="large">
          <Anchor
            target="_blank"
            label="twitter"
            href="https://twitter.com/ifgbmila"
          />
          {'•'}
          <Anchor
            label="linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/ibrahimfagbamila/"
          />
          {'•'}
          <Anchor
            label="resume"
            target="_blank"
            href="https://drive.google.com/file/d/1DuC4Y4gd0fbRXlTUVlgQpdA6_c7KyyEH/view?usp=sharing"
          />
        </Text>
      </Card>
    </Box>
  );
}

function Experience() {
  const lablel1 = (
    <Text size="small">
      3x Software Engineering Intern @{' '}
      <Anchor target="_blank" href="https://www.meta.com/">
        Meta
      </Anchor>
    </Text>
  );

  const lablel2 = (
    <Text size="small">
      1x Software Engineering Intern @{' '}
      <Anchor target="_blank" href="https://www.datamaxx.com/">
        Datamaxx Group
      </Anchor>
    </Text>
  );

  const lablel3 = (
    <Text size="small">
      Teaching Assistant for{' '}
      <Anchor target="_blank" href="https://www.cis.upenn.edu/~cis5570/">
        CIS 557: Programming for the Web
      </Anchor>
    </Text>
  );

  return (
    <Box margin="small">
      <Card
        background="blanchedalmond"
        pad="small"
        width="medium"
        height="auto"
      >
        <CardHeader>
          <Heading level={2}>Experience:</Heading>
        </CardHeader>
        <Accordion>
          <AccordionPanel label={lablel1}>
            <Text size="small">
              TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionPanel>

          <AccordionPanel label={lablel2}>
            <Text size="small">
              TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionPanel>
          <AccordionPanel label={lablel3}>
            <Text size="small">
              TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionPanel>
        </Accordion>
      </Card>
    </Box>
  );
}

function ProfilePic() {
  return (
    <Box
      alignSelf="center"
      round="full"
      overflow={'hidden'}
      animation={{ type: 'jiggle', duration: 3000 }}
      border={{
        side: 'all',
        size: 'large',
      }}
      flex="shrink"
      height="small"
      width="small"
      margin="small"
    >
      <Image fill src={logo} />
    </Box>
  );
}

function Skills() {
  return (
    <Box margin="small">
      <Card
        background="blanchedalmond"
        pad="small"
        width="medium"
        height="auto"
      >
        <Text>Lorem </Text>
      </Card>
    </Box>
  );
}

export default App;
