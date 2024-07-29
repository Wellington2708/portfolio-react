import styles from './Top.module.css'

function Top(){
    return(
       <div className={styles.display}>
      {/* Link to top page */}
      <a href="#" className={styles.fixedLink}>Top</a>
    </div>
        )
}

export default Top;
 