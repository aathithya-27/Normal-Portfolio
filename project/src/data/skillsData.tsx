import {
  Code2,
  LayoutGrid,
  Database,
  GitBranch,
  Smartphone,
  Wrench,
  Figma,
  Server,
  Library,
  Rocket,
  Terminal,
  Cloud
} from 'lucide-react';

export const skillsData = {
  frontend: [
    {
      name: 'HTML5 & CSS3',
      level: 90,
      icon: <Code2 size={36} />,
    },
    {
      name: 'JavaScript',
      level: 85,
      icon: <Code2 size={36} />,
    },
    {
      name: 'React',
      level: 80,
      icon: <LayoutGrid size={36} />,
    },
    {
      name: 'Figma',
      level: 85,
      icon: <Figma size={36} />,
    },
    {
      name: 'UI/UX Design',
      level: 85,
      icon: <Smartphone size={36} />,
    }
  ],
  backend: [
    {
      name: 'Python',
      level: 85,
      icon: <Code2 size={36} />,
    },
    {
      name: 'C',
      level: 80,
      icon: <Code2 size={36} />,
    },
    {
      name: 'OpenCV',
      level: 85,
      icon: <Server size={36} />,
    },
    {
      name: 'MongoDB',
      level: 75,
      icon: <Database size={36} />,
    }
  ],
  tools: [
    {
      name: 'Git',
      level: 85,
      icon: <GitBranch size={36} />,
    },
    {
      name: 'VS Code',
      level: 90,
      icon: <Terminal size={36} />,
    },
    {
      name: 'Verification',
      level: 80,
      icon: <Wrench size={36} />,
    },
    {
      name: 'Validation',
      level: 80,
      icon: <Rocket size={36} />,
    }
  ],
};