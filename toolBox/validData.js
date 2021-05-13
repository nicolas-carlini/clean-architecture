
exports.validDataHard = (data, template)=>{ 
    Object.keys(data).forEach((key)=>{
        if(!template.indexOf(key)) throw "Is't valid data";
    });
}