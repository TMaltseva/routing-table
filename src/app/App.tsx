import React from 'react';
import { RoutingTable } from '../features/routing-table/components/RoutingTable/RoutingTable';
import { mockRoutes } from '../features/routing-table/data/mockRoutes';
import styles from './App.module.css';

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Таблица маршрутов</h1>
          <p className={styles.subtitle}>Управление сетевыми маршрутами</p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <RoutingTable routes={mockRoutes} className={styles.routingTable} />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>Routing Table Manager © 2025</p>
        </div>
      </footer>
    </div>
  );
};
