import React from 'react';
import Link from 'next/link';
import styles from './breadcrumb.module.css';

const Breadcrumb: React.FC = () => {
  const paths = [
    { name: 'Home', path: '/' },
    { name: 'Visit', path: '/visit' },
    { name: 'Apply', path: '/apply' }
  ];

  return (
    <div aria-label="breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.breadcrumbList}>
        {paths.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            <Link href={item.path}>
              <span className={styles.breadcrumbLink}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ol>
      <div className={styles.breadcrumbBox}></div>
    </div>
  );
};

export default Breadcrumb;