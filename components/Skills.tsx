'use client';
import { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
} from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css';

import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Language';
import CssIcon from '@mui/icons-material/Palette';
import JavascriptIcon from '@mui/icons-material/JavaScript';
import ReactIcon from '@mui/icons-material/IntegrationInstructions';
import NextJsIcon from '@mui/icons-material/ArrowForwardIos';
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import TypeScriptIcon from '@mui/icons-material/CodeOff';
import AnimationIcon from '@mui/icons-material/Animation';

// Skills data
const frontendSkills = [
  { name: 'HTML', icon: <HtmlIcon /> },
  { name: 'CSS', icon: <CssIcon /> },
  { name: 'JavaScript', icon: <JavascriptIcon /> },
  { name: 'React.js', icon: <ReactIcon /> },
  { name: 'Next.js', icon: <NextJsIcon /> },
  { name: 'Material UI', icon: <CodeIcon /> },
  { name: 'TypeScript', icon: <TypeScriptIcon /> },
];

const toolSkills = [
  { name: 'Git & GitHub', icon: <GitHubIcon /> },
  { name: 'Firebase Auth', icon: <StorageIcon /> },
  { name: 'Framer Motion / AOS', icon: <AnimationIcon /> },
];

// SkillCard component
const SkillCard = ({ title, skills, animation }: { title: string; skills: any[]; animation: string }) => (
  <Paper
    elevation={3}
    data-aos={animation}
    sx={{
      p: 3,
      borderRadius: 3,
      backgroundColor: '#fff',
      flex: 1,
      minWidth: '350px',
      maxWidth: '460px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 6,
      },
    }}
  >
    <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
      {title}
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
      {skills.map((skill, i) => (
        <Box
          key={i}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '48%',
            fontSize: '0.9rem',
          }}
        >
          {skill.icon}
          <Typography sx={{ ml: 1 }}>{skill.name}</Typography>
        </Box>
      ))}
    </Box>
  </Paper>
);

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box id="skills" sx={{ backgroundColor: '#f5f5f5', py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          My Skills
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 6 }}>
          Technologies and tools I use to build powerful web apps.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <SkillCard title="Frontend Development" skills={frontendSkills} animation="fade-up" />
          <SkillCard title="Tools & Libraries" skills={toolSkills} animation="fade-up" />
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
