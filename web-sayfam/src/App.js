import logo from './logo.svg';
import './App.css';
import {Header} from '../src/components/Header'
import {Head} from '../src/components/Head'
import { useEffect, useRef, useState } from 'react';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { HireMe } from './components/HireMe';
import axios from "axios"

function App() {
  let arrTr=["Karanlık Mod","Aydınlık mod","Yetenekler","Projeler","Beni işe al","Yaratıcı düşünür Minimalizm Aşığı",
"Merhaba, ben Almila. Ben bir full-stack geliştiricisiyim. Mükemmel kullanıcı deneyimleriyle sağlam ve ölçeklenebilir ön uç ürünleri oluşturacak bir Geliştirici arıyorsanız. Benimle el sıkışalım.",
"Şehvetle kör olmadıkça ortaya çıkmazlar; vazifelerini bırakıp gönüllerini yani emeklerini yumuşatanlar kusurludur.",
"Şehvetle kör olmadıkça dışarı çıkmazlar; görevlerini bırakanlar kusurludur.",
"Şehvetle kör olmadıkça dışarı çıkmazlar; görevlerini bırakanlar kusurludur.",
"Profil","Doğum Tarihi","İkemetgah Şehri","Eğitim Durumu","Tercih Ettiği Rol","Yüksek Lisans","Hakkımda",
"Müşterinin kendisi, müşterinin şirketin adipleşmesini takip edebilecektir. Gelsin ya da gelmesin, yumuşaklık dışında her türlü emek zevkinden nefret eder.",
"En az şarjı zevkle açalım mı? Arkalarında bıraktıkları sözler pek çok kez harika!",
"Projeler",
"Kullanıcılarınızın hangi tanımlama bilgilerini kabul edeceklerini veya reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimum kurulumlu bir tanımlama bilgisi eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalar için her türlü özelleştirmeyi mümkün kılar.",
"Rastgele Şakalar",
"Kullanıcılarınızın hangi tanımlama bilgilerini kabul edeceklerini veya reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimum kurulumlu bir tanımlama bilgisi eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalar için her türlü özelleştirmeyi mümkün kılar.",
"Seyahat","Bir sonraki ürününüz üzerinde birlikte çalışalım","Kişisel Blog","Siteye Git"]
  let arrEn=["Dark Mode","Light Mode","Skills","Project","Hire me","Creative thinker Minimalism Lover",
  "Hi, I’m MCG. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
"Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
"Unless they are blinded by lust, they do not go out; they are in fault who forsake their duties.",
"Unless they are blinded by lust, they do not go out; they are in fault who forsake their duties.",
  "Profile","Birth Date","Place of Residence","Education","Preferred Role","MS","About Me",
  "The customer himself, the customer will be able to pursue the adipiscing of the company. Come or not, he hates any pleasures of labor except the softness.",
"Shall we open the least charge with pleasure? The words that they leave behind are so many times great!",
"Projects",
"A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
"Random Jokes",
"A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
"Journey","Let's work together on your next product","Personal Blog","View Site"
]
console.log(localStorage.getItem("Challenge11Mode"))
  const[check,setCheck]=useState( localStorage.getItem("Challenge11Mode")==="true" );
  const[dil,setDil]=useState(localStorage.getItem("challange11Dil")=="Türkçe" || localStorage.getItem("challange11Dil")=="İnglizce"  ? localStorage.getItem("challange11Dil"):"Türkçe"   );
  const [posts, setPosts] = useState(dil=="Türkçe"? arrEn:arrTr)
  
  /*
  useEffect(()=>{
     axios.post("http://localhost:8000/posts",dil=="Türkçe"? arrEn :arrTr
    )
  
  .then(res => {
    setPosts(res.data);
    
})
  
  },[dil])


 */

  
  const setCheck1=()=>{
   
    let a=!(localStorage.getItem("Challenge11Mode")==="true")
    localStorage.setItem("Challenge11Mode",a)

    setCheck(!check)

}
const dilChange=()=>{
  dil=="Türkçe"? setPosts(arrTr) :setPosts(arrEn)
  let a= (dil=="Türkçe"? "İngilizce" :"Türkçe")
  localStorage.setItem("challange11Dil",a)
  dil=="Türkçe"? setDil("İngilizce") :setDil("Türkçe")
  
  
}
  const ref=useRef(null);
  const ref1=useRef(null);
  const ref2=useRef(null);
  const handleS=()=>{
    console.log("q")
    ref.current?.scrollIntoView({ behavior: "smooth"})}
    const handleP=()=>{
      ref1.current?.scrollIntoView({ behavior: "smooth"})}
      const handleH=()=>{
        ref2.current?.scrollIntoView({ behavior: "smooth"})}
  return (
    <div id={check ? "dark" :""}>
   <Header  posts={posts} arrTr={arrTr} arrEn={arrEn} dilChange={dilChange} dil={dil} check={check} setCheck1={setCheck1} s={handleS} p={handleP} h={handleH}/>
   <Head posts={posts} arrTr={arrTr} arrEn={arrEn} dil={dil} check={check}  s={handleS} p={handleP} h={handleH}/>
   <Skills posts={posts} arrTr={arrTr} arrEn={arrEn} dil={dil}  check={check}  ref3={ref} s={handleS} p={handleP} h={handleH}  />
   <Projects posts={posts} arrTr={arrTr} arrEn={arrEn} dil={dil} check={check}  ref1={ref1} s={handleS} p={handleP} h={handleH}/>
   <HireMe  posts={posts} arrTr={arrTr} arrEn={arrEn} dil={dil} check={check}  ref2={ref2} s={handleS} p={handleP} h={handleH}/>
    </div>
  );
}

export default App;
