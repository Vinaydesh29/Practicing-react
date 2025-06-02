function Blind(){
   const val = function(){
    console.log("hello " + this.name);
   }
   const obj = {name:"sai"}
   val.call(obj)
}
export default Blind