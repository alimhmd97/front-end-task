import { Pagination } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PaginationItem from '@mui/material/PaginationItem';
import styles from './pagination.module.css'

const Muipagination = ({ count, handleChange,pageNumber}) => {

  return (<div >
    <div className={styles.padination_wrapper} >
      <Pagination
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
