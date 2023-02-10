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
  Grid,
  Tag,
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
          align="center"
        >
          <Box align="center" fill={{ horizontal: true }}>
            <Heading textAlign="center" weight={300}>
              hi, i'm ibrahim fagbamila!{' '}
              <Box animation={{ type: 'jiggle', duration: 500 }}>👋</Box>
            </Heading>
          </Box>

          <Grid
            rows={['medium', 'medium', 'small']}
            columns={['medium', 'medium', 'xsmall']}
            gap="small"
            areas={[
              // { name: 'header', start: [0, 0], end: [1, 0] },
              // { name: 'nav', start: [0, 1], end: [0, 1] },
              // { name: 'main', start: [1, 1], end: [1, 1] },
              { name: 'about', start: [0, 0], end: [1, 0] },
              { name: 'pic', start: [1, 0], end: [2, 0] },
              { name: 'social', start: [0, 2], end: [2, 2] },
              { name: 'experience', start: [0, 1], end: [0, 1] },
              { name: 'skills', start: [1, 1], end: [2, 1] },
            ]}
          >
            {/* <Box gridArea="header" background="brand" />
            <Box gridArea="nav" background="light-5" />
            <Box gridArea="main" background="light-2" /> */}
            <Box gridArea="about">
              <Bio />
            </Box>
            <Box gridArea="pic">
              <ProfilePic />
            </Box>
            <Box gridArea="social" align="center">
              <Social />
            </Box>
            <Box gridArea="experience">
              <Experience />
            </Box>
            <Box gridArea="skills">
              <Skills />
            </Box>
          </Grid>

          {/* <Projects /> */}
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
      <Card background="blanchedalmond" pad="small" width="auto" height="auto">
        <CardHeader>
          <Heading level={2}>About Me:</Heading>
        </CardHeader>
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
          spicy foods 🌶️, running 🏃🏿💨, learning languages 🗣️, and sleeping at
          1am after an spending hours down long Wikipedia rabbit hole. 🥲
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
    <Text size="medium">
      3x Software Engineering Intern @{' '}
      <Anchor target="_blank" href="https://www.meta.com/">
        Meta
      </Anchor>
    </Text>
  );

  const lablel2 = (
    <Text size="medium">
      Software Engineering Intern @{' '}
      <Anchor target="_blank" href="https://www.datamaxx.com/">
        Datamaxx Group
      </Anchor>
    </Text>
  );

  const lablel3 = (
    <Text size="medium">
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
        overflow="scroll"
      >
        <CardHeader>
          <Heading level={2}>Experience:</Heading>
        </CardHeader>
        <Accordion>
          <AccordionPanel label="3x Software Engineering Intern @ Meta">
            <Text size="small">
              TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionPanel>

          <AccordionPanel label="SWE Intern @ Datamaxx Group">
            <Text size="small">
              Worked on the development team for REDTAIL, a web app for security
              and visitor screenings. The internship focused on using
              Microsoft's ASP.NET Razor MVC.
            </Text>
          </AccordionPanel>
          <AccordionPanel label="Teaching Assistant @ UPenn">
            <Text size="small">
              Acted as a PM/mentor for three teams of students to guide each
              team to build and deploy a full-stack web app using React, NodeJS,
              Heroku, AWS, and either MongoDB or MySQL. Additionally, hosted
              office hours to help students debug code and better understand web
              development concepts and best practices.
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
      height="auto"
      width="auto"
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
        <CardHeader>
          <Heading level={2}>Skills:</Heading>
        </CardHeader>
        <CardBody>
          <Box>
            <Accordion>
              <AccordionPanel label="Full Stack Web Development">
                <Text size="small">
                  TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Text>
              </AccordionPanel>
              <AccordionPanel label="Java">
                <Text size="small">
                  TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Text>
              </AccordionPanel>
              <AccordionPanel label="Project Management Software">
                <Text size="small">
                  TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Text>
              </AccordionPanel>
            </Accordion>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}

function Projects() {
  return (
    <Box margin="small">
      <Card
        background="blanchedalmond"
        pad="small"
        width="medium"
        height="auto"
      >
        <CardHeader>
          <Heading level={2}>Projects:</Heading>
        </CardHeader>
        <CardBody>
          <Text>Lorem </Text>
        </CardBody>
      </Card>
    </Box>
  );
}

export default App;
