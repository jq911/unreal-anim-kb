import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const projects = [
  {
    title: 'Lyra',
    image: '/img/home/hero-lyra.png',
    link: '/docs/sample-projects/lyra/',
    description: 'Epic 官方 Lyra 项目动画蓝图方案',
  },
  {
    title: 'Advanced Locomotion System V4',
    image: '/img/home/hero-als.png',
    link: '/docs/sample-projects/als-v4/',
    description: 'ALS V4 高级移动系统动画方案',
  },
  {
    title: 'Low Poly Shooter Pack v6.0',
    image: '/img/home/hero-fps.png',
    link: '/docs/sample-projects/low-poly-shooter/',
    description: 'Low Poly Shooter 第一人称射击动画方案',
  },
  {
    title: 'Game Animation Sample',
    image: '/img/home/hero-game-anim.png',
    link: '/docs/sample-projects/game-animation-sample/',
    description: 'Game Animation Sample 动画示例',
  },
];

function ProjectCard({ title, image, link, description }) {
  const imgUrl = useBaseUrl(image);
  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <img
          src={imgUrl}
          alt={title}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
        <div style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem' }}>{title}</h3>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)' }}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout title="首页">
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>虚幻动画知识库</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)' }}>
            记录虚幻引擎动画蓝图的实现方案、技巧和最佳实践
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
        }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
