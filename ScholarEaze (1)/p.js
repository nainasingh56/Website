//s=[name,gender,course,category,state,income,percent,deadline,provider,money,jpg]
//const s=[
//['FAEA','','','',27000,33,'30 June 2023','Foundation for Academic Excellence and Access','Discretion of FAEA',''],
//['INSPIRE','','','',600000,75,'31 Jan 2023','Department of Science & Technology','80,000 per year',''],
//['Ishan Uday Scholarships','','','',700000,33,'15 April 2023 ','Ministry of HRD and UGC','upto 2.5 lakhs',''],
//['Sitaram Jindal Scholarships','','','',800000,60,'30 June 2023','Sitaram Jindal Foundation','16,800 per year',''],
//['Pragati','','','',900000,33,'31 December 2023*','AICTE','50,000 per year',''],
//['Keep India Smiling Foundation','','','',500000,60,'31 March 2023','Colgate','30,000 per year',''],
//['HDFC Bank Parivartan’s ECS Scholarship Beyond School Programme','','','',250000,55,'15 March 2023','HDFC','30,000 per year',''],
//['HDFC Bank Parivartan’s ECS Scholarship Professional Education Programme','','','',250000,55,'15 March 2023','HDFC','50,000 per year',''],
//['IndianOil Educational Scholarship Scheme','','','',100000,65,'15 October 2023*','Indian Oil Corporation','36,000 per year',''],
//['Siemens Scholarship Program','','','',200000,60,'30 June 2023','Siemens','upto 3 Lakh','']
//];
//
//function check(list){
//    const l=[];
//    const a=0;
//    for(let i=0;i<list.length;i++){
//        const sublist=list[i];
//        if (sublist[1]=='graduation' && sublist[2]>=2.5 && sublist[3]>=50){
//            l.push(sublist);
//            a++;
//        }
//    }
//    console.log([l,a]);
//}
// console.log(check(s));
//
 function getOption(){
    const s=[
        ['FAEA','ALL','ALL','SC/ST','ALL',27000,33,'30 June 2023','Foundation for Academic Excellence and Access','Discretion of FAEA',''],
        ['INSPIRE','ALL','Bachelor','ALL','ALL',600000,75,'31 Jan 2023','Department of Science & Technology','80,000 per year',''],
        ['Ishan Uday Scholarships','ALL','ALL','ALL','NER',700000,33,'15 April 2023 ','Ministry of HRD and UGC','upto 2.5 lakhs',''],
        ['Sitaram Jindal Scholarships','ALL','ALL','ALL','ALL',800000,60,'30 June 2023','Sitaram Jindal Foundation','16,800 per year',''],
        ['Pragati','Female','ENG','ALL','ALL',900000,33,'31 December 2023*','AICTE','50,000 per year',''],
        ['Keep India Smiling Foundation','ALL','Bachelor','ALL','ALL',500000,60,'31 March 2023','Colgate','30,000 per year',''],
        ['HDFC Bank Parivartan’s ECS Scholarship Beyond School Programme','ALL','Bachelor','ALL','ALL',250000,55,'15 March 2023','HDFC','30,000 per year',''],
        ['HDFC Bank Parivartan’s ECS Scholarship Professional Education Programme','ALL','B.tech','ALL','ALL',250000,55,'15 March 2023','HDFC','50,000 per year',''],
        ['IndianOil Educational Scholarship Scheme','ALL','B.Tech','ALL','ALL',100000,65,'15 October 2023*','Indian Oil Corporation','36,000 per year',''],
        ['Siemens Scholarship Program','ALL','B.Tech','ALL','ALL',200000,60,'30 June 2023','Siemens','upto 3 Lakh','']];
        function check(list){
            let l=[];
            let a=0;
            for(let i=0;i<list.length;i++){
                const sublist=list[i];
                if (sublist[5]>=income && sublist[6]<=percent && (sublist[1]==("ALL" || gender)) && (sublist[3]==("ALL" || category)) && (sublist[2]==(course||"ALL")) &&(sublist[4]==("ALL"||state))){
                    l.push(sublist);
                    a++;
                }
            }
            console.log([l,a]);
        }   
    selectElement=document.querySelector('#dropdown-menu1')
    gender=selectElement.options[selectElement.selectedIndex].value;
    console.log(gender);
    selectElement=document.querySelector('#dropdown-menu5')
    course=selectElement.options[selectElement.selectedIndex].value;
    console.log(course);
    selectElement=document.querySelector('#dropdown-menu6')
    category=selectElement.options[selectElement.selectedIndex].value;
    console.log(category);
    selectElement=document.querySelector('#dropdown-menu2')
    state=selectElement.options[selectElement.selectedIndex].value;
    console.log(state);
    selectElement=document.querySelector('#dropdown-menu3')
    income=selectElement.options[selectElement.selectedIndex].value;
    console.log(income);
    selectElement=document.querySelector('#dropdown-menu4')
    percent=selectElement.options[selectElement.selectedIndex].value;
    console.log(percent);
 
let CHECk=check(s);
let sch=CHECk[0];
let numberOfTemplates=CHECk[1];
document.getElementById("temp").innerHTML = 5 + 6;
}