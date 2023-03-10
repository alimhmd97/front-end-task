import { Navbar } from '../shared/navbar/navbar';
import { Header } from '../uiComponents/header/header';
import styles from './dashboard.module.css';
import { Filterby } from './filterby/filterby';
import { UnitsTable } from './unitsTable/unitsTable';
import { useState, useEffect } from 'react';
import {Muipagination} from '../shared/pagination/muipagination'
import axios from 'axios';
let units=[]
let modifiedUnits=[]
const Dashboard = () => {
    // const [selectedFilter, setSelectedFilter] = useState('');
    // const [searchUnitID, setSearchUnitID] = useState('');
    const [renderedUnits, setRenderedUnits] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    // --------------------------------------------------------------------------------------------
    const getUnits = async () => {
        try {
            const res = await axios(process.env.NEXT_PUBLIC_BASE_URL);
            units=res.data;
            setRenderedUnits(units.slice(0,process.env.NEXT_PUBLIC_PAGE_SIZe-1))
        } catch (err) {

        }
    }
    // --------------------------------------------------------------------------------------------
   const applySort=(sortby)=>{
    modifiedUnits=units.filter(unit=>unit?._id.includes())   
}
    // --------------------------------------------------------------------------------------------
    const applyFIlter=(searchUnitID)=>{
       
        if(searchUnitID){
        modifiedUnits=units.filter(unit=>{
           return (new RegExp(searchUnitID, 'i')).test(unit?.unit_id)})
    }else{
        modifiedUnits=units
    }  
   
    paginatUnits(1) 
    }
    // --------------------------------------------------------------------------------------------
    const paginatUnits=(pageNumber)=>{
        setPageNumber(pageNumber)
         const startElementIndex=(pageNumber-1)*process.env.NEXT_PUBLIC_PAGE_SIZe
        const endElementIndex=(pageNumber)*process.env.NEXT_PUBLIC_PAGE_SIZe
        setRenderedUnits(modifiedUnits.slice(startElementIndex,endElementIndex))   
     }
    // --------------------------------------------------------------------------------------------
    useEffect(() => {
        getUnits()
    }, []);
    // --------------------------------------------------------------------------------------------
    return (
        <div >
            <Navbar />
            <div className={styles.dashbord_wrapper}>
                <Header title={'Dashboard'} />
                {/* selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} searchUnitID={searchUnitID} setSearchUnitID={setSearchUnitID} */}
                <Filterby applyFIlter={applyFIlter} />
                <UnitsTable units={renderedUnits} />
                <Muipagination pageNumber={pageNumber} setPageNumber={setPageNumber} count={Math.ceil(modifiedUnits.length/ 6) || 1} handleChange={paginatUnits}/>
            </div>
        </div>
    );
}

export { Dashboard };
