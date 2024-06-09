import styles from "./RulesBox.module.css"

export default function RulesBox({children, title}){
    return(
        <>
            <div className={styles.rulesbox}>
                <h1>{title}</h1>
                <div className={styles.rulesContent}>
                    {children}
                </div>
            </div>
        </>
    );
}