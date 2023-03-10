import { Navbar } from '../shared/navbar/navbar';
import { Header } from '../uiComponents/header/header';
import styles from './dashboard.module.css';
import { Filterby } from './filterby/filterby';
import { UnitsTable } from './unitsTable/unitsTable';
import { useState, useEffect } from 'react';
import { Muipagination } from '../shared/pagination/muipagination'
import axios from 'axios';
let units = []
let modifiedUnits = []
const sortByArr = ['Unit ID', 'Unit type', 'Unit price']
const Dashboard = () => {
    const [selectedSortby, setSelectedSortby] = useState('');
    // const [searchUnitID, setSearchUnitID] = useState('');
    const [renderedUnits, setRenderedUnits] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    // --------------------------------------------------------------------------------------------
    const getUnits = async () => {
        try {
            const res = await axios(process.env.NEXT_PUBLIC_BASE_URL);
            units = res.data;
            modifiedUnits = units;
            applySort(sortByArr[0])
            paginatUnits(1)
        } catch (err) {

        }
    }
    // --------------------------------------------------------------------------------------------
    const applySort = (sortby) => {
        setSelectedSortby(sortby)
        if (sortby === 'Unit ID') {
            modifiedUnits = modifiedUnits.sort((a, b) => {
                return a.unit_id.localeCompare(b.unit_id, 'en', { sensitivity: 'base' });
            });
        }

        if (sortby === 'Unit price') { modifiedUnits = modifiedUnits.sort((a, b) => a.total_price - b.total_price); }

        if (sortby === 'Unit type') { modifiedUnits = modifiedUnits.sort((a, b) => a.unit_type - b.unit_type); }

        paginatUnits(1);
    }
    // --------------------------------------------------------------------------------------------
    const applyFIlter = (searchUnitID) => {
        if (searchUnitID) {
            modifiedUnits = units.filter(unit => {
                return (new RegExp(searchUnitID, 'i')).test(unit?.unit_id)
            })
        } else {
            modifiedUnits = [...units]
            applySort(selectedSortby)
        }
        paginatUnits(1)
    }
    // --------------------------------------------------------------------------------------------
    const paginatUnits = (pageNumber) => {
        setPageNumber(pageNumber)
        const startElementIndex = (pageNumber - 1) * process.env.NEXT_PUBLIC_PAGE_SIZe
        const endElementIndex = (pageNumber) * process.env.NEXT_PUBLIC_PAGE_SIZe
        setRenderedUnits(modifiedUnits.slice(startElementIndex, endElementIndex))
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
                <Filterby
                    selectedSortby={selectedSortby} setSelectedSortby={setSelectedSortby}
                    sortByArr={sortByArr} applyFIlter={applyFIlter} applySort={applySort} />
                <UnitsTable units={renderedUnits} />
                <Muipagination pageNumber={pageNumber} setPageNumber={setPageNumber} count={Math.ceil(modifiedUnits.length / 6) || 1} handleChange={paginatUnits} />
            </div>
        </div>
    );
}

export { Dashboard };
