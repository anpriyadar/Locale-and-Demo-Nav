import Mapper from './mapper'
//const defaultLocaleData = Mapper['en-uk']
let localeData = {}


function translate(textKey, defaultText) {
  if(defaultText ==='en-uk')
  {
    localeData = Mapper['en-uk']
    return (
       (localeData[textKey])
    )
  }
  else{
    localeData = Mapper['en-us']
    return (
       (localeData[textKey])
    )
  }


}


export default {
  translate
}
