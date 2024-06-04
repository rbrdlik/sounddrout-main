import styles from "./Links.module.css"

export default function Links(props){
    return(
        <>
            <a href={props.link}>
                <div className={styles.link}>
                    <div>
                        <img src={props.icon} alt="" className={styles.iconStyle}/>
                    </div>
                    <div className={styles.text}>
                        <h3>{props.text1}</h3>
                        <h3>{props.text2}</h3>
                        <p>{props.count}</p>
                    </div>
                </div>
            </a>
        </>
    );
}