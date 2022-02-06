import Navigo from "navigo";
import HomePage from "./pages/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import addSp from "./pages/add";
import editSp from "./pages/edit";
import News from "./pages/news";
import Detail from "./pages/detail";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/news" : () => {
        print(News.render());
    },
    "/signup" : () => {
      print(Signup.render());
  },
  "/signin" : () => {
    print(Signin.render());
},
"/dashboard" : () => {
  print(Dashboard.render());
},

    "/about": () => {
        print("About Page");
    },
    "/product": () => {
        print("Product Page");
    },
    "/news/:id": (value) => {
        console.log(value.data.id);
        print(Detail.render(value.data.id));
    },
    "/admin/news/add": () => {
      print(addSp.render());
    }, 
    "/admin/news/:id/edit": (value) => {
      print(editSp.render(value.data.id));
    },
    
   
    
});

router.notFound(() => print("Not Found Page"));

router.resolve();
