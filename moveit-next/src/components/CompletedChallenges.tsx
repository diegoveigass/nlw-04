import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallangesContext);

  return (
    <div className={styles.completedChallangesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
