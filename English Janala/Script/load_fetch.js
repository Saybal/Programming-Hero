
function loadLesson()
{
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(response => response.json())
       .then((data) => displayLessons(data.data))
    // .then(data => console.log(data.data))

}

function displayLessons(level)
{
    const lessonDhora = document.getElementById("lesson");

    for (let les of level)
    {
        const l = document.createElement("div")
        l.innerHTML =
        `<a id=btn-${les.id} onclick="vocabulary(${les.level_no}, ${les.id})" class="btn border-[#422AD5] bg-white text-[#422AD5] flex justify-center items-center font-semibold hover:bg-[#422AD5] hover:text-white">
            <i class="fa-solid fa-book-open text-sm"></i>
            <p class="font-semibold text-base">Lesson -${les.level_no}</p>
        </a>`;

        lessonDhora.append(l);
    }
}

function vocabulary(level, id)
{
    const url = `https://openapi.programming-hero.com/api/level/${level}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => {

            const btn = document.getElementById(`btn-${id}`);
            removeactive();
            btn.classList.add("active");
            document.getElementById("vocabulary").innerHTML ="";
            displayLoading();

            setTimeout(() => {
                document.getElementById("vocabulary").innerHTML ="";
                
                ((data.data.length == 0) ? displayempty(level) : displayvocabulary(data.data));
            }, 2000);
            // colorbtn(id);
    } )
    // .then(data => console.log(data.data.length))
}

function displayLoading()
{
    const loader = document.getElementById('vocabulary');
    const loading = document.createElement("div");
    loading.classList.add("col-span-3", "my-[4rem]", "text-center");
    loading.innerHTML =
        `
            <div class="mb-3 flex flex-row justify-center">
                <h2 class="ban-font-2 text-4xl font-medium my-4">লোড হচ্ছে</h2>
                
                <div class="loader-spin-2" ></div>

            </div>
            
        `;
    loader.append(loading);
}

function removeactive()
{
    const btn = document.querySelectorAll(".active");
    for (b of btn)
    {
        b.classList.remove("active");
    }
}

function displayvocabulary(id)
{
    const vocabularyDhora = document.getElementById("vocabulary");
    vocabularyDhora.innerHTML = "";
        
    for (let voc of id) {
        
        if (voc.meaning === null)
        {
            voc.meaning = "অর্থ নেই";
        }
        const v = document.createElement("div")
        v.innerHTML =
            ` <div class="bg-white p-5 shadow-lg rounded-xl">
                <div class="border-2 border-slate-300 rounded-xl p-5">
                    <div class="flex flex-col items-center text-center">
                        <h2 class="font-bold text-[2rem] eng-font">${voc.word}</h2>
                        <p class="text-gray-600 my-6 text-xl eng-font">Meaning / Pronunciation</p>
                        <p class="text-gray-800 font-semibold text-[1.35rem] ban-font-2">"${voc.meaning} / ${voc.pronunciation}"</p>
                    </div>

                    <div class="flex justify-between mt-[2.5rem]">
                        <div id="detail" onclick=details(${voc.id})  class="bg-[#1A91FF10] p-4 rounded-lg hover:bg-[#1A91FF20]"><i class="fa-solid fa-circle-info text-2xl text-[#374957]"></i></div>
                        <div onclick="pronounceWord('${voc.word}')"  class="bg-[#1A91FF10] p-4 rounded-lg hover:bg-[#1A91FF20]"><i class="fa-solid fas fa-volume-up text-2xl text-[#374957]"></i></div>
                    </div>
                </div>
                
            </div>`;
        
            vocabularyDhora.append(v);
    }

    
}

function displayempty(id)
{
    const vocabularyDhora = document.getElementById("vocabulary");
    vocabularyDhora.innerHTML = "";
    
    const show = document.createElement("div");
    show.classList.add("col-span-3", "my-[4rem]", "text-center");
    show.innerHTML =
        `
            <div class="mb-3 flex justify-center">
                <h1 class="loader border-3 border-blue-300 rounded-full w-[4rem] h-[10rem] p-10"></h1>
            </div>
            <h2 class="ban-font-2 text-4xl font-medium my-4"><span class="eng-font">Lesson - ${id} </span>শীঘ্রই প্রকাশিত হবে। ধন্যবাদ</h2>
        `;
    vocabularyDhora.append(show);
}


function details(id)
{
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/word/${id}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then((data) => displaydetails(data.data));
    
}

function displaydetails(data)
{
    document.getElementById("word_details").showModal();
    const words = document.getElementById("description");

    if (data.meaning === null)
    {
        data.meaning = "অর্থ নেই";
    }
    
    if (data.partsOfSpeech === undefined)
    {
        data.partsOfSpeech = "কোনো Parts Of Speech পাওয়া যায় নি।";
    }
        
    words.innerHTML =
        `<h2 class="font-semibold eng-font text-4xl text-left">${data.word} (<span class="fa-solid fa-microphone text-4xl text-black"></span> : ${data.pronunciation})</h2>
              <div class="my-8 text-left">
                  <p class="mb-3 font-semibold eng-font text-xl">Meaning</p>
                  <p class="font-normal ban-font-2 text-xl">${data.meaning}</p>
              </div>
              <div class="my-8 text-left">
                  <p class="mb-3 font-semibold eng-font text-xl">Example</p>
                  <p class="font-normal ban-font-2 text-xl">${data.sentence}</p>
              </div>
              <div class="my-8 text-left">
                  <p class="mb-3 font-semibold eng-font text-xl">parts of Speech</p>
                  <p class="font-normal ban-font-2 text-xl">${data.partsOfSpeech}</p>
              </div>
              `;
        if (data.synonyms.length === 0)
        {
            const sym = document.createElement("div");
            sym.innerHTML =
                `<p class="font-semibold ban-font-2 text-xl text-left">দুঃখিত কোনো সমার্থক শব্দ পাওয়া যায় নি।</p>`
            words.append(sym);
    }
        else {

            const sym = document.createElement("div");
            sym.innerHTML =
                `<div class="my-8 text-left">
                  <p class="font-semibold ban-font-2 text-xl mb-2">সমার্থক শব্দ গুলো</p>
                  <div id="synonyms"  class="flex gap-5">
                      
                  </div>
            </div>`;

            for (let sm of data.synonyms)
            {
                const s = document.createElement('div');
                s.innerHTML =
                    `<a  class="btn border-[#D7E4EF] bg-[#EDF7FF] text-[#000000] hover:bg-[#422AD5] hover:text-white">
                          <p class="font-semibold text-base">${sm}</p>
                      </a>`;
                sym.querySelector("#synonyms").append(s);
            }
            words.append(sym);
    }
    
}

function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-EN'; // English
    window.speechSynthesis.speak(utterance);
}

// 
loadLesson();