import { Pagination } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PaginationItem from '@mui/material/PaginationItem';
import styles from './pagination.module.css';
import{useState,useEffect}from 'react'

const Muipagination = ({ count, handleChange,pageNumber}) => {
const [paginationSize, setPaginationSize] = useState('large');
function handleResize() {
  if(window.innerWidth>700){
    setPaginationSize('medium');
}else{
  setPaginationSize('small');
  }
}
// ------------------------------------------------------------------------------------------------
useEffect(() => {
  window.addEventListener('resize', handleResize);
}, []);
  return (<div >
    <div className={styles.padination_wrapper} >
      <Pagination
      size={paginationSize}
        shape="rounded"
        count={count} page={pageNumber} onChange={(e, value) => {
          handleChange(value);
        }}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      /></div>
  </div>
  );
}

export { Muipagination };
