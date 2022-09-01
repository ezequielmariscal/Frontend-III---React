import styles from './hijo.module.css';

function Hijo(props) {
    return (
        <h1 className={styles.title}>
            {props.value}
        </h1>  
    );
}

export default Hijo;