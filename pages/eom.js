import styles from '../styles/EOM.module.css'
import {Toolbar} from '../components/toolbar'

export const EOM = ({user}) => {
  
    return (
        <div className='page-container'> 
        
         <Toolbar/>
        <div className={styles.main}>
            <h1>{"Rodrigo Lima"}</h1>
        <div className={styles.employeeOfMonth}>
        {/* <h3>{"Rodrigo Lima"}</h3> */}
            <h6>{"Programador de sistemas"}</h6>
            <img src={"https://avatars.githubusercontent.com/u/44089765?v=4"}/>
            <p>{}</p>
                 
        </div>
       </div>
    </div>
    );

}


export const getServerSideProps = async () => {
    const apiResponse = await fetch(
      'https://api.github.com/rniochy/',
    );
    const employee = await apiResponse.json();
  
    return {
      props: {
        employee,
      },
    };
  };

export default EOM;