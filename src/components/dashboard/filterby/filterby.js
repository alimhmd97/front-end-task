import styles from './filterby.module.css'
import FilterListIcon from '@mui/icons-material/FilterList';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-lodash-debounce'



const Filterby = ({applyFIlter,applySort,sortByArr,selectedSortby, setSelectedSortby}) => {
    const [searchUnitID, setSearchUnitID] = useState('');
// --------------------------------------------------------------------------------------------
const onselectSortBy=(sortBy)=>{
    applySort(sortBy)
   }
   const debouncedSearchUnitID = useDebounce(searchUnitID, 800);
// --------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------
useEffect(() => {
    applyFIlter(searchUnitID)
}, [debouncedSearchUnitID]);
// --------------------------------------------------------------------------------------------
useEffect(() => {
    setSelectedSortby[sortByArr[0]]
   }, []);
// --------------------------------------------------------------------------------------------
return (
        <div className={styles.filterby_wrapper}>
            <div>
            <span className={styles.filterby_text}>Filter by ID:</span> <input onChange={(e)=>{
                setSearchUnitID(e.target.value)
            }} className={styles.filter_input} placeholder='filter'/>
            </div>

            <div className={styles.sortby_wrapper}>
              <FilterListIcon sx={{fontSize:'1rem'}}/> <span style={{fontSize: '11px',paddingRight:'5px'}}>Sort by</span>
              <select onChange={(e) => { onselectSortBy(e.target.value) }} className={styles.sortby_select} value={selectedSortby}>
                    {sortByArr.map((el, i) => {
                        return <option key={i}  value={el}>{el}</option>
                    })}
                </select> 
           
            </div>
           
        </div>
    );
}

export  {Filterby};
