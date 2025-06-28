// components/Projects.tsx
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Container,
} from '@mui/material';

const projects = [
  {
    title: 'YouTube Video Downloader',
    description: 'Download YouTube videos as MP4/MP3 using Next.js and yt-dlp.',
    link: 'https://your-youtube-downloader-link.com',
    image: '/images/youtube-downloader1.png',
  },
  {
    title: 'Grocery Website (HTML, CSS, JS)',
    description: 'Static website built using HTML, CSS, and JavaScript. Includes product list, cart, and search features.',
    link: 'https://funny-sprite-beb1c4.netlify.app/',
    image: '/images/grocery-store1.jpg',
  },
  {
    title: 'Travel Blog',
    description: 'Responsive blog built with Next.js, Firebase Auth, and Material UI.',
    link: 'https://your-travel-blog-link.com',
    image: '/images/travel-blog.jpg',
  },
];

const Projects = () => {
  return (
    <Box id="projects" data-aos="fade-up" sx={{ backgroundColor: '#fff8e1', py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          My Projects
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 6 }}>
          Some of the work I've built and deployed
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: '100%', md: 300 },
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.03)' },
              }}
              data-aos="fade-up"
            >
              <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={project.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/fallback.png';
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>

            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
