import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/diegoveigass.png" alt="Diego Veiga" />
      <div>
        <strong>Diego Veiga</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 22
        </p>
      </div>
    </div>
  );
}
