"use strict";exports.id=880,exports.ids=[880],exports.modules={2089:(e,s,t)=>{t.d(s,{Z:()=>x});var r=t(997),i=t(9816),n=t.n(i),a=t(6689),l=t(1163),c=t(6981),d=t(3966),o=t(1664),h=t.n(o);let x=function(){let{cart:e,addItem:s,removeItem:t}=(0,a.useContext)(d.Z);console.log(`in CART: ${JSON.stringify(e)}`);let i=(0,l.useRouter)();return console.log(`Router Path: ${JSON.stringify(i)}`),(0,r.jsxs)("div",{className:"jsx-73886ce4ede8a5f5",children:[r.jsx("h1",{className:"jsx-73886ce4ede8a5f5",children:" Cart"}),(0,r.jsxs)(c.Card,{style:{padding:"10px 5px"},className:"cart",children:[r.jsx(c.CardTitle,{style:{margin:10},children:"Your Order:"}),r.jsx("hr",{className:"jsx-73886ce4ede8a5f5"}),(0,r.jsxs)(c.CardBody,{style:{padding:10},children:[r.jsx("div",{style:{marginBottom:6},className:"jsx-73886ce4ede8a5f5",children:r.jsx("small",{className:"jsx-73886ce4ede8a5f5",children:"Items:"})}),r.jsx("div",{className:"jsx-73886ce4ede8a5f5",children:(()=>{let{items:i}=e;return(console.log(`items: ${JSON.stringify(i)}`),i&&i.length)?e.items.map(e=>{if(e.quantity>0)return(0,r.jsxs)("div",{className:"items-one",style:{marginBottom:15},children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("span",{id:"item-price",children:["\xa0 $",e.price]}),(0,r.jsxs)("span",{id:"item-name",children:["\xa0 ",e.name]})]}),(0,r.jsxs)("div",{children:[r.jsx(c.Button,{style:{height:25,padding:0,width:15,marginRight:5,marginLeft:10},onClick:()=>s(e),color:"link",children:"+"}),r.jsx(c.Button,{style:{height:25,padding:0,width:15,marginRight:10},onClick:()=>t(e),color:"link",children:"-"}),(0,r.jsxs)("span",{style:{marginLeft:5},id:"item-quantity",children:[e.quantity,"x"]})]})]},e.id)}):r.jsx("div",{})})()}),r.jsx("div",{className:"jsx-73886ce4ede8a5f5",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(c.Badge,{style:{width:200,padding:10},color:"light",children:[r.jsx("h5",{style:{fontWeight:100,color:"green"},children:"Current Total:"}),(0,r.jsxs)("h3",{children:["$",e.total]})]}),r.jsx(h(),{href:"/checkout/",children:r.jsx(c.Button,{style:{width:"60%"},color:"success",children:r.jsx("a",{children:"Place Order"})})})]})}),console.log(`Router Path: ${i.asPath}`)]})]}),r.jsx(n(),{id:"73886ce4ede8a5f5",children:"#item-price.jsx-73886ce4ede8a5f5{font-size:1.3em;color:rgba(97,97,97,1)}#item-quantity.jsx-73886ce4ede8a5f5{font-size:.95em;padding-bottom:4px;color:rgba(158,158,158,1)}#item-name.jsx-73886ce4ede8a5f5{font-size:1.3em;color:rgba(97,97,97,1)}"})]})}},3966:(e,s,t)=>{t.d(s,{Z:()=>a});var r=t(6689),i=t.n(r);let n=i().createContext({isAuthenticated:!0,cart:{items:[],total:0},addItem:()=>{},removeItem:()=>{},user:!1,setUser:()=>{}}),a=n},6880:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var r=t(997),i=t(6689),n=t(968),a=t.n(n),l=t(3966);t(8788);var c=t(9816),d=t.n(c),o=t(1664),h=t.n(o),x=t(6981);let j=e=>{let{user:s}=(0,i.useContext)(l.Z);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a(),{children:[r.jsx("title",{children:"Pizza Palooza"}),r.jsx("meta",{charSet:"utf-8"}),r.jsx("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),r.jsx("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"}),r.jsx("script",{src:"https://js.stripe.com/v3"})]}),(0,r.jsxs)("header",{className:"jsx-1369841ee8587c7f",children:[r.jsx(d(),{id:"1369841ee8587c7f",children:"a.jsx-1369841ee8587c7f{color:green}h5.jsx-1369841ee8587c7f{color:red;padding-top:11px}"}),(0,r.jsxs)(x.Nav,{className:"navbar background-color: #1a751d",children:[r.jsx(x.NavItem,{children:r.jsx(h(),{href:"/",children:r.jsx("a",{className:"jsx-1369841ee8587c7f navbar-brand",children:"\uD83C\uDF55Pizza Palooza"})})}),r.jsx(x.NavItem,{className:"ml-auto",children:s?r.jsx("h5",{className:"jsx-1369841ee8587c7f",children:s.username}):r.jsx(h(),{href:"/register",children:r.jsx("a",{className:"jsx-1369841ee8587c7f nav-link",children:" Sign up"})})}),r.jsx(x.NavItem,{children:s?r.jsx(h(),{href:"/",children:r.jsx("a",{onClick:()=>{logout(),setUser(null)},className:"jsx-1369841ee8587c7f nav-link",children:"Logout"})}):r.jsx(h(),{href:"/login",children:r.jsx("a",{className:"jsx-1369841ee8587c7f nav-link",children:"Sign in"})})})]})]}),r.jsx(x.Container,{children:e.children})]})};t(6734);let m=function(e){var{cart:s,addItem:t,removeItem:n,user:c,setUser:d}=(0,i.useContext)(l.Z);let[o,h]=(0,i.useState)({cart:s}),{Component:x,pageProps:m}=e;return t=e=>{let{items:s}=o.cart,t=!0;if(s.length>0&&(t=s.find(s=>s.id===e.id))||(t=!1),console.log(`Found Item value: ${JSON.stringify(t)}`),t)console.log(`Total so far:  ${o.cart.total}`),r={items:s.map(e=>e.id===t.id?Object.assign({},e,{quantity:e.quantity+1}):e),total:o.cart.total+e.price};else{let s=JSON.parse(JSON.stringify(e));s.quantity=1;var r={items:[...o.cart.items,s],total:o.cart.total+e.price};h({cart:r}),console.log(`Total items: ${JSON.stringify(r)}`)}h({cart:r}),console.log(`state reset to cart:${JSON.stringify(o)}`)},n=e=>{let{items:s}=o.cart,t=s.find(s=>s.id===e.id);if(t.quantity>1)var r={items:s.map(e=>e.id===t.id?Object.assign({},e,{quantity:e.quantity-1}):e),total:o.cart.total-e.price};else{console.log(`Try remove item ${JSON.stringify(t)}`);let i=s.findIndex(e=>e.id===t.id);s.splice(i,1);var r={items:s,total:o.cart.total-e.price}}h({cart:r})},(0,r.jsxs)(l.Z.Provider,{value:{cart:o.cart,addItem:t,removeItem:n,isAuthenticated:!1,user:null,setUser:()=>{}},children:[r.jsx(a(),{children:r.jsx("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"})}),r.jsx(j,{children:r.jsx(x,{...m})})]})}},8788:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});var r=t(997),i=t(6689),n=t(2089),a=t(9114),l=t(1163),c=t(3966),d=t(6981);let o=function({restId:e}){let[s,t]=(0,i.useState)(),{addItem:n}=(0,i.useContext)(c.Z),o=a.gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;(0,l.useRouter)();let{loading:h,error:x,data:j}=(0,a.useQuery)(o,{variables:{id:e}});if(h)return r.jsx("p",{children:"Loading..."});if(x)return r.jsx("p",{children:"ERROR here"});if(!j)return r.jsx("p",{children:"Not found"});let m=j.restaurant;return e>0?r.jsx(r.Fragment,{children:m.dishes.map(e=>r.jsx(d.Col,{xs:"6",sm:"4",style:{padding:0},children:(0,r.jsxs)(d.Card,{style:{margin:"0 10px"},children:[r.jsx(d.CardImg,{top:!0,style:{height:150,width:150},src:`http://localhost:1337${e.image.url}`}),(0,r.jsxs)(d.CardBody,{children:[r.jsx(d.CardTitle,{children:e.name}),r.jsx(d.CardText,{children:e.description})]}),r.jsx("div",{className:"card-footer",children:r.jsx(d.Button,{color:"info",outline:!0,color:"primary",onClick:()=>n(e),children:"+ Add To Cart"})})]})},e.id))}):r.jsx("h1",{children:" No Dishes"})},h=function(e){let[s,t]=(0,i.useState)(0),{cart:n}=(0,i.useContext)(c.Z),[l,h]=(0,i.useState)(n),x=a.gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `,{loading:j,error:m,data:u}=(0,a.useQuery)(x);if(j)return r.jsx("p",{children:"Loading..."});if(m)return r.jsx("p",{children:"ERROR"});if(!u)return r.jsx("p",{children:"Not found"});console.log(`Query Data: ${u.restaurants}`);let g=u.restaurants.filter(s=>s.name.toLowerCase().includes(e.search));if(g[0].id,!(g.length>0))return r.jsx("h1",{children:" No Restaurants Found"});{let e=g.map(e=>r.jsx(d.Col,{xs:"6",sm:"4",children:(0,r.jsxs)(d.Card,{style:{margin:"0 0.5rem 20px 0.5rem"},children:[r.jsx(d.CardImg,{top:!0,style:{height:200},src:"http://localhost:1337"+e.image.url}),r.jsx(d.CardBody,{children:r.jsx(d.CardText,{children:e.description})}),r.jsx("div",{className:"card-footer",children:r.jsx(d.Button,{color:"info",onClick:()=>t(e.id),children:e.name})})]})},e.id));return(0,r.jsxs)(d.Container,{children:[r.jsx(d.Row,{xs:"3",children:e}),r.jsx(d.Row,{xs:"3",children:r.jsx(o,{restId:s,children:" "})})]})}},x=function(){let e=process.env.NEXT_PUBLIC_API_URL||"http://localhost:1337";console.log(`URL: ${e}`);let[s,t]=(0,i.useState)(""),l=new a.HttpLink({uri:`${e}/graphql`}),c=new a.InMemoryCache,o=new a.ApolloClient({link:l,cache:c});return(0,r.jsxs)(a.ApolloProvider,{client:o,children:[(0,r.jsxs)("div",{className:"search",children:[r.jsx("h2",{children:" Pizza Restaurants & Dishes"}),(0,r.jsxs)(d.InputGroup,{children:[r.jsx(d.InputGroupAddon,{addonType:"append",children:" Search "}),r.jsx(d.Input,{onChange:e=>t(e.target.value.toLocaleLowerCase()),value:s})]}),r.jsx("br",{})]}),r.jsx(h,{search:s}),r.jsx(n.Z,{children:" "})]})}}};