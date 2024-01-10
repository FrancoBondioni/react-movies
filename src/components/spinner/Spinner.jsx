import ScaleLoader from "react-spinners/ScaleLoader";
import styles from './Spinner.module.css';

export function Spinner () {
    return (
        <div className={styles.spinner}>
            <ScaleLoader   color="rgba(180, 4, 48, 1)" height={35} className={styles.spinning} />
        </div>
    );
}
