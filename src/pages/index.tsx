import axios from 'axios';
import {Dashboard} from '../../src/components/dashboard/dashboard'


export default function Home({units=[]}) {
  return (<>
   <Dashboard units={units}/>
   </>
  )
}

export async function getServerSideProps() {
  let units=[];
  try {
    const res = await axios(process.env.NEXT_PUBLIC_BASE_URL||'');
    units = res?.data||[];

} catch (err) {

}
  return {
    props: {units}, 
  }
}