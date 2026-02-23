let total = document.getElementById('totalcount')
let inerviewingcount = document.getElementById('inerviewingcount')
let rejectingcount = document.getElementById('rejectingcount')

let cards = document.getElementById('cards')

let allbtn = document.getElementById('all-filtering-btn')
let interviewbtn = document.getElementById('interviewing-filtering-btn')
let rejectingbtn = document.getElementById('rejecting-filtering-btn')

let maincontainer = document.getElementById('main')

let filtersection = document.getElementById('filtered_section')


function calculatingCount(){
    total.innerText = cards.children.length
}
calculatingCount()

let interviewing = []
let rejecting = []

function toggle_style(id){


    allbtn.classList.remove('bg-[#3b82f6FF]', 'text-white')
    interviewbtn.classList.remove('bg-[#3b82f6FF]', 'text-white')
    rejectingbtn.classList.remove('bg-[#3b82f6FF]', 'text-white')

    const selected = document.getElementById(id)

    selected.classList.add('bg-[#3b82f6FF]', 'text-white')
    if(id === 'interviewing-filtering-btn'){
        allcards.classList.add('hidden')
        filtersection.classList.remove('hidden')
        renderInterviewing()
    }else if(id == 'all-filtering-btn'){
        allcards.classList.remove('hidden')
        filtersection.classList.add('hidden')
    }else if(id=='rejecting-filtering-btn'){
        allcards.classList.add('hidden')
        filtersection.classList.remove('hidden')
        renderRejecting()
    }

}

maincontainer.addEventListener('click',function(event){
    
    if(event.target.classList.contains('interviewing-btn')){
        const parentNode = event.target.parentNode.parentNode.parentNode

        const jobname = parentNode.querySelector('.Jobname')
        const skills = parentNode.querySelector('.skills')
        const address  = parentNode.querySelector('.address')
        const status = parentNode.querySelector('.status')
        const notes = parentNode.querySelector('.notes')

        const cardinfo = {
        jobname: jobname.innerText,
        skills: skills.innerText,
        address: address.innerText,
        status: "Interview",
        notes: notes.innerText
        };

        rejecting = rejecting.filter(item => item.jobname !== jobname.innerText)
        rejectingcount.innerText = rejecting.length 
        const jobexist = interviewing.find(item => item.jobname === cardinfo.jobname);

        parentNode.querySelector('.status').innerHTML = `<span class= "w-fit text-green-700 p-1 text-lg">Interview</span>`


        if(!jobexist){
            interviewing.push(cardinfo)
        }
        inerviewingcount.innerText = interviewing.length
        }else if(event.target.classList.contains('rejecting-btn')){
        const parentNode = event.target.parentNode.parentNode.parentNode

        const jobname = parentNode.querySelector('.Jobname')
        const skills = parentNode.querySelector('.skills')
        const address  = parentNode.querySelector('.address')
        const status = parentNode.querySelector('.status')
        const notes = parentNode.querySelector('.notes')

        const cardinfo = {
        jobname: jobname.innerText,
        skills: skills.innerText,
        address: address.innerText,
        status: "Rejected",
        notes: notes.innerText
        };

        interviewing = interviewing.filter(item => item.jobname !== jobname.innerText)
        inerviewingcount.innerText = interviewing.length 
        const jobexist = rejecting.find(item => item.jobname === cardinfo.jobname);

        parentNode.querySelector('.status').innerHTML =  `<span class= "w-fit text-red-700 p-1 text-lg">Rejected</span>`

        if(!jobexist){
            rejecting.push(cardinfo)
        }
        rejectingcount.innerText = rejecting.length
        }




})


function renderInterviewing(){
    filtersection.innerHTML = ''
    
    if(rejecting.length === 0){
        filtersection.innerHTML = `
         <div class="flex flex-col items-center justify-center mt-20 gap-2 mb-8">
            <span><i class="fa-regular fa-file text-4xl text-gray-300"></i></span>
            <p class="text-gray-700 font-semibold text-[18px]">No jobs available</p>
            <p class="text-gray-600 text-[14px]">check back soon for new job opportunities</p>
         </div>
    `
    return
    }
    for(let interview of interviewing){
        let div = document.createElement('div')
        div.className = 'my-4 flex justify-between p-6 border rounded-lg border-gray-300'

        div.innerHTML = `
            <div class="space-y-5">
                <div>
                    <p class="Jobname text-[#002c5cFF] text-[18px] font-semibold">${interview.jobname}</p>
                    <p class="skills text-[#323b49FF] text-[16px]">${interview.skills}</p>
                </div>
                <p class="address text-[#323b49FF]">${interview.address}</p>
                <p class="status bg-green-100 w-fit text-green-700 p-1 text-lg rounded-md">${interview.status}</p>
                <p class="notes text-[#323b49FF]">${interview.notes}</p>
                <div class="gap-2">
                    <button class="interviewing-btn px-3 py-2 border-2 rounded-md border-[#10b981FF] font-bold text-[#10b981FF]">Interview</button>
                    <button class="rejecting-btn px-3 py-2 border-2 rounded-md border-[#ef4444FF] font-bold text-[#ef4444FF]">Rejected</button>
                </div>
            </div>
            <div>
                <button class="border border-[#f1f2f4FF] rounded-full p-2"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `
        filtersection.appendChild(div)
    }
}

function renderRejecting(){
    filtersection.innerHTML = ''
    if(rejecting.length === 0){
        filtersection.innerHTML = `
         <div class="flex flex-col items-center justify-center mt-20 gap-2 mb-8">
            <span><i class="fa-regular fa-file text-4xl text-gray-300"></i></span>
            <p class="text-gray-700 font-semibold text-[18px]">No jobs available</p>
            <p class="text-gray-600 text-[14px]">check back soon for new job opportunities</p>
         </div>
    `
    return
    }

    for(let reject of rejecting){
        let div = document.createElement('div')
        div.className = 'my-4 flex justify-between p-6 border rounded-lg border-gray-300'

        div.innerHTML = `
            <div class="space-y-5">
                <div>
                    <p class="Jobname text-[#002c5cFF] text-[18px] font-semibold">${reject.jobname}</p>
                    <p class="skills text-[#323b49FF] text-[16px]">${reject.skills}</p>
                </div>
                <p class="address text-[#323b49FF]">${reject.address}</p>
                <p class="status bg-red-100 w-fit text-red-700 p-1 text-lg rounded-md">${reject.status}</p>
                <p class="notes text-[#323b49FF]">${reject.notes}</p>
                <div class="gap-2">
                    <button class="interviewing-btn px-3 py-2 border-2 rounded-md border-[#10b981FF] font-bold text-[#10b981FF]">Interview</button>
                    <button class="rejecting-btn px-3 py-2 border-2 rounded-md border-[#ef4444FF] font-bold text-[#ef4444FF]">Rejected</button>
                </div>
            </div>
            <div>
                <button class="border border-[#f1f2f4FF] rounded-full p-2"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `
        filtersection.appendChild(div)
    }
}
