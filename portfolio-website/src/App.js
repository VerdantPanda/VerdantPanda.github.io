import './App.css';
// import logo from './assets/ibrahim.png';
import logo from './assets/IMG_4545.png';

import bgImg from './assets/Workspaces-1.png';

import manatee from './assets/manatee.png';
import insta from './assets/insta.png';
import nyc from './assets/nyc.png';
import seattle from './assets/seattle.png';
import apollo from './assets/apollo.png';

import MovingText from 'react-moving-text';
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
  Accordion,
  AccordionPanel,
  Grid,
} from 'grommet';

function App() {
  return (
    <Grommet
      theme={{
        global: {
          colors: { doc: 'blanchedalmond' },
        },
      }}
      // full="min"
      // full
    >
      <Main fill>
        <Box
          fill
          background={{
            image:
              // 'url(https://cdn.shopify.com/s/files/1/0285/1316/products/w0245_1s_Art-Deco-Hexagonal-Pattern-Wallpaper-for-Walls-F.-Scott-Fitzgerald_For-Workspaces-1.jpg?)',
              `url(${bgImg})`,
            size: 'cover',
            rotate: 45,
            opacity: 'medium',
          }}
          // background="doc"
          pad="small"
          align="center"
        >
          <Box
            align="center"
            fill={{ horizontal: true }}
            animation={{ type: 'slideUp' }}
          >
            <Heading textAlign="center" weight={300}>
              <MovingText
                type="unfold"
                duration="1500ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
              >
                hi, i'm ibrahim fagbamila!{' '}
              </MovingText>
              <Box animation={{ type: 'jiggle', duration: 500 }}>👋</Box>
            </Heading>
          </Box>
          <Box animation={{ type: 'slideUp' }}>
            <Social />
          </Box>

          <Grid
            rows={['medium', 'auto']}
            columns={['medium', 'medium', 'xsmall']}
            gap="small"
            areas={[
              // { name: 'header', start: [0, 0], end: [1, 0] },
              // { name: 'nav', start: [0, 1], end: [0, 1] },
              // { name: 'main', start: [1, 1], end: [1, 1] },
              { name: 'about', start: [0, 0], end: [1, 0] },
              { name: 'pic', start: [1, 0], end: [2, 0] },

              { name: 'experience', start: [0, 1], end: [0, 1] },
              { name: 'skills', start: [1, 1], end: [2, 1] },
            ]}
          >
            {/* <Box gridArea="header" background="brand" />
            <Box gridArea="nav" background="light-5" />
            <Box gridArea="main" background="light-2" /> */}
            <Box gridArea="about" animation={{ type: 'slideUp' }}>
              <Bio />
            </Box>
            <Box gridArea="pic" animation={{ type: 'slideUp' }}>
              <ProfilePic />
            </Box>
            <Box gridArea="experience" animation={{ type: 'slideUp' }}>
              <Experience />
            </Box>
            <Box gridArea="skills" animation={{ type: 'slideUp' }}>
              <Skills />
            </Box>
          </Grid>

          {/* <Projects /> */}
          <Adventure />
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
          {' • '}
          <Anchor
            label="linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/ibrahimfagbamila/"
          />
          {' • '}

          <Anchor
            label="resume"
            target="_blank"
            href="https://drive.google.com/file/d/1DuC4Y4gd0fbRXlTUVlgQpdA6_c7KyyEH/view?usp=sharing"
          />
          {' • '}
          <Anchor
            label="github"
            target="_blank"
            href="https://github.com/VerdantPanda/"
          />
        </Text>
      </Card>
    </Box>
  );
}

function Experience() {
  // const lablel1 = (
  //   <Text size="medium">
  //     3x Software Engineering Intern @{' '}
  //     <Anchor target="_blank" href="https://www.meta.com/">
  //       Meta
  //     </Anchor>
  //   </Text>
  // );

  // const lablel2 = (
  //   <Text size="medium">
  //     Software Engineering Intern @{' '}
  //     <Anchor target="_blank" href="https://www.datamaxx.com/">
  //       Datamaxx Group
  //     </Anchor>
  //   </Text>
  // );

  // const lablel3 = (
  //   <Text size="medium">
  //     Teaching Assistant for{' '}
  //     <Anchor target="_blank" href="https://www.cis.upenn.edu/~cis5570/">
  //       CIS 557: Programming for the Web
  //     </Anchor>
  //   </Text>
  // );

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
            <Box margin={{ bottom: 'small' }}>
              <Text size="small">
                Intern at <b>Facebook/Meta</b> over the course of 3 summers.
                Worked on <b>Productivity Tools</b>, <b>Preventive Health</b>,
                and <b>Messenger Games</b> teams.
                <br />
                <br />
                On <b>Productivity Tools</b> I created a tool to create tasks in
                bulk within Meta's internal task management tool via uploading a
                spreadsheet file.
                <br />
                <br />
                On <b>Preventive Health</b> I created a quiz on the COVID-19
                Information Center to combat COVID-19 related misinformation on
                the platform.
              </Text>
            </Box>
          </AccordionPanel>

          <AccordionPanel label="SWE Intern @ Datamaxx Group">
            <Box margin={{ bottom: 'small' }}>
              <Text size="small">
                Worked on the development team for{' '}
                <Anchor
                  href="https://redtailsecurity.com/corp/"
                  label="REDTAIL"
                  target="_blank"
                />
                , a web app for security and visitor screenings. The internship
                focused on using Microsoft's ASP.NET Razor MVC.
              </Text>
            </Box>
          </AccordionPanel>

          <AccordionPanel label="Teaching Assistant @ UPenn">
            <Box margin={{ bottom: 'small' }}>
              <Text size="small">
                <Anchor
                  href="https://www.cis.upenn.edu/~cis5570/"
                  label="CIS 5570: Programming for the Web"
                  target="_blank"
                />{' '}
                – Guided three teams of students to build and deploy a
                full-stack web app using React, NodeJS, Heroku, AWS, and either
                MongoDB or MySQL. Hosted office hours to help students debug
                code and better understand web development concepts and best
                practices.
              </Text>
            </Box>
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
      // round="full"
      round='large'
      overflow={'hidden'}
      animation={{ type: 'fadeIn', duration: 3000 }}
      border={{
        side: 'all',
        size: 'large',
      }}
      flex="shrink"
      width="large"
      height="large"
      margin="small"
      
    >
      <Image fill src={logo} />
      {/* <Image src="https://lh5.ggpht.com/_S0f-AWxKVdM/S5TpU6kRmUI/AAAAAAAAL4Y/wrjx3_23kw4/d_silhouette%5B2%5D.jpg" /> */}
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
                <Box margin={{ bottom: 'small' }}>
                  {' '}
                  <Text size="small">
                    Learned basic <b>HTML, CSS, Javascript</b> in 2018.
                    <br />
                    <br />
                    Self-taught <b>
                      React.js, Express.js. Node.js, MongoDB
                    </b>{' '}
                    stack for hackathon project in 2020 and became familiar with{' '}
                    <b>MVC</b> design paradigm.
                    <br />
                    <br />
                    Worked on Facebook codebase using{' '}
                    <Anchor href="https://hacklang.org/" target="_blank">
                      Hack
                    </Anchor>
                    , <b>React.js</b> and <b>GraphQL</b> during summers of 2020,
                    2021, & 2022.
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Python & Java">
                <Box margin={{ bottom: 'small' }}>
                  <Text size="small">
                    First learned how to code in <b>Java</b> in 2017. Learned{' '}
                    <b>Python</b> in 2021. I've used both mainly for school
                    projects, assignments and interview prep.
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Project Management Software">
                <Box margin={{ bottom: 'small' }}>
                  <Text size="small">
                    I'm comfortable with Version Control software like{' '}
                    <b>Git</b>,<b>GitHub</b>,{' '}
                    <Anchor
                      label="Phabricator"
                      href="https://en.wikipedia.org/wiki/Phabricator"
                      target="_blank"
                    />{' '}
                    as well as Project Tracking tools like <b>JIRA</b>.
                  </Text>
                </Box>
              </AccordionPanel>
            </Accordion>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}

// function Projects() {
//   return (
//     <Box margin="small">
//       <Card
//         background="blanchedalmond"
//         pad="small"
//         width="medium"
//         height="auto"
//       >
//         <CardHeader>
//           <Heading level={2}>Projects:</Heading>
//         </CardHeader>
//         <CardBody>
//           <Text>Lorem </Text>
//         </CardBody>
//       </Card>
//     </Box>
//   );
// }

function Adventure() {
  return (
    <Box margin="small">
      <Card
        background="blanchedalmond"
        pad="small"
        width="large"
        height="auto"
        align="center"
      >
        <CardHeader>
          <Heading level={2}>My Adventures!</Heading>
        </CardHeader>
        <CardBody>
          <Box border={{ color: 'brand', size: 'large' }}>
            <Carousel fill>
              <Image fit="cover" src={seattle} />
              <Image fit="cover" src={insta} />
              <Image fit="cover" src={manatee} />
              <Image fit="cover" src={nyc} />
              <Image fit="cover" src={apollo} />
            </Carousel>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}

export default App;
