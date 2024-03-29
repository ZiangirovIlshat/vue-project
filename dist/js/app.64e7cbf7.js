(function(){"use strict";var e={6067:function(e,t,a){var s=a(3751),o=a(641);const r={class:"wrapper"};function i(e,t,a,s,i,n){const l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(l)])}var n=a(6278),l=(0,o.pM)({methods:{...(0,n.i0)({fetchUser:"user/fetchUser"})},created(){}}),d=a(6262);const c=(0,d.A)(l,[["render",i]]);var u=c,p=a(5220);a(4603),a(7566),a(8721);const g={namespaced:!0,state:{data:[],loading:!1,error:""},getters:{getRepoById:e=>t=>e.data.find((e=>e.id===t))},mutations:{SET_POSTS_DATA(e,t){e.data=t.items.map((e=>(e.following={status:!1,loading:!1,error:""},e)))},SET_POSTS_LOADING(e,t){e.loading=t},SET_POSTS_ERROR(e,t){e.error=t},SET_README_DATA(e,t){e.data=e.data.map((e=>(t.id===e.id&&(e.readme=t.content),e)))},SET_FOLLOWING_DATA(e,t){e.data=e.data.map((e=>(t.id===e.id&&(e.following={...e.following,...t.data}),e)))}},actions:{async fetchPosts({commit:e}){e("SET_POSTS_LOADING",!0);try{const t=new URL("https://api.github.com/search/repositories");t.searchParams.set("order","desc"),t.searchParams.set("sort","start"),t.searchParams.set("q","language:javascript created:>"+h()),t.searchParams.set("per_page",10);const a=await fetch(t.toString(),{headers:{Authorization:`token ${localStorage.getItem("token")}`}}),s=await a.json();e("SET_POSTS_DATA",s)}catch{e("SET_POSTS_DATA",[])}finally{e("SET_POSTS_LOADING",!1)}},async fetchReadme({commit:e,getters:t},{id:a,owner:s,name:o}){const r=t.getRepoById(a);if(void 0===r.readme)try{const t=await fetch(`https://api.github.com/repos/${s}/${o}/readme`,{headers:{accept:"application/vnd.github.v3.html+json",Authorization:`token ${localStorage.getItem("token")}`}}),r=await t.text();e("SET_README_DATA",{id:a,content:r})}catch(i){throw i}},async setStar({commit:e,getters:t},a){const{name:s,owner:o}=t.getRepoById(a);e("SET_FOLLOWING_DATA",{id:a,data:{status:!1,loading:!0,error:""}});try{await fetch(`https://api.github.com/user/starred/${o.login}/${s}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Length":"0"}}),e("SET_FOLLOWING_DATA",{id:a,data:{status:!0}})}catch{e("SET_FOLLOWING_DATA",{id:a,data:{error:"Не удалось выполнить действие"}})}finally{e("SET_FOLLOWING_DATA",{id:a,data:{loading:!1}})}},async removeStar({commit:e,getters:t},a){const{name:s,owner:o}=t.getRepoById(a);e("SET_FOLLOWING_DATA",{id:a,data:{status:!0,loading:!0,error:""}});try{await fetch(`https://api.github.com/user/starred/${o.login}/${s}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Length":"0"}}),e("SET_FOLLOWING_DATA",{id:a,data:{status:!1}})}catch{e("SET_FOLLOWING_DATA",{id:a,data:{error:"Не удалось выполнить действие"}})}finally{e("SET_FOLLOWING_DATA",{id:a,data:{loading:!1}})}}}};function h(){const e=new Date,t=new Date(e.getTime()-6048e5),a=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),r=`${a}-${s}-${o}`;return r}var v=g;const m={namespaced:!0,state:{data:[],loading:!1,error:""},getters:{getRepoById:e=>t=>e.data.find((e=>e.id===t))},mutations:{SET_POSTS_DATA(e,t){e.data=t},SET_ISSUES_DATA(e,t){e.data=e.data.map((e=>(t.id===e.id&&(e.issues=t.content),e)))},SET_POSTS_LOADING(e,t){e.loading=t},SET_POSTS_ERROR(e,t){e.error=t}},actions:{async fetchLikedPosts({commit:e}){try{const t=await fetch("https://api.github.com/user/starred",{headers:{Authorization:`token ${localStorage.getItem("token")}`}}),a=await t.json();e("SET_POSTS_DATA",a)}catch(t){e("SET_POSTS_ERROR","<b>Ой! Что-то пошло не так... :(</b><br>Не удалось получить данные")}finally{e("SET_POSTS_LOADING",!1)}},async fetchIssues({commit:e,getters:t},{id:a,owner:s,name:o}){const r=t.getRepoById(a);if(void 0===r.issues)try{const t=await fetch(`https://api.github.com/repos/${s}/${o}/issues`,{headers:{Authorization:`token ${localStorage.getItem("token")}`}}),r=await t.json();e("SET_ISSUES_DATA",{id:a,content:r})}catch(i){throw i}}}};var _=m;const f={namespaced:!0,state:{data:null},mutations:{SET_USER_DATA(e,t){e.data=t}},actions:{async fetchUser({commit:e}){try{const t=await fetch("https://api.github.com/user",{headers:{Authorization:`token ${localStorage.getItem("token")}`}});if(401===t.status)throw new Error;const a=await t.json();e("SET_USER_DATA",a)}catch(t){throw t}}}};var k=f;const L={namespaced:!0,state:{data:null,loading:!1,error:""},mutations:{SET_REPOS_DATA(e,t){e.data=t},SET_REPOS_LOADING(e,t){e.loading=t},SET_REPOS_ERROR(e,t){e.error=t}},actions:{async fetchRepos({commit:e},t){e("SET_REPOS_LOADING",!0);try{const a=await fetch(`https://api.github.com/users/${t}/repos`,{headers:{Authorization:`token ${localStorage.getItem("token")}`}}),s=await a.json();e("SET_REPOS_DATA",s)}catch(a){e("SET_REPOS_ERROR","<b>Ой! Что-то пошло не так... :(</b><br>Не удалось получить данные")}finally{e("SET_REPOS_LOADING",!1)}}}};var y=L;const S={namespaced:!0,state:{data:[],loading:!1,error:""},mutations:{SET_FOLLOWING_DATA(e,t){e.data=t},SET_FOLLOWING_LOADING(e,t){e.loading=t},SET_FOLLOWING_ERROR(e,t){e.error=t}},actions:{async fetchFollowing({commit:e}){e("SET_FOLLOWING_LOADING",!0);try{const t=await fetch("https://api.github.com/user/following",{headers:{Authorization:`token ${localStorage.getItem("token")}`}}),a=await t.json();e("SET_FOLLOWING_DATA",a)}catch(t){e("SET_FOLLOWING_ERROR","<b>Ой! Что-то пошло не так... :(</b><br>Не удалось получить данные")}finally{e("SET_FOLLOWING_LOADING",!1)}},async follow(){},async unFollow(){}}};var E=S,w=(0,n.y$)({getters:{getUnstarredOnly(e){return e.posts.data.filter((t=>!e.likedPosts.data.some((e=>t.id===e.id))))}},modules:{posts:v,likedPosts:_,user:k,repos:y,following:E}}),b=a(33);const A={key:0,class:"users-stories"},T={class:"users-stories__list"},O={class:"main"},C={class:"posts"},I={class:"posts__container"},D={key:0,class:"posts__loader"},F=["innerHTML"],X={class:"posts__content-wrapper"},R=["innerHTML"],M={class:"posts__details"};function P(e,t,a,s,r,i){const n=(0,o.g2)("logo"),l=(0,o.g2)("mainMenu"),d=(0,o.g2)("userStory"),c=(0,o.g2)("topline"),u=(0,o.g2)("loader"),p=(0,o.g2)("postDetails"),g=(0,o.g2)("post");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(c,null,{headline:(0,o.k6)((()=>[(0,o.bF)(n),(0,o.bF)(l,{avatarUrl:e.user.data.avatar_url},null,8,["avatarUrl"])])),content:(0,o.k6)((()=>[e.posts.data?((0,o.uX)(),(0,o.CE)("div",A,[(0,o.Lk)("ul",T,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.getUnstarredOnly,((t,a)=>((0,o.uX)(),(0,o.CE)("li",{key:t.id},[(0,o.bF)(d,{userName:t.owner.login,avatarUrl:t.owner.avatar_url,onClick:t=>e.handlePress(a)},null,8,["userName","avatarUrl","onClick"])])))),128))])])):(0,o.Q3)("",!0)])),_:1}),(0,o.Lk)("main",O,[(0,o.Lk)("div",C,[(0,o.Lk)("div",I,[e.likedPosts.loading?((0,o.uX)(),(0,o.CE)("div",D,[(0,o.bF)(u)])):e.likedPosts.error?((0,o.uX)(),(0,o.CE)("div",{key:1,class:"posts__err-message",innerHTML:e.likedPosts.error},null,8,F)):e.likedPosts.data?((0,o.uX)(!0),(0,o.CE)(o.FK,{key:2},(0,o.pI)(e.likedPosts.data,(t=>((0,o.uX)(),(0,o.CE)("div",{class:"posts__post-wrapper",key:t.id},[(0,o.bF)(g,{postData:e.getPostData(t)},{content:(0,o.k6)((()=>[(0,o.Lk)("div",X,[(0,o.Lk)("h2",null,(0,b.v_)(t.name),1),(0,o.Lk)("div",{class:"posts__text",innerHTML:t.description},null,8,R),(0,o.Lk)("div",M,[(0,o.bF)(p,{stars:t.stargazers_count,fork:t.forks_count},null,8,["stars","fork"])])])])),_:2},1032,["postData"])])))),128)):(0,o.Q3)("",!0)])])])],64)}a(4114);const U={class:"header"},N={class:"header__container"},W={class:"header__headline"},x={key:0,class:"header__content"};function Q(e,t,a,s,r,i){return(0,o.uX)(),(0,o.CE)("header",U,[(0,o.Lk)("div",N,[(0,o.Lk)("div",W,[(0,o.RG)(e.$slots,"headline",{},void 0,!0)]),(0,o.RG)(e.$slots,"myProfile",{},void 0,!0),e.$slots.content?((0,o.uX)(),(0,o.CE)("div",x,[(0,o.RG)(e.$slots,"content",{},void 0,!0)])):(0,o.Q3)("",!0)])])}var G=(0,o.pM)({name:"topline"});const j=(0,d.A)(G,[["render",Q],["__scopeId","data-v-7267ff6f"]]);var z=j,B=a.p+"img/Logo.e8d64a19.svg";const K=e=>((0,o.Qi)("data-v-389b5088"),e=e(),(0,o.jt)(),e),H={class:"logo-wrapper"},J=K((()=>(0,o.Lk)("img",{src:B,alt:"logo"},null,-1)));function $(e,t,a,s,r,i){const n=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",H,[(0,o.bF)(n,{to:"/"},{default:(0,o.k6)((()=>[J])),_:1})])}var Y=(0,o.pM)({name:"logo"});const q=(0,d.A)(Y,[["render",$],["__scopeId","data-v-389b5088"]]);var Z=q,V=a.p+"img/sprite.291ffa6b.svg";const ee=e=>((0,o.Qi)("data-v-edf5be42"),e=e(),(0,o.jt)(),e),te=V+"#home",ae=V+"#exit",se={class:"menu"},oe=ee((()=>(0,o.Lk)("svg",{class:"menu__icon",viewBox:"0 0 24 24",width:"24",height:"24"},[(0,o.Lk)("use",{href:te,x:"0",y:"0"})],-1))),re={class:"menu__nested-menu"},ie=["src"],ne={key:0,class:"menu__nested-menu-list"},le=ee((()=>(0,o.Lk)("svg",{class:"menu__icon",viewBox:"0 0 24 24",width:"24",height:"24"},[(0,o.Lk)("use",{href:ae,x:"0",y:"0"})],-1))),de=[le];function ce(e,t,a,s,r,i){const n=(0,o.g2)("router-link"),l=(0,o.gN)("click-outside");return(0,o.uX)(),(0,o.CE)("nav",se,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.bF)(n,{to:"/"},{default:(0,o.k6)((()=>[oe])),_:1})]),(0,o.Lk)("li",null,[(0,o.Lk)("div",re,[(0,o.bo)(((0,o.uX)(),(0,o.CE)("div",{class:"menu__img-container",onClick:t[0]||(t[0]=t=>e.nestedMenuIsOpen=!e.nestedMenuIsOpen)},[(0,o.Lk)("img",{src:e.avatarUrl},null,8,ie)])),[[l,e.handleClickOutside]]),e.nestedMenuIsOpen?((0,o.uX)(),(0,o.CE)("ul",ne,[(0,o.Lk)("li",null,[(0,o.bF)(n,{to:"/myprofile/repos"},{default:(0,o.k6)((()=>[(0,o.eW)("Repositories")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(n,{to:"/myprofile/following"},{default:(0,o.k6)((()=>[(0,o.eW)("Following")])),_:1})])])):(0,o.Q3)("",!0)])]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{onClick:t[1]||(t[1]=t=>e.exit())},de)])])])}var ue="data:image/png;base64,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",pe=(0,o.pM)({name:"mainMenu",props:{avatarUrl:{type:String,default:ue}},data(){return{nestedMenuIsOpen:!1}},methods:{exit(){confirm("Вы уверены, что хотите выйти?")&&(localStorage.removeItem("token"),this.$router.push({name:"auth"}))},handleClickOutside(){this.nestedMenuIsOpen=!1}}});const ge=(0,d.A)(pe,[["render",ce],["__scopeId","data-v-edf5be42"]]);var he=ge;const ve={class:"user-story"},me={class:"user-story__body"},_e={class:"user-story__avatar"},fe={class:"user-story__avatar-body"},ke=["src","alt"],Le={class:"user-story__name"};function ye(e,t,a,s,r,i){return(0,o.uX)(),(0,o.CE)("div",ve,[(0,o.Lk)("div",me,[(0,o.Lk)("div",_e,[(0,o.Lk)("div",fe,[(0,o.Lk)("img",{src:e.avatarUrl,alt:e.userName},null,8,ke)])]),(0,o.Lk)("div",Le,(0,b.v_)(e.userName),1)])])}var Se=(0,o.pM)({name:"userStory",props:{avatarUrl:{type:String,default:ue},userName:{required:!0,type:String,validator:function(e){return e.length>3&&e.length<50}}}});const Ee=(0,d.A)(Se,[["render",ye],["__scopeId","data-v-552e24f3"]]);var we=Ee;const be={class:"post"},Ae={class:"post__header"},Te={class:"post__content"},Oe={key:0,class:"toggler"},Ce={key:1,class:"post__issues"},Ie={key:0,class:"post__preloader"},De=["innerHTML"],Fe={key:2},Xe={class:"post__date"};function Re(e,t,a,s,r,i){const n=(0,o.g2)("userDetails"),l=(0,o.g2)("toggler"),d=(0,o.g2)("preloader");return(0,o.uX)(),(0,o.CE)("div",be,[(0,o.Lk)("div",Ae,[(0,o.bF)(n,{userName:e.postData.ownerLogin,avatarUrl:e.postData.ownerAvatar},null,8,["userName","avatarUrl"])]),(0,o.Lk)("div",Te,[(0,o.RG)(e.$slots,"content",{},void 0,!0)]),e.postData.issuesIsTrue?((0,o.uX)(),(0,o.CE)("div",Oe,[(0,o.bF)(l,{onOnToggle:e.toggle},null,8,["onOnToggle"])])):(0,o.Q3)("",!0),e.shown?((0,o.uX)(),(0,o.CE)("div",Ce,[e.issuesLoading?((0,o.uX)(),(0,o.CE)("div",Ie,[(0,o.bF)(d)])):e.issuesError?((0,o.uX)(),(0,o.CE)("div",{key:1,class:"post__err-message",innerHTML:e.issuesError},null,8,De)):e.postData.issuesContent?((0,o.uX)(),(0,o.CE)("ul",Fe,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.postData.issuesContent,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id},[(0,o.Lk)("b",null,(0,b.v_)(e.user.login),1),(0,o.eW)(" "+(0,b.v_)(e.title),1)])))),128))])):(0,o.Q3)("",!0)])):(0,o.Q3)("",!0),(0,o.Lk)("p",Xe,(0,b.v_)(e.getFormattedDate(e.postData.createdAt)),1)])}const Me={class:"user-details"},Pe={class:"user-details__avatar"},Ue=["src","alt"],Ne={class:"user-details__name"},We={key:0,class:"user-details__role"};function xe(e,t,a,s,r,i){return(0,o.uX)(),(0,o.CE)("div",Me,[(0,o.Lk)("div",Pe,[(0,o.Lk)("img",{src:e.avatarUrl,alt:e.userName},null,8,Ue)]),(0,o.Lk)("div",null,[(0,o.Lk)("p",Ne,(0,b.v_)(e.userName),1),e.userRole?((0,o.uX)(),(0,o.CE)("p",We,(0,b.v_)(e.userRole),1)):(0,o.Q3)("",!0)])])}var Qe=(0,o.pM)({name:"userDetails",props:{avatarUrl:{type:String},userName:{type:String},userRole:{type:String,default:""}}});const Ge=(0,d.A)(Qe,[["render",xe],["__scopeId","data-v-24c6e722"]]);var je=Ge;const ze=e=>((0,o.Qi)("data-v-0bac3753"),e=e(),(0,o.jt)(),e),Be=V+"#arrow",Ke=ze((()=>(0,o.Lk)("span",{class:"toggler__arrow"},[(0,o.Lk)("svg",{class:"toggler__icon",viewBox:"0 0 24 24",width:"24",height:"24"},[(0,o.Lk)("use",{href:Be,x:"0",y:"0"})])],-1)));function He(e,t,a,s,r,i){return(0,o.uX)(),(0,o.CE)("button",{class:(0,b.C4)(["toggler",{__active:e.isOpened}]),onClick:t[0]||(t[0]=t=>e.toggle())},[(0,o.Lk)("span",null,(0,b.v_)(this.isOpened?"Hide issues":"View issues"),1),Ke],2)}var Je=(0,o.pM)({name:"toggler",data(){return{isOpened:!1}},methods:{toggle(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}});const $e=(0,d.A)(Je,[["render",He],["__scopeId","data-v-0bac3753"]]);var Ye=$e;const qe=e=>((0,o.Qi)("data-v-35f40f7a"),e=e(),(0,o.jt)(),e),Ze={class:"preloader"},Ve=qe((()=>(0,o.Lk)("div",{class:"preloader__item"},null,-1))),et=[Ve];function tt(e,t,a,s,r,i){return(0,o.uX)(),(0,o.CE)("div",Ze,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.count,(e=>((0,o.uX)(),(0,o.CE)("ul",{key:e},[((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)(3,(e=>(0,o.Lk)("li",{key:e},et))),64))])))),128))])}var at=(0,o.pM)({name:"preloader",props:{count:{type:Number,default:1}}});const st=(0,d.A)(at,[["render",tt],["__scopeId","data-v-35f40f7a"]]);var ot=st,rt=(0,o.pM)({config:{},name:"post",components:{userDetails:je,toggler:Ye,preloader:ot},props:{postData:{required:!0,type:Object}},data(){return{shown:!1,issuesError:"",issuesLoading:!1}},computed:{...(0,n.aH)({likedPosts:e=>e.likedPosts}),...(0,n.L8)({getRepoById:"getRepoById"})},methods:{...(0,n.i0)({fetchIssues:"likedPosts/fetchIssues"}),async getIssues(){this.issuesLoading=!0;try{const{id:e,ownerLogin:t,name:a}=this.postData;await this.fetchIssues({id:e,owner:t,name:a})}catch(e){this.issuesError="Не удалось получить вопросы к этому посту"}finally{this.issuesLoading=!1}},getFormattedDate(e){const t=new Date(e),a={day:"numeric",month:"short"},s=t.toLocaleString("en-US",a);return s.toLocaleUpperCase()},toggle(e){this.shown=e,this.getIssues()}}});const it=(0,d.A)(rt,[["render",Re],["__scopeId","data-v-cd356150"]]);var nt=it;const lt=e=>((0,o.Qi)("data-v-c2743d48"),e=e(),(0,o.jt)(),e),dt=V+"#star",ct=V+"#fork",ut={class:"post-details"},pt=lt((()=>(0,o.Lk)("li",{class:"post-details__item"},[(0,o.Lk)("svg",{class:"post-details__icon",viewBox:"0 0 24 24",width:"24",height:"24"},[(0,o.Lk)("use",{href:dt,x:"0",y:"0"})]),(0,o.eW)(" Star ")],-1))),gt={class:"post-details__item"},ht=lt((()=>(0,o.Lk)("li",{class:"post-details__item"},[(0,o.Lk)("svg",{class:"post-details__icon",viewBox:"0 0 24 24",width:"24",height:"24"},[(0,o.Lk)("use",{href:ct,x:"0",y:"0"})]),(0,o.eW)(" Fork ")],-1))),vt={class:"post-details__item"};function mt(e,t,a,s,r,i){return(0,o.uX)(),(0,o.CE)("div",ut,[(0,o.Lk)("ul",null,[pt,(0,o.Lk)("li",gt,(0,b.v_)(e.stars),1),ht,(0,o.Lk)("li",vt,(0,b.v_)(e.fork),1)])])}var _t=(0,o.pM)({name:"ostDetails",props:{stars:{required:!0,type:Number},fork:{required:!0,type:Number}}});const ft=(0,d.A)(_t,[["render",mt],["__scopeId","data-v-c2743d48"]]);var kt=ft;const Lt={class:"loader"};function yt(e,t,a,s,r,i){return(0,o.uX)(),(0,o.CE)("div",Lt,[(0,o.Lk)("div",{class:"loader__spinner",style:(0,b.Tr)({width:e.size+"px",height:e.size+"px",border:"2px solid "+e.color,"border-bottom-color":"transparent"})},null,4)])}var St=(0,o.pM)({name:"loader",props:{color:{type:String,default:"#31AE54"},size:{type:String,default:"28"}}});const Et=(0,d.A)(St,[["render",yt],["__scopeId","data-v-3e0fdec8"]]);var wt=Et,bt=(0,o.pM)({name:"feeds",components:{topline:z,logo:Z,mainMenu:he,userStory:we,post:nt,postDetails:kt,loader:wt},data(){return{postsData:null}},computed:{...(0,n.aH)({posts:e=>e.posts,likedPosts:e=>e.likedPosts,user:e=>e.user}),...(0,n.L8)(["getUnstarredOnly"])},methods:{...(0,n.i0)({fetchPosts:"posts/fetchPosts",fetchLikedPosts:"likedPosts/fetchLikedPosts"}),handlePress(e){this.$router.push({name:"stories",params:{initialSlide:e}})},getPostData(e){return{id:e.id,name:e.name,ownerLogin:e.owner.login,ownerAvatar:e.owner.avatar_url,issuesIsTrue:e.open_issues_count>0,issuesContent:e.issues,createdAt:e.created_at}}},created(){this.fetchLikedPosts(),this.fetchPosts()}});const At=(0,d.A)(bt,[["render",P],["__scopeId","data-v-3a40beec"]]);var Tt=At;const Ot=e=>((0,o.Qi)("data-v-5746d2c6"),e=e(),(0,o.jt)(),e),Ct=V+"#close",It=V+"#prev",Dt=V+"#next",Ft={class:"stories"},Xt={class:"stories__header"},Rt=Ot((()=>(0,o.Lk)("svg",{class:"menu__icon",viewBox:"0 0 24 24",width:"24",height:"24"},[(0,o.Lk)("use",{href:Ct,x:"0",y:"0"})],-1))),Mt=[Rt],Pt={key:0,class:"stories__loader"},Ut={key:1,class:"slider"},Nt=Ot((()=>(0,o.Lk)("svg",{class:"menu__icon",viewBox:"0 0 24 24",width:"24",height:"24"},[(0,o.Lk)("use",{href:It,x:"0",y:"0"})],-1))),Wt=[Nt],xt={class:"slider__row"},Qt={class:"slider__items",ref:"sliderRow"},Gt=["onClick"],jt=Ot((()=>(0,o.Lk)("svg",{class:"menu__icon",viewBox:"0 0 24 24",width:"24",height:"24"},[(0,o.Lk)("use",{href:Dt,x:"0",y:"0"})],-1))),zt=[jt];function Bt(e,t,a,s,r,i){const n=(0,o.g2)("logoLight"),l=(0,o.g2)("loader"),d=(0,o.g2)("sliderItem");return(0,o.uX)(),(0,o.CE)("div",Ft,[(0,o.Lk)("header",Xt,[(0,o.bF)(n),(0,o.Lk)("button",{class:"stories__close-btn",onClick:t[0]||(t[0]=t=>e.close())},Mt)]),e.posts.loading?((0,o.uX)(),(0,o.CE)("div",Pt,[(0,o.bF)(l)])):((0,o.uX)(),(0,o.CE)("div",Ut,[e.activeSlide>0?((0,o.uX)(),(0,o.CE)("button",{key:0,class:"slider__buttons prev",onClick:t[1]||(t[1]=t=>e.prevBtnClick())},Wt)):(0,o.Q3)("",!0),(0,o.Lk)("div",xt,[(0,o.Lk)("ul",Qt,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.getUnstarredOnly,((t,a)=>((0,o.uX)(),(0,o.CE)("li",{key:t.id,onClick:t=>e.switchSlider(a)},[(0,o.Lk)("div",{class:(0,b.C4)(["slider__slide-wrapper",{__active:e.activeSlide===a}])},[(0,o.bF)(d,{active:e.activeSlide===a,loading:e.activeSlide===a&&e.activeSlideLoading,sliderData:e.getDataForActiveSlide(t),onAnimationFinished:e.switchToNextSlider,onSetStar:e.setStar,onRemoveStar:e.removeStar},null,8,["active","loading","sliderData","onAnimationFinished","onSetStar","onRemoveStar"])],2)],8,Gt)))),128))],512)]),e.activeSlide<e.getUnstarredOnly.length-1?((0,o.uX)(),(0,o.CE)("button",{key:1,class:"slider__buttons next",onClick:t[2]||(t[2]=t=>e.nextBtnClick())},zt)):(0,o.Q3)("",!0)]))])}var Kt=a.p+"img/LogoLight.639e0f7c.svg";const Ht=e=>((0,o.Qi)("data-v-6f259302"),e=e(),(0,o.jt)(),e),Jt={class:"logo-wrapper"},$t=Ht((()=>(0,o.Lk)("img",{src:Kt,alt:"logo"},null,-1)));function Yt(e,t,a,s,r,i){const n=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",Jt,[(0,o.bF)(n,{to:"/"},{default:(0,o.k6)((()=>[$t])),_:1})])}var qt=(0,o.pM)({name:"logoLight"});const Zt=(0,d.A)(qt,[["render",Yt],["__scopeId","data-v-6f259302"]]);var Vt=Zt;const ea={class:"slider-item"},ta={class:"slider-item__header"},aa={class:"slider-item__progress-bar"},sa={class:"slider-item__user-details"},oa={class:"slider-item__body"},ra={key:0,class:"slider-item__prelouder-wrapper"},ia={key:0,class:"slider-item__loader"},na={key:1,class:"slider-item__content"},la=["innerHTML"],da={class:"slider-item__err-message"},ca={class:"slider-item__footer"};function ua(e,t,a,s,r,i){const n=(0,o.g2)("progressbar"),l=(0,o.g2)("userDetails"),d=(0,o.g2)("preloader"),c=(0,o.g2)("loader"),u=(0,o.g2)("xButton");return(0,o.uX)(),(0,o.CE)("div",ea,[(0,o.Lk)("header",ta,[(0,o.Lk)("div",aa,[(0,o.bF)(n,{active:e.active&&!e.loading,onAnimationFinished:e.handleAnimationFinished},null,8,["active","onAnimationFinished"])]),(0,o.Lk)("div",sa,[(0,o.bF)(l,{userName:e.sliderData.ownerLogin,avatarUrl:e.sliderData.ownerAvatar},null,8,["userName","avatarUrl"])])]),(0,o.Lk)("div",oa,[!1!==e.active||e.sliderData.content?((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[e.loading?((0,o.uX)(),(0,o.CE)("div",ia,[(0,o.bF)(c)])):e.error?((0,o.uX)(),(0,o.CE)("div",na)):e.sliderData.content?((0,o.uX)(),(0,o.CE)("div",{key:2,class:"slider-item__content",innerHTML:e.sliderData.content},null,8,la)):(0,o.Q3)("",!0)],64)):((0,o.uX)(),(0,o.CE)("div",ra,[(0,o.bF)(d,{count:3})]))]),(0,o.Lk)("p",da,(0,b.v_)(e.errMessage),1),(0,o.Lk)("footer",ca,[(0,o.bF)(u,{loading:!0===e.sliderData.following.loading,type:e.sliderData.following.status?"gray":"green",onClick:t[0]||(t[0]=t=>e.$emit(e.sliderData.following.status?"removeStar":"setStar",e.sliderData.id))},{default:(0,o.k6)((()=>[(0,o.eW)((0,b.v_)(e.sliderData.following.status?"unfollow":"follow"),1)])),_:1},8,["loading","type"])])])}const pa=e=>((0,o.Qi)("data-v-60d3cb78"),e=e(),(0,o.jt)(),e),ga=pa((()=>(0,o.Lk)("div",{class:"progressbar__indicator"},null,-1))),ha=[ga];function va(e,t,a,s,r,i){return(0,o.uX)(),(0,o.CE)("div",{class:(0,b.C4)(["progressbar",{__active:e.active}]),onAnimationend:t[0]||(t[0]=(...t)=>e.handleAnimationEnd&&e.handleAnimationEnd(...t))},ha,34)}var ma=(0,o.pM)({name:"progressbar",props:{active:Boolean},methods:{handleAnimationEnd(){this.$emit("animationFinished")}}});const _a=(0,d.A)(ma,[["render",va],["__scopeId","data-v-60d3cb78"]]);var fa=_a;const ka={class:"x-button__btn-text"};function La(e,t,a,s,r,i){const n=(0,o.g2)("loader");return(0,o.uX)(),(0,o.CE)("button",{class:(0,b.C4)(["x-button",[e.type,{__loading:e.loading}]]),onClick:t[0]||(t[0]=e=>this.$emit("handleClick"))},[(0,o.Lk)("span",ka,[e.loading?((0,o.uX)(),(0,o.Wv)(n,{key:0,color:"#fff",size:"24"})):(0,o.RG)(e.$slots,"default",{key:1},void 0,!0)])],2)}var ya=(0,o.pM)({name:"xButton",components:{loader:wt},emits:["handleClick"],props:{type:{type:String,default:"green"},loading:{type:Boolean,default:!1}}});const Sa=(0,d.A)(ya,[["render",La],["__scopeId","data-v-ad5035c8"]]);var Ea=Sa,wa=(0,o.pM)({name:"sliderItem",components:{progressbar:fa,xButton:Ea,userDetails:je,preloader:ot,loader:wt},emits:["removeStar","setStar","animationFinished"],props:{active:Boolean,loading:Boolean,error:String,sliderData:Object},data(){return{isLiked:!1,errMessage:"",isLoading:!1}},methods:{handleAnimationFinished(){this.$emit("animationFinished")}}});const ba=(0,d.A)(wa,[["render",ua],["__scopeId","data-v-97f5e0a0"]]);var Aa=ba,Ta=(0,o.pM)({name:"stories",components:{logoLight:Vt,sliderItem:Aa,loader:wt},data(){return{activeSlide:0,activeSlideLoading:!1,sliderItemError:""}},computed:{...(0,n.aH)({posts:e=>e.posts}),...(0,n.L8)(["getUnstarredOnly"])},methods:{...(0,n.i0)({fetchPosts:"posts/fetchPosts",fetchReadme:"posts/fetchReadme",removeStar:"posts/removeStar",setStar:"posts/setStar"}),getDataForActiveSlide(e){return{id:e.id,ownerLogin:e.owner.login,ownerAvatar:e.owner.avatar_url,content:e.readme,following:e.following,error:this.sliderItemError}},switchToNextSlider(){this.activeSlide===this.getUnstarredOnly.length-1&&(this.activeSlide=-1),this.activeSlide++,this.moveSlider()},prevBtnClick(){this.activeSlide--,this.moveSlider()},nextBtnClick(){this.activeSlide++,this.moveSlider()},switchSlider(e){e!==this.activeSlide&&(this.activeSlide=e,this.moveSlider())},moveSlider(){this.$refs.sliderRow.style=`transform: translate(-${338*this.activeSlide}px);`,this.getActiveSlideData()},async getActiveSlideData(){this.activeSlideLoading=!0;try{const{id:e,owner:t,name:a}=this.getUnstarredOnly[this.activeSlide];await this.fetchReadme({id:e,owner:t.login,name:a})}catch{this.sliderItemError="readme файл не обнаружен"}finally{this.activeSlideLoading=!1}},close(){this.$router.go(-1)}},created(){this.activeSlide=Number(this.$route.params.initialSlide),this.fetchPosts().then((()=>{this.posts.error||this.moveSlider()}))}});const Oa=(0,d.A)(Ta,[["render",Bt],["__scopeId","data-v-5746d2c6"]]);var Ca=Oa;const Ia=e=>((0,o.Qi)("data-v-2f461b6b"),e=e(),(0,o.jt)(),e),Da={class:"header-user-detail-wrapper"},Fa={class:"main"},Xa={class:"my-profile"},Ra={class:"my-profile__container"},Ma={class:"my-profile__wrapper"},Pa={key:0,class:"my-profile__column user-detail-wrapper"},Ua=Ia((()=>(0,o.Lk)("h1",null,"My profile",-1))),Na={class:"my-profile__column content-wrapper"},Wa={key:0,class:"my-profile__column-head"},xa={key:0},Qa={key:1},Ga={key:2},ja={key:3};function za(e,t,a,s,r,i){const n=(0,o.g2)("logo"),l=(0,o.g2)("mainMenu"),d=(0,o.g2)("authUserDetails"),c=(0,o.g2)("topline"),u=(0,o.g2)("myRepos"),p=(0,o.g2)("myFollowing");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(c,null,(0,o.eX)({headline:(0,o.k6)((()=>[(0,o.bF)(n),(0,o.bF)(l,{avatarUrl:e.user.data.avatar_url},null,8,["avatarUrl"])])),_:2},[e.screenWidth<=992?{name:"myProfile",fn:(0,o.k6)((()=>[(0,o.Lk)("p",Da,[(0,o.bF)(d,{data:e.user.data},null,8,["data"])])])),key:"0"}:void 0]),1024),(0,o.Lk)("main",Fa,[(0,o.Lk)("div",Xa,[(0,o.Lk)("div",Ra,[(0,o.Lk)("div",Ma,[e.screenWidth>=992?((0,o.uX)(),(0,o.CE)("div",Pa,[Ua,(0,o.bF)(d,{data:e.user.data},null,8,["data"])])):(0,o.Q3)("",!0),(0,o.Lk)("div",Na,[e.screenWidth>992?((0,o.uX)(),(0,o.CE)("div",Wa,["repos"===e.page?((0,o.uX)(),(0,o.CE)("h2",xa,"Repositories")):(0,o.Q3)("",!0),"following"===e.page?((0,o.uX)(),(0,o.CE)("h2",Qa,"Following")):(0,o.Q3)("",!0),"repos"===e.page?((0,o.uX)(),(0,o.CE)("span",Ga,(0,b.v_)(e.user.data.public_repos),1)):(0,o.Q3)("",!0),"following"===e.page?((0,o.uX)(),(0,o.CE)("span",ja,(0,b.v_)(e.user.data.following),1)):(0,o.Q3)("",!0)])):(0,o.Q3)("",!0),"repos"===e.page?((0,o.uX)(),(0,o.Wv)(u,{key:1})):(0,o.Q3)("",!0),"following"===e.page?((0,o.uX)(),(0,o.Wv)(p,{key:2})):(0,o.Q3)("",!0)])])])])])],64)}const Ba=e=>((0,o.Qi)("data-v-10c316f1"),e=e(),(0,o.jt)(),e),Ka={class:"user-details"},Ha={class:"user-details__avatar"},Ja=["src","alt"],$a={class:"user-details__name"},Ya=Ba((()=>(0,o.Lk)("div",{class:"user-details__stat-data"},[(0,o.Lk)("p",null,[(0,o.Lk)("b",null,"54"),(0,o.eW)(" repost")]),(0,o.Lk)("p",null,[(0,o.Lk)("b",null,"834"),(0,o.eW)(),(0,o.Lk)("a",{href:""},"watchers")])],-1)));function qa(e,t,a,s,r,i){return(0,o.uX)(),(0,o.CE)("div",Ka,[(0,o.Lk)("div",Ha,[(0,o.Lk)("img",{src:e.data.avatar_url,alt:e.data.login},null,8,Ja)]),(0,o.Lk)("div",null,[(0,o.Lk)("p",$a,(0,b.v_)(e.data.login),1),Ya,(0,o.Lk)("p",null,(0,b.v_)(e.data.name),1)])])}var Za=(0,o.pM)({name:"userDetails",props:{data:{type:Object,required:!0}},data(){return{reposts:["repos_url"],views:[]}},methods:{async getData(){}}});const Va=(0,d.A)(Za,[["render",qa],["__scopeId","data-v-10c316f1"]]);var es=Va;const ts=e=>((0,o.Qi)("data-v-af3e59f8"),e=e(),(0,o.jt)(),e),as={class:"my-following"},ss={key:0,class:"my-following__loading"},os=["innerHTML"],rs={key:2,class:"my-following__data"},is={key:0,class:"my-following__no-data"},ns=ts((()=>(0,o.Lk)("p",null,"У вас нет активных подписок",-1))),ls=[ns],ds={class:"my-following__item"};function cs(e,t,a,s,r,i){const n=(0,o.g2)("loader"),l=(0,o.g2)("userDetails"),d=(0,o.g2)("xButton");return(0,o.uX)(),(0,o.CE)("div",as,[e.following.loading?((0,o.uX)(),(0,o.CE)("div",ss,[(0,o.bF)(n)])):e.following.error?((0,o.uX)(),(0,o.CE)("div",{key:1,class:"my-following__error",innerHTML:e.following.error},null,8,os)):e.following.data?((0,o.uX)(),(0,o.CE)("div",rs,[0===e.following.data.length?((0,o.uX)(),(0,o.CE)("div",is,ls)):(0,o.Q3)("",!0),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.following.data,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id},[(0,o.Lk)("div",ds,[(0,o.bF)(l,{avatarUrl:e.avatar_url,userName:e.login,userRole:e.type},null,8,["avatarUrl","userName","userRole"]),(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.eW)("follow")])),_:1})])])))),128))])):(0,o.Q3)("",!0)])}var us=(0,o.pM)({components:{loader:wt,userDetails:je,xButton:Ea},setup(){const e=(0,n.Pj)(),t=(0,o.EW)((()=>e.state.user)),a=(0,o.EW)((()=>e.state.following)),s=()=>{e.dispatch("following/fetchFollowing")};return s(),{user:t,following:a}}});const ps=(0,d.A)(us,[["render",cs],["__scopeId","data-v-af3e59f8"]]);var gs=ps;const hs=e=>((0,o.Qi)("data-v-73e82077"),e=e(),(0,o.jt)(),e),vs={class:"my-repos"},ms={key:0,class:"my-repos__loading"},_s=["innerHTML"],fs={key:2,class:"my-repos__data"},ks={key:0,class:"my-repos__no-data"},Ls=hs((()=>(0,o.Lk)("p",null,"У вас нет активных репозиториев",-1))),ys=[Ls],Ss={class:"my-repos__repo-item"},Es=["innerHTML"];function ws(e,t,a,s,r,i){const n=(0,o.g2)("loader"),l=(0,o.g2)("postDetails");return(0,o.uX)(),(0,o.CE)("div",vs,[e.repos.loading?((0,o.uX)(),(0,o.CE)("div",ms,[(0,o.bF)(n)])):e.repos.error?((0,o.uX)(),(0,o.CE)("div",{key:1,class:"my-repos__error",innerHTML:e.repos.error},null,8,_s)):e.repos.data?((0,o.uX)(),(0,o.CE)("div",fs,[0===e.repos.data.length?((0,o.uX)(),(0,o.CE)("div",ks,ys)):(0,o.Q3)("",!0),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.repos.data,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id},[(0,o.Lk)("div",Ss,[(0,o.Lk)("h3",null,(0,b.v_)(e.name),1),(0,o.Lk)("p",{innerHTML:e.description},null,8,Es),(0,o.bF)(l,{stars:e.stargazers_count,fork:e.forks_count},null,8,["stars","fork"])])])))),128))])):(0,o.Q3)("",!0)])}var bs=(0,o.pM)({components:{loader:wt,postDetails:kt},setup(){const e=(0,n.Pj)(),t=(0,o.EW)((()=>e.state.user)),a=(0,o.EW)((()=>e.state.repos)),s=()=>{e.dispatch("repos/fetchRepos",t.value.data.login)};return(0,o.sV)((()=>{s()})),{user:t,repos:a}}});const As=(0,d.A)(bs,[["render",ws],["__scopeId","data-v-73e82077"]]);var Ts=As,Os=(0,o.pM)({name:"myProfile",components:{topline:z,mainMenu:he,logo:Z,authUserDetails:es,myFollowing:gs,myRepos:Ts},watch:{"$route.params.page"(e){this.page=e}},data(){return{page:"Repositories",screenWidth:window.innerWidth}},computed:{...(0,n.aH)({user:e=>e.user})},methods:{updateScreenWidth(){this.screenWidth=window.innerWidth}},created(){this.page=this.$route.params.page?this.$route.params.page:"repos",window.addEventListener("resize",this.updateScreenWidth)},destroyed(){window.removeEventListener("resize",this.updateScreenWidth)}});const Cs=(0,d.A)(Os,[["render",za],["__scopeId","data-v-2f461b6b"]]);var Is=Cs,Ds=a.p+"img/device.a10ff7a9.png",Fs=a.p+"img/device-tablet.9e45dde8.png",Xs=a.p+"img/device-mobile.01003f98.png";const Rs=e=>((0,o.Qi)("data-v-5ffa19be"),e=e(),(0,o.jt)(),e),Ms=V+"#git",Ps={class:"main"},Us={class:"auth-page"},Ns={class:"auth-page__body"},Ws={class:"auth-page__text-content"},xs=Rs((()=>(0,o.Lk)("p",null,[(0,o.eW)("More than just one repository."),(0,o.Lk)("br"),(0,o.eW)("This is our digital world.")],-1))),Qs=Rs((()=>(0,o.Lk)("svg",{viewBox:"0 0 24 24",width:"24",height:"24"},[(0,o.Lk)("use",{href:Ms,x:"0",y:"0"})],-1))),Gs={key:0,class:"auth-page__err-message"},js={class:"auth-page__img"},zs={key:0,src:Ds,alt:"Gitogram"},Bs={key:1,src:Fs,alt:"Gitogram"},Ks={key:2,src:Xs,alt:"Gitogram"},Hs=Rs((()=>(0,o.Lk)("footer",{class:"auth-page__footer"},[(0,o.Lk)("p",null,"© Gitogram from Loftschool")],-1)));function Js(e,t,a,s,r,i){const n=(0,o.g2)("logo"),l=(0,o.g2)("xButton");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("main",Ps,[(0,o.Lk)("div",Us,[(0,o.Lk)("div",Ns,[(0,o.Lk)("div",Ws,[(0,o.bF)(n),xs,(0,o.bF)(l,{onClick:i.getCode},{default:(0,o.k6)((()=>[(0,o.eW)(" Authorize with github "),Qs])),_:1},8,["onClick"]),r.errMessage?((0,o.uX)(),(0,o.CE)("p",Gs,(0,b.v_)(r.errMessage),1)):(0,o.Q3)("",!0)]),(0,o.Lk)("div",js,[r.screenWidth>=768?((0,o.uX)(),(0,o.CE)("img",zs)):(0,o.Q3)("",!0),r.screenWidth<768&&r.screenWidth>576?((0,o.uX)(),(0,o.CE)("img",Bs)):(0,o.Q3)("",!0),r.screenWidth<=576?((0,o.uX)(),(0,o.CE)("img",Ks)):(0,o.Q3)("",!0)])])])]),Hs],64)}var $s={clientId:"69e245a82e427bdfefd7",clientSecret:"d6c3de2d69081043aa91270b3ea87d7194b4233b"},Ys={name:"auth",components:{logo:Z,xButton:Ea},data(){return{screenWidth:window.innerWidth,errMessage:""}},methods:{updateScreenWidth(){this.screenWidth=window.innerWidth},getCode(){const e=new URL("https://github.com/login/oauth/authorize");e.searchParams.set("client_id",$s.clientId),e.searchParams.set("scope","repo:status read:user"),window.location.href=e.href},async getToken(){const e=new URLSearchParams(window.location.search).get("code");if(e)try{const t="https://webdev-api.loftschool.com/github",a=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({clientId:$s.clientId,code:e,clientSecret:$s.clientSecret})}),{token:s}=await a.json();localStorage.setItem("token",s),this.$router.replace({name:"home"})}catch{return void(this.errMessage="Ошибка при попытке авторизации")}}},created(){this.getToken(),window.addEventListener("resize",this.updateScreenWidth)},destroyed(){window.removeEventListener("resize",this.updateScreenWidth)}};const qs=(0,d.A)(Ys,[["render",Js],["__scopeId","data-v-5ffa19be"]]);var Zs=qs;const Vs=e=>((0,o.Qi)("data-v-2fb74e96"),e=e(),(0,o.jt)(),e),eo={class:"not-found"},to=Vs((()=>(0,o.Lk)("p",null,"Ошибка 404",-1))),ao=Vs((()=>(0,o.Lk)("p",null,"Страница не существует.",-1)));function so(e,t,a,s,r,i){const n=(0,o.g2)("logo"),l=(0,o.g2)("topline"),d=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(l,null,{headline:(0,o.k6)((()=>[(0,o.bF)(n)])),_:1}),(0,o.Lk)("div",eo,[to,ao,(0,o.Lk)("p",null,[(0,o.bF)(d,{to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)("На главную")])),_:1})])])],64)}var oo={components:{topline:z,logo:Z}};const ro=(0,d.A)(oo,[["render",so],["__scopeId","data-v-2fb74e96"]]);var io=ro;const no=[{path:"/",alias:"/home",name:"home",component:Tt},{path:"/stories/:initialSlide?",name:"stories",component:Ca},{path:"/myprofile/:page(repos|following)?",name:"myProfile",component:Is},{path:"/auth",name:"auth",component:Zs},{path:"/:pathMatch(.*)*",component:io}],lo=(0,p.aE)({history:(0,p.LA)("/vue-project/dist/"),routes:no});lo.beforeEach((async(e,t,a)=>{if("auth"!==e.name)try{await w.dispatch("user/fetchUser"),a()}catch(s){console.log(s),a({name:"auth"})}else a()}));var co=lo;const uo={beforeMount(e,t){e.clickOutsideEvent=function(a){e===a.target||e.contains(a.target)||t.value(a)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted(e){document.body.removeEventListener("click",e.clickOutsideEvent)}};var po=uo;const go=(0,s.Ef)(u);go.directive("click-outside",po),go.use(w).use(co).mount("#app")}},t={};function a(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,s,o,r){if(!s){var i=1/0;for(c=0;c<e.length;c++){s=e[c][0],o=e[c][1],r=e[c][2];for(var n=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(n=!1,r<i&&(i=r));if(n){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[s,o,r]}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/vue-project/dist/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,r,i=s[0],n=s[1],l=s[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(l)var c=l(a)}for(t&&t(s);d<i.length;d++)r=i[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},s=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(6067)}));s=a.O(s)})();
//# sourceMappingURL=app.64e7cbf7.js.map