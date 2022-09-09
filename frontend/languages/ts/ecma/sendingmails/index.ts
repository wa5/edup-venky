var nodemailer=require('nodemailer')

var tansporter=nodemailer.createTransport({
    service:'gmail',
    auth:{user:'waseemahmed116@gmail.com',
           pass:'aucznmpkooobgqze'}
})
var mailoption={
    from:'waseemahmed116@gmail.com',
    to:'venkaiah.vstc@gmail.com',
    subject:'hi testing mail venky',
    text:'hello venky did u had breakfast'
}
tansporter.sendMail(mailoption,(err:any,res:any)=>{
if(err)throw err
console.log('mail sent')
})

