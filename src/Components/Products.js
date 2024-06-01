import React from 'react';
import { useProductCode } from '../Context/ProductContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import sarıkız from '../Images/Products/Market/sarıkız.jpeg';
import ayran from '../Images/Products/Market/Ayran.jpeg';
import cappy from '../Images/Products/Market/Cappy.jpeg';
import doğuş from '../Images/Products/Market/Doğuş.jpeg';
import dooy from '../Images/Products/Market/Dooy.jpeg';
import erikli from '../Images/Products/Market/Erikli.jpeg';
import nescafe from '../Images/Products/Market/Nescafe.jpeg';
import sera from '../Images/Products/Market/Sera.jpeg';
import spoon from '../Images/Products/Market/Spoon.jpeg';
import oltasehpası from '../Images/Products/Home&Life/OltaSehpası.jpeg';
import perde from '../Images/Products/Home&Life/Perde.jpeg';
import sandalye from '../Images/Products/Home&Life/Sandalye.jpeg';
import yolluk from '../Images/Products/Home&Life/Yolluk.jpeg';
import çaydanlık from '../Images/Products/Kitchen/Çaydanlık.jpeg';
import düdüklü from '../Images/Products/Kitchen/Düdüklü.jpeg';
import fırıntepsisi from '../Images/Products/Kitchen/FırınTepsisi.jpeg';
import kaseseti from '../Images/Products/Kitchen/KaseSeti.jpeg';
import kupa from '../Images/Products/Kitchen/Kupa.jpeg';
import pastatabağı from '../Images/Products/Kitchen/PastaTabağı.jpeg';
import reçellik from '../Images/Products/Kitchen/Reçellik.jpeg';
import servisseti from '../Images/Products/Kitchen/ServisSeti.jpeg';
import termos from '../Images/Products/Kitchen/Termos.jpeg';
import yağlık from '../Images/Products/Kitchen/Yağlık.jpeg';
import çorap from '../Images/Products/Clothing&Accessory/Çorap.jpeg';
import erkekşort from '../Images/Products/Clothing&Accessory/ErkekŞort.jpeg';
import erkektişört from '../Images/Products/Clothing&Accessory/ErkekTişört.jpeg';
import kadınçanta from '../Images/Products/Clothing&Accessory/KadınÇanta.jpeg';
import kadıntayt from '../Images/Products/Clothing&Accessory/KadınTayt.jpeg';
import mont from '../Images/Products/Clothing&Accessory/Mont.jpeg';
import sweatshirt from '../Images/Products/Clothing&Accessory/Sweatshirt.jpeg';
import valizseti from '../Images/Products/Clothing&Accessory/ValizSeti.jpeg';
import barbiekırtasiyeseti from '../Images/Products/Book&Stationary/BarbieKırtasiyeSeti.jpeg';
import boyamaseti from '../Images/Products/Book&Stationary/BoyamaSeti.jpeg';
import denemeseti from '../Images/Products/Book&Stationary/DenemeSeti.jpeg';
import fosforlukalem from '../Images/Products/Book&Stationary/FosforluKalem.jpeg';
import kalemlik from '../Images/Products/Book&Stationary/Kalemlik.jpeg';
import kaplık from '../Images/Products/Book&Stationary/Kaplık.jpeg';
import pastelboya from '../Images/Products/Book&Stationary/PastelBoya.jpeg';
import silgi from '../Images/Products/Book&Stationary/Silgi.jpeg';
import sırtçantası from '../Images/Products/Book&Stationary/SırtÇantası.jpeg';
import uçlukalem from '../Images/Products/Book&Stationary/UçluKalem.png';
import çamaşırsodası from '../Images/Products/Home&Clean/ÇamaşırSodası.jpeg';
import çamaşırsuyu from '../Images/Products/Home&Clean/ÇamaşırSuyu.jpeg';
import kapsül from '../Images/Products/Home&Clean/Kapsül.jpeg';
import omo from '../Images/Products/Home&Clean/OmoTozDeterjan.jpeg';
import sıvıdeterjan from '../Images/Products/Home&Clean/SıvıDeterjan.jpeg';
import temizlikhavlusu from '../Images/Products/Home&Clean/TemizlikHavlusu.jpeg';
import tozdeterjan from '../Images/Products/Home&Clean/TozDeterjan.jpeg';
import tursil from '../Images/Products/Home&Clean/TursilSıvıDeterjan.jpeg';
import tuvaletkağıdı from '../Images/Products/Home&Clean/TuvaletKağıdı.jpeg';
import yumoş from '../Images/Products/Home&Clean/YumoşSıvıDeterjan.jpeg';
import bisiklet from '../Images/Products/WithoutBarcode/Bisiklet.jpeg';
import canerik from '../Images/Products/WithoutBarcode/CanErik.jpeg';
import çarlistonbiber from '../Images/Products/WithoutBarcode/ÇarlistonBiber.jpeg';
import dolap from '../Images/Products/WithoutBarcode/Dolap.jpeg';
import domates from '../Images/Products/WithoutBarcode/Domates.jpeg';
import elma from '../Images/Products/WithoutBarcode/Elma.jpeg';
import havuç from '../Images/Products/WithoutBarcode/Havuç.jpeg';
import kıvırcık from '../Images/Products/WithoutBarcode/Kıvırcık.jpeg';
import kolsaati from '../Images/Products/WithoutBarcode/KolSaati.jpeg';
import maydanoz from '../Images/Products/WithoutBarcode/Maydanoz.jpeg';
import patates from '../Images/Products/WithoutBarcode/Patates.jpeg';
import portakal from '../Images/Products/WithoutBarcode/Portakal.jpeg';
import şeftali from '../Images/Products/WithoutBarcode/Şeftali.jpeg';
import terlik from '../Images/Products/WithoutBarcode/Terlik.jpeg';
import turşuluksalatalık from '../Images/Products/WithoutBarcode/TurşulukSalatalık.jpeg';
import yeşilsoğan from '../Images/Products/WithoutBarcode/YeşilSoğan.jpeg';
import '../Styles/OrderPage.css';


function ProductCard({ name, price ,code,image}) {
  var {setProductCode}= useProductCode();
  return (
    <Grid  item xs={12} md={6} lg={4}>
         <Card onClick={()=>{setProductCode(code)}} sx={{  maxWidth: 345,border:'1px solid gray',borderRadius:'20px',height:'140px',marginTop:'10px'}}>
      <CardActionArea >
        <CardMedia  sx={{width:'100%',marginTop:'5px',objectFit:'contain'}}
          component="img"
          height="50"
          image={image}
          alt={name}
        />
        <CardContent >
          <Typography sx={{ fontSize: '11px', fontFamily:'fantasy'}} variant="h6" component="div">
            {name}
          </Typography>
          <Typography sx={{ fontSize: '11px',fontFamily:'fantasy' }} >
            Fiyat: {price}
          </Typography>
          <Typography  sx={{ fontSize: '11px',fontFamily:'fantasy' }} >
            Kod: {code}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
      
  );
}

function Products({ names, prices,codes,ctgry}) {
  var Images=[];
switch (ctgry) {
  case 'Market':
        Images =[sarıkız,nescafe,cappy,erikli,dooy,doğuş,ayran,spoon,sera];
        break;
  case 'home&life':
        Images =[sandalye,yolluk,perde,oltasehpası];
        break;
  case 'Kitchen':
        Images =[pastatabağı,kaseseti,yağlık,düdüklü,termos,kupa,servisseti,fırıntepsisi,reçellik,çaydanlık];
        break;
  case 'clothing&accessory':
        Images =[valizseti,sweatshirt,mont,kadınçanta,erkekşort,kadıntayt,erkektişört,çorap];
        break;
  case 'book&stationary':
        Images =[kaplık,uçlukalem,boyamaseti,pastelboya,fosforlukalem,denemeseti,kalemlik,silgi,barbiekırtasiyeseti,sırtçantası];
        break;
  case 'withoutBarcode':
        Images =[patates,domates,havuç,çarlistonbiber,turşuluksalatalık,elma,portakal,yeşilsoğan,maydanoz,kıvırcık,şeftali,canerik,kolsaati,terlik,bisiklet,dolap];
        break;
  case 'home&clean':
        Images =[sıvıdeterjan,kapsül,temizlikhavlusu,tozdeterjan,çamaşırsuyu,omo,tuvaletkağıdı,yumoş,tursil,çamaşırsodası];
        break;
  default:
    break;
}
  return (
    
       <div className='productcard'>
      <Grid container spacing={2}>
      {names.map((name, index) => (
        <ProductCard 
          key={index} // Benzersiz bir anahtar ekleyin
          name={name}
          price={prices[index]} // Fiyatı almak için indeksi kullanın
          image ={Images[index]}
          code={codes[index]} // Kodu almak için indeksi kullanın
          />
      ))}
      </Grid>
    </div>
      
   
  );
}

export default Products;
