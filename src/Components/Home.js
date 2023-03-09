import Carousel from './Carousel';
import Footer from './Footer';
import { Items } from "./Items"

const Home = ({searchdatasvar,setAddtocart2,clicksearch}) => {
    const addtocartfunc=(value)=>{
        setAddtocart2((old)=>{
            return [...old,value]
        });
    }
  return (
    <div>
        <Carousel/>
        <div className="maping">
        {Items.filter((item) =>
          item.name.toLowerCase().includes(searchdatasvar || clicksearch)
        ).map((value, id) => {
          value.name.toLowerCase();
          return (
            <table className="item-card" key={id} >
            <tbody>
            <tr className="item-card-row">
              <td >
                <img
                  src={value.image}
                  alt="loding"
                />
              </td>
              <td>
                {value.name},  {value.price},
              </td>
              <td><button type="button" className="btn btn-warning" onClick={()=>{addtocartfunc(value)}}>Add To Cart</button></td>
            </tr>
            </tbody>
            </table>
          );
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default Home