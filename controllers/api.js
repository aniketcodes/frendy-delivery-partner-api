const DeliveryPartnerDetails=require("../models/deliveryPartner");



module.exports.fetchDetails=function(req,res){

    fetchDetailsByPincode=function(pincode){
        let deliveryPartnerList={
            message:String,
            data:[]
        };
        DeliveryPartnerDetails.forEach((partner)=>{
            if(partner.pincode==pincode){
                deliveryPartnerList.data.push(partner);
            }
            deliveryPartnerList.message="List of Delivery Partners"
           
        });
    
        if(deliveryPartnerList.data.length==0){
            deliveryPartnerList.message="Not Found";
            res.send(deliveryPartnerList);
        }
        else{
             res.send(deliveryPartnerList);
        }
      
    }

    let pincode=req.params.pincode;
    fetchDetailsByPincode(pincode);
}