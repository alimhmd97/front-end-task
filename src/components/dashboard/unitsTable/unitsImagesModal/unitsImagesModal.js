import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import styles from './unitsImagesModal.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '86%',
  outline: 'none'
};
// 151 240 600 960
export function UnitsImagesModal({ imagesArr }) {
  const [open, setOpen] = useState(false);
  const [renderedImgIndex, setrenderedImgIndex] = useState();
  // --------------------------------------------------------------------------------------------
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // --------------------------------------------------------------------------------------------
  useEffect(() => {
    setrenderedImgIndex(0)
  }, [imagesArr]);
  // --------------------------------------------------------------------------------------------
const renderNextImg=()=>{
if(renderedImgIndex===imagesArr.length-1)return;
setrenderedImgIndex(renderedImgIndex+1)
}
  // --------------------------------------------------------------------------------------------
  const renderPrevImg=()=>{
    if(renderedImgIndex===0)return;
    setrenderedImgIndex(renderedImgIndex-1)
  }
  // --------------------------------------------------------------------------------------------
  return (
    <div>
      {imagesArr[0] && <Image loading='lazy' width='40' height='40' src={imagesArr[0]} alt='' style={{ cursor: 'pointer' }} onClick={handleOpen} />}
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <div className={styles.imgs_Wrapper}>
           <span className={styles.close_icon_wrapper}> <CloseIcon onClick={handleClose}/></span>
            <ArrowBackIosIcon onClick={renderPrevImg} sx={{color:renderedImgIndex===0?'#bbbbbb':'white'}} className={styles.arrows} />
            {renderedImgIndex>=0 && <Image loading='lazy' width='40' height='40' sizes='100%' src={imagesArr[renderedImgIndex]} alt='' style={{ width: '80%', height: '100%' }} onClick={handleOpen} />}
            <ArrowForwardIosIcon onClick={renderNextImg} sx={{color:renderedImgIndex===imagesArr.length-1?'#bbbbbb':'white'}} className={styles.arrows}/>

          </div>
        </Box>
      </Modal>
    </div>
  );
}
