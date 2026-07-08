import { createTheme, ThemeProvider } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import heroImage from './assets/morda.png'

const technologies = [
  {
    category: 'Backend',
    items: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'Entity Framework Core',
      'PostgreSQL',
      'CQRS',
      'Domain Driven Design',
      'Clean Architecture',
      'Testing (xUnit, Moq, FluentAssertions)',
      'Docker',
      'Redis',
      'GitHub Actions',
    ],
  },
  {
    category: 'Frontend',
    items: [
      'Blazor',
      'React',
      'TypeScript',
    ],
  },
  {
    category: 'Game Development',
    items: [
      'Unity',
      'Game architecture',
      'C++',
    ],
  },
]

const projects = [
  {
    name: 'Trainee',
    description: 'A platform for managing and tracking training sessions for trainers and trainees.',
    link: 'https://trainmee.pl',
    repositories: [
      {
        label: 'Private Repository',
        url: '#',
        private: true,
      },
    ],
  },
  {
    name: 'Portfolio Website - you are on it!',
    description: 'A minimal personal site designed to present profile, skills and selected work clearly.',
    link: 'https://bw-dev.pl',
    repositories: [
      {
        label: 'GitHub',
        url: 'https://github.com/Munvik/my-personal-page',
        private: false,
      },
    ],
  },
  {
    name: 'Gamedev Website',
    description: 'A website designed for a game development freelancer',
    link: 'https://gamemonfdev.pl',
    repositories: [
    ],
  },
  {
    name: 'Steam Demo',
    description: 'A small demo project focused on a clean backend structure and practical API workflows.',
    link: 'https://steam.bw-dev.pl',
    repositories: [
      {
        label: 'Backend',
        url: 'https://github.com/Munvik/SteamDemoBackend',
        private: false,
      },
      {
        label: 'Frontend',
        url: 'https://github.com/Munvik/steam-demo-frontend',
        private: false,
      },
    ],
  }
]

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#66c0f4',
    },
    background: {
      default: '#0f1318',
      paper: '#171d25',
    },
    text: {
      primary: '#f5f7fb',
      secondary: '#a7b0bd',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(102, 192, 244, 0.24)',
          boxShadow: 'none',
          backgroundColor: 'rgba(255,255,255,0.02)',
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background:
            'radial-gradient(circle at top, rgba(102, 192, 244, 0.12), transparent 36%), linear-gradient(180deg, #0f1318 0%, #11161d 100%)',
          py: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={5.5}>
            <Box
              sx={{
                textAlign: 'center',
                px: { xs: 0, sm: 4 },
              }}
            >
              <Stack spacing={3} sx={{ alignItems: 'center' }}>
                <Avatar
                  src={heroImage}
                  alt="Profile photo"
                  sx={{
                    width: { xs: 150, sm: 154 },
                    height: { xs: 150, sm: 154 },
                    border: '3px solid rgba(102, 192, 244, 0.24)',
                    boxShadow: '0 0 0 6px rgba(102, 192, 244, 0.06)',
                  }}
                />
                <Box>
                  <Typography variant="h3" component="h1" gutterBottom>
                    Bartosz Włoszek
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Backend .NET Developer | Full Stack Enthusiast | Game Developer
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ maxWidth: 920, mx: 'auto', lineHeight: 1.8 }}
                  >
                    I'm a Software Developer focused on backend development with .NET.
                    <br />
                    I enjoy building reliable applications and continuously expanding
                    my technical skills by working on personal projects and exploring new technologies.
                    <br />
                    Before moving into backend development, I worked professionally as a Game Developer.
                    Today I still create games as a hobby and through freelance projects.
                    <br />
                    Outside of software development, I'm actively involved in sports, especially racket sports and Racketlon,
                    and I regularly attend game development events and hackathons.

                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Divider flexItem sx={{ borderColor: 'rgba(167, 176, 189, 0.18)' }} />

            <Stack spacing={2.5}>
              <Typography variant="h5" component="h2">
                Technologies
              </Typography>
              <Stack direction="row" spacing={1.25} useFlexGap sx={{ flexWrap: 'wrap' }}>
                <Stack spacing={3}>
                  {technologies.map((group) => (
                    <Box key={group.category}>
                      <Typography
                        variant="subtitle1"
                        sx={{ mb: 1.5, fontWeight: 700 }}
                      >
                        {group.category}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        sx={{ flexWrap: 'wrap' }}
                      >
                        {group.items.map((technology) => (
                          <Chip
                            key={technology}
                            label={technology}
                            variant="outlined"
                            sx={{
                              borderColor: 'rgba(102, 192, 244, 0.24)',
                              borderRadius: 0.5,
                              color: 'text.primary',
                              backgroundColor: 'rgba(255,255,255,0.02)',
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Stack>

            <Divider flexItem sx={{ borderColor: 'rgba(167, 176, 189, 0.18)' }} />

            <Stack spacing={2.5}>
              <Typography variant="h5" component="h2">
                Public Projects
              </Typography>
              <Stack spacing={2}>
                {projects.map((project) => (
                  <Card
                    key={project.name}
                    sx={{
                      borderColor: 'rgba(102, 192, 244, 0.24)',
                      borderRadius: 0.5,
                      color: 'text.primary',
                      backgroundColor: 'rgba(255,255,255,0.02)',
                    }}>
                    <CardContent>
                      <Stack spacing={2.5}>
                        <Box>
                          <Typography variant="h6">
                            {project.name}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 1 }}
                          >
                            {project.description}
                          </Typography>
                        </Box>

                        <Divider />

                        <Stack spacing={1}>
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 700 }}
                          >
                            🌐 Page
                          </Typography>

                          <Button
                            href={project.link}
                            target="_blank"
                            variant="text"
                            sx={{ justifyContent: 'flex-start' }}
                          >
                            {project.link.replace('https://', '')}
                          </Button>
                        </Stack>

                        {project.repositories.length > 0 && (
                          <Stack spacing={1}>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 700 }}
                            >
                              📦 Repositories
                            </Typography>

                            {project.repositories.map((repository) => (
                              repository.private ? (
                                <Chip
                                  key={repository.label}
                                  label="Private Repository"
                                  variant="outlined"
                                  sx={{
                                    width: 'fit-content',
                                  }}
                                />
                              ) : (
                                <Button
                                  key={repository.label}
                                  href={repository.url}
                                  target="_blank"
                                  variant="text"
                                  sx={{ justifyContent: 'flex-start' }}
                                >
                                  {repository.label}
                                </Button>
                              )
                            ))}
                          </Stack>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Stack>

            <Divider flexItem sx={{ borderColor: 'rgba(167, 176, 189, 0.18)' }} />

            <Stack spacing={2.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
              <Typography variant="h5" component="h2">
                Contact
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button variant="outlined" href="https://github.com/Munvik" target="_blank" rel="noreferrer">
                  GitHub
                </Button>
                <Button variant="outlined" href="https://www.linkedin.com/in/bartekw%C5%82oszek/" target="_blank" rel="noreferrer">
                  LinkedIn
                </Button>
                <Button variant="outlined" href="mailto:bartek.mikolaj.wloszek@gmail.com">
                  Email
                </Button>
              </Stack>
            </Stack>

            <Divider flexItem sx={{ borderColor: 'rgba(167, 176, 189, 0.18)' }} />

            <Box sx={{ pb: 1 }}>
              <Typography variant="body2" color="text.secondary" align="center">
                Built by Bartosz Włoszek
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
