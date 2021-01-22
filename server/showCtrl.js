const data = require('./data.json');
let id = data.length + 1
  
  
module.exports = {
    getProperties: (req,res) => {
        const{location}= req.query
        if(!location){
            res.status(200).send(data)
        }else{
            const filteredProperties = data.filter((element) =>
            element.location.includes(location))
            res.status(200).send(filteredProperties)
        }
        
    },
// module.exports = {
//     getProperties: (req,res) => {
//         const{location}= req.query
//         const{year}= req.query
//         if(!location&& !year){
//             res.status(200).send(data)
//         }else if(location){
//             const filteredProperties = data.filter((element) =>
//             element.location.includes(location))
//             res.status(200).send(filteredProperties)
//         }
//         else if(year){
//             const filteredProperties = data.filter((element) =>
//             element.year.includes(year))
//             res.status(200).send(filteredProperties)
      

//         }
        
//     },



    addProperties:(req,res) => {
        const {year,location,image,rate,favorite} = req.body;
        //console.log(body)
        const body = {
            year,
            location,
            image,
            favorite,
            rate,
            id
        }
        data.push(body)
        id++
        res.status(200).send(data)



        //  if(!body ){
        //    res.status(404).send(alert('Please Enter the values'))
        //  }
       
    },
    updateProperty: (req,res) => {
        //const {rate} = req.body;
        const foundIndex = data.findIndex(element => element.id === +req.params.id)
        //console.log(foundIndex)
        if(foundIndex=== -1){
            res.status(404).send('Property not found!')
            return;
        }
    // data[foundIndex] = {...data[foundIndex],rate:req.body.rate}
      //  res.status(200).send(data)
      //  data[foundIndex]= {...data[foundIndex],favorite:req.body.favorite}
       // console.log(data)
       const updatedPropertyData = {...data[foundIndex],favorite:req.body.favorite}

        res.status(200).send(updatedPropertyData)
        //data[foundIndex] = {...data[foundIndex],rate:req.body.location}
        //res.status(200).send(data)
    
    },
    removeProperty:(req,res)=>{
        const foundIndex = data.findIndex(element => element.id === +req.params.id)
      console.log(req.params)
        if(foundIndex=== -1){
            res.status(500).send('Property not found!')
            return;
        }
   
         data.splice(foundIndex,1)
       //const finalProp =  data.splice(foundIndex,1)
       // console.log(data)
        res.status(200).send(data)
        
      }
    
}