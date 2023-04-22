//s=[name,course,category,state,income,percent,deadline,provider,money,jpg]
const s=[
['FAEA','','','',0.27,33,'30 June 2023','Foundation for Academic Excellence and Access','Discretion of FAEA',''],
['INSPIRE','','','',6,75,'31 Jan 2023','Department of Science & Technology','80,000 per year',''],
['Ishan Uday Scholarships','','','',7,33,'15 April 2023 ','Ministry of HRD and UGC','upto 2.5 lakhs',''],
['Sitaram Jindal Scholarships','','','',8,60,'30 June 2023','Sitaram Jindal Foundation','16,800 per year',''],
['Pragati','','','',9,33,'31 December 2023*','AICTE','50,000 per year',''],
['Keep India Smiling Foundation','','','',5,60,'31 March 2023','Colgate','30,000 per year',''],
['HDFC Bank Parivartan’s ECS Scholarship Beyond School Programme','','','',2.5,55,'15 March 2023','HDFC','30,000 per year',''],
['HDFC Bank Parivartan’s ECS Scholarship Professional Education Programme','','','',2.5,55,'15 March 2023','HDFC','50,000 per year',''],
['IndianOil Educational Scholarship Scheme','','','',1,65,'15 October 2023*','Indian Oil Corporation','36,000 per year',''],
['Siemens Scholarship Program','','','',2,60,'30 June 2023','Siemens','upto 3 Lakh','']
];

function check(list){
    const l=[];
    const a=0;
    for(let i=0;i<list.length;i++){
        const sublist=list[i];
        if (sublist[1]=='graduation' && sublist[2]>=2.5 && sublist[3]>=50){
            l.push(sublist);
            a++;
        }
    }
    console.log([l,a]);
}
 console.log(check(s));

 function getOption(){
    const s=[
        ['FAEA','','','',0.27,33,'30 June 2023','Foundation for Academic Excellence and Access','Discretion of FAEA',''],
        ['INSPIRE','','','',6,75,'31 Jan 2023','Department of Science & Technology','80,000 per year',''],
        ['Ishan Uday Scholarships','','','',7,33,'15 April 2023 ','Ministry of HRD and UGC','upto 2.5 lakhs',''],
        ['Sitaram Jindal Scholarships','','','',8,60,'30 June 2023','Sitaram Jindal Foundation','16,800 per year',''],
        ['Pragati','','','',9,33,'31 December 2023*','AICTE','50,000 per year',''],
        ['Keep India Smiling Foundation','','','',5,60,'31 March 2023','Colgate','30,000 per year',''],
        ['HDFC Bank Parivartan’s ECS Scholarship Beyond School Programme','','','',2.5,55,'15 March 2023','HDFC','30,000 per year',''],
        ['HDFC Bank Parivartan’s ECS Scholarship Professional Education Programme','','','',2.5,55,'15 March 2023','HDFC','50,000 per year',''],
        ['IndianOil Educational Scholarship Scheme','','','',1,65,'15 October 2023*','Indian Oil Corporation','36,000 per year',''],
        ['Siemens Scholarship Program','','','',2,60,'30 June 2023','Siemens','upto 3 Lakh','']];
        function check(list){
            let l=[];
            let a=0;
            for(let i=0;i<list.length;i++){
                const sublist=list[i];
                if (sublist[4]>=2.5){
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
 var templateHTML = 'div id="element1"></div>'+
 '<span id="element2"></span>'+
 '<ul id="element3"></ul>'
;

 var templatesContainer = document.getElementById('templates-container');

 for (var i = 0; i < numberOfTemplates; i++) {
     var template = document.createElement('div');
     template.classList.add('template');
     template.innerHTML = templateHTML;
     templatesContainer.appendChild(template);
 }
}