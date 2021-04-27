import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options }) => {
    const btnElems = options.map(({ id, name, onClick }) => {
        return (
            <button onClick={onClick} key={id} className={styles.btn}>{name}</button>
        )
    });
    return(
        <>
            {btnElems}
        </>    
    )
};

export default FeedbackOptions;