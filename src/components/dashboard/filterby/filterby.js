import styles from './filterby.module.css'
import FilterListIcon from '@mui/icons-material/FilterList';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-lodash-debounce'

const sortByArr=['Unit ID','Unit type','Unit price']

const Filterby = ({applyFIlter}) => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [searchUnitID, setSearchUnitID] = useState('');
// --------------------------------------------------------------------------------------------
const onselectSortBy=(sortBy)=>{
    setSelectedFilter(sortBy);
   }
   const debouncedSearchUnitID = useDebounce(searchUnitID, 800);
// --------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------
useEffect(() => {
    applyFIlter(searchUnitID)
}, [debouncedSearchUnitID]);
// --------------------------------------------------------------------------------------------
useEffect(() => {
    setSelectedFilter[sortByArr[0]]
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
              <select onChange={(e) => { onselectSortBy(e.target.value) }} className={styles.sortby_select} value={selectedFilter}>
                    {sortByArr.map((el, i) => {
                        return <option key={i} style={{ width: '1260px', height: '36px' }} value={el}>{el}</option>
                    })}
                </select> 
           
            </div>
           
        </div>
    );
}

export  {Filterby};
