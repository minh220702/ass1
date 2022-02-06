import data from "../data";

const News = {
    render() {
        return /* html */`
<div class="grid grid-cols-3 gap-8 pt-6 pl-40 pb-6">
            ${data.map((post) => `
  <div class=" w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
  <a href="/news/${post.id}">  
  <img src="${post.img}" alt="">
  </a>
    <div class="p-5">
      <h1 class="text-2xl font-bold">${post.title}</h1>
     
      <p class="mt-1 text-gray-500 font-">${post.desc}</pa>
    </div>
  </div>
  `).join("")}
</div>`;
    },
};
export default News;