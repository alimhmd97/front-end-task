import { Pagination } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PaginationItem from '@mui/material/PaginationItem';

const Muipagination = ({ count, handleChange,pageNumber}) => {

  return (<div className='my-3'>
    <div className='pt-3 pb-5 d-flex w-100 justify-content-center' >
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
