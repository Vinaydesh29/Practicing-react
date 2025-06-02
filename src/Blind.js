function Blind(){
   const val = function(city,country){
    console.log(`${this.name}  ${city}  ${country}`);
   }
   const obj = {name:"sai"}
   val.call(obj,'hyd',"india")
}
export default Blind