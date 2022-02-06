import News from "../components/news";

const HomePage = {
    render() {
        return /* html */`
            <div class="banner">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d4d4a276928965.5d4d803d44b42.png" alt="" width="1900px">
            </div>
            <div class="news">
                ${News.render()}
            </div>
        `;
    },
};
export default HomePage;