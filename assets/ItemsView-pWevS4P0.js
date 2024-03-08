import{d as w,o as l,c as u,a as e,D,E as V,t as h,q as k,s as I,B as _,f as L,u as q,l as M,F as y,r as $,g as C,C as N,i as b,x as A,y as F,w as S,G as P,H as z,j as O,_ as Q}from"./index-I7OCPB9p.js";import{b as E,_ as G,f as T,s as j}from"./MaterialIcon.vue_vue_type_script_setup_true_lang-c3kzcO8-.js";import{c as H}from"./images-P1zqrOzH.js";import{f as B}from"./arcanists-Z85l907N.js";import{_ as U}from"./ArcanistIconDisplay.vue_vue_type_script_setup_true_lang-tIQkYRef.js";import{n as J}from"./stages-GBA7XXq8.js";const K=["data-tip"],W={class:"transform transition-transform duration-500 overflow-hidden relative"},X=["src"],Y=["src"],Z=e("div",{class:"overlay absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"},null,-1),ee=w({__name:"MaterialSelectionIcon",props:{material:{type:Object,required:!0}},setup(i){const t=i,f=()=>E(t.material);return(g,p)=>(l(),u("div",{class:"tooltip relative overflow-hidden group cursor-pointer","data-tip":g.$t(f().material)},[e("div",W,[e("img",{src:f().itemImagePath,alt:"Material Image",class:"w-20 h-20 absolute transform transition-transform duration-300 group-hover:scale-125"},null,8,X),e("img",{src:f().borderImagePath,alt:"Border Image",class:"w-20 h-20"},null,8,Y),Z])],8,K))}}),te=["data-tip"],se={class:"relative inline-block"},ae=["src"],re={class:"absolute text-white bottom-0.5 right-0.5 rounded bg-gray-700 rounded-tl px-1 py-px text-xs max-w-[7.775rem] lg:max-w-[9.775rem] whitespace-nowrap overflow-hidden overflow-ellipsis"},le={class:"absolute text-white top-0.5 left-0.5 bg-gray-700 rounded px-1 py-px text-xs"},oe=w({__name:"StageIcon",props:{selectedStage:{type:Object,required:!0},stageName:{type:String,required:!0},dropRate:{type:String,required:!0}},setup(i){const t=i,f=D(),g=V(),p=()=>J(t.selectedStage,t.stageName),m=()=>{f.setSelectedStage(t.selectedStage),g.push("/stages")};return(c,x)=>(l(),u("div",{onClick:m,class:"cursor-pointer"},[e("div",{class:"tooltip","data-tip":c.$t(p().stage)},[e("div",se,[e("img",{src:p().stageImagePath,alt:"Border Image",class:"w-32 lg:w-40 rounded"},null,8,ae),e("div",re,h(c.$t(p().stage)),1),e("div",le,h(i.dropRate),1)])],8,te)]))}}),ie={key:0,class:"custom-box custom-border"},ce={class:"space-y-1"},ne={class:"text-white text-2xl font-bold py-1"},de=e("i",{class:"fa-solid fa-star"},null,-1),ue={class:"flex flex-col justify-center items-center"},me=["src"],pe={class:"text-white text-center"},he={key:1,class:"custom-box custom-border"},fe={class:"text-white"},ge={class:"flex flex-wrap gap-x-2 gap-y-1 items-center justify-center pt-4"},ve={key:2,class:"custom-box custom-border"},_e={class:"text-white"},ye={class:"custom-item-list max-h-[calc(33vh)] pt-8"},xe={key:3,class:"custom-box custom-border"},be={class:"text-white"},$e={class:"custom-item-list gap-x-2 gap-y-1 max-h-[calc(33vh)] pt-8"},Me=w({__name:"MaterialDisplay",props:{selectedMaterial:{type:Object,required:!0},categories:{type:Array,required:!0}},setup(i){const t=i,f=k().formulas,g=k().arcanists,p=k().stages1_4,m=I(()=>{const o=f.find(n=>n.Name===t.selectedMaterial.Name);return o?o.Material.map((n,s)=>({Material:n,Quantity:o.Quantity[s]})):[]}),c=I(()=>{if(t.selectedMaterial.Name==="Dust")return B(g);let o=g.filter(n=>n.Insight.some(s=>s.Material.includes(t.selectedMaterial.Name))||n.Resonance.some(s=>s.Material.includes(t.selectedMaterial.Name)));return o=B(o),o}),x=I(()=>Object.entries(p).filter(([,n])=>t.selectedMaterial.Name in n.drops).map(([n,s])=>({name:n,stage:s,dropRate:s.drops[t.selectedMaterial.Name]/s.count})).sort((n,s)=>s.dropRate-n.dropRate).map(n=>({...n,dropRate:T(n.dropRate)})));return(o,n)=>(l(),u(y,null,[t.selectedMaterial?(l(),u("div",ie,[e("div",ce,[e("h2",ne,h(o.$t(t.selectedMaterial.Name)),1),e("p",{class:_(["",{"text-error":t.selectedMaterial.Category===i.categories[0],"text-info":t.selectedMaterial.Category===i.categories[1],"text-success":t.selectedMaterial.Category===i.categories[2],"text-warning":t.selectedMaterial.Category===i.categories[3],"text-secondary":t.selectedMaterial.Category===i.categories[4]}])},h(o.$t(t.selectedMaterial.Category)),3),e("p",{class:_(["",{"text-orange-300":t.selectedMaterial.Rarity===6,"text-yellow-100":t.selectedMaterial.Rarity===5,"text-purple-400":t.selectedMaterial.Rarity===4,"text-sky-200":t.selectedMaterial.Rarity===3,"text-green-200":t.selectedMaterial.Rarity===2}])},[L(h(t.selectedMaterial.Rarity)+" ",1),de],2),e("div",ue,[e("img",{src:q(H)(t.selectedMaterial.Name),alt:"Material Image",class:"w-32 h-32"},null,8,me),e("p",pe,h(t.selectedMaterial.Description),1)])])])):M("",!0),m.value.length>0?(l(),u("div",he,[e("h2",fe,h(o.$t("wishing-spring-formula")),1),e("div",ge,[(l(!0),u(y,null,$(m.value,s=>(l(),u("div",{key:s.Material,class:"flex flex-wrap gap-x-2 gap-y-2"},[C(G,{material:s},null,8,["material"])]))),128))])])):M("",!0),x.value.length>0?(l(),u("div",ve,[e("h2",_e,h(o.$t("obtained-from-the-following-stages")),1),e("div",ye,[(l(!0),u(y,null,$(x.value,s=>(l(),N(oe,{key:s.name,selectedStage:s.stage,stageName:s.name,dropRate:s.dropRate,class:"px-2 py-1"},null,8,["selectedStage","stageName","dropRate"]))),128))])])):M("",!0),c.value.length>0?(l(),u("div",xe,[e("h2",be,h(o.$t("used-by-the-following-arcanists")),1),e("div",$e,[(l(!0),u(y,null,$(c.value,s=>(l(),N(U,{key:s.Name,arcanist:s},null,8,["arcanist"]))),128))])])):M("",!0)],64))}}),we={class:"flex gap-y-2 items-center"},ke=["placeholder"],Ie=["data-tip"],Ce=e("button",{class:"btn btn-ghost text-white"},[e("i",{class:"fa-solid fa-filter"})],-1),Ne=[Ce],Re={class:"flex justify-center space-x-2 pb-2"},Se=["onClick"],je={class:"flex flex-col justify-center flex-wrap gap-x-2 gap-y-1"},Be={class:"grid grid-cols-2 gap-x-2 gap-y-1"},De=["onClick"],qe={class:"flex justify-center"},Ve=w({__name:"MaterialFilter",props:{listItems:{type:Array,required:!0},categories:{type:Array,required:!0}},emits:["filtered"],setup(i,{emit:t}){const f=i,g=t,p=b(""),m=b([]),c=b([]),x=a=>{m.value.includes(a)?m.value=m.value.filter(d=>d!==a):m.value.push(a)},o=a=>{c.value.includes(a)?c.value=c.value.filter(d=>d!==a):c.value.push(a)},n=I(()=>{let a=f.listItems;return p.value.length>0&&(a=a.filter(d=>d.Name.toLowerCase().includes(p.value.toLowerCase()))),m.value.length>0&&(a=a.filter(d=>m.value.includes(d.Rarity))),c.value.length>0&&(a=a.filter(d=>c.value.includes(d.Category))),a}),s=()=>{g("filtered",n.value)};return(a,d)=>(l(),u("div",we,[A(e("input",{"onUpdate:modelValue":d[0]||(d[0]=r=>p.value=r),type:"text",placeholder:a.$t("search-by-name"),onInput:s,class:"input input-sm lg:w-auto bg-gray-800 text-white p-2 rounded-md focus:outline-none"},null,40,ke),[[F,p.value]]),C(q(P),{arrow:"",placement:"bottom",offsetDistance:"2"},{content:S(()=>[e("div",Re,[(l(),u(y,null,$([2,3,4,5,6],r=>e("button",{key:r,class:_([{"border-2 border-info":m.value.includes(r),"border-2 border-transparent":!m.value.includes(r)},"p-2 rounded-md"]),onClick:v=>{x(r),s()}},[e("i",{class:_(["fa-solid fa-star",{"text-orange-300":r===6,"text-yellow-100":r===5,"text-purple-400":r===4,"text-sky-200":r===3,"text-green-200":r===2}])},null,2)],10,Se)),64))]),e("div",je,[e("div",Be,[(l(!0),u(y,null,$(i.categories.slice(0,-1),(r,v)=>(l(),u("button",{key:r,class:_([[{"border-2 border-info":c.value.includes(r),"border-2 border-transparent":!c.value.includes(r)},{"text-error":v===0,"text-info":v===1,"text-success":v===2,"text-warning":v===3,"text-secondary":v===4}],"p-2 rounded-md text-sm"]),onClick:R=>{o(r),s()}},h(r),11,De))),128))]),e("div",qe,[i.categories.length>0?(l(),u("button",{key:i.categories[4],class:_([[{"border-2 border-info":c.value.includes(i.categories[4]),"border-2 border-transparent":!c.value.includes(i.categories[4])}],"w-40 p-2 rounded-md text-sm text-secondary"]),onClick:d[1]||(d[1]=r=>{o(i.categories[4]),s()})},h(i.categories[4]),3)):M("",!0)])])]),default:S(()=>[e("div",{class:"tooltip","data-tip":a.$t("filter")},Ne,8,Ie)]),_:1})]))}}),Le={class:"responsive-spacer"},Ae={class:"flex pb-4"},Fe={class:"text-2xl text-white font-bold"},Pe={class:"wrapper"},ze={class:"container"},Oe={class:"card custom-border"},Qe={class:"flex flex-wrap justify-center sm:justify-between pl-2 gap-y-2"},Ee={class:"flex flex-wrap justify-center space-x-2 gap-y-2 py-1.5"},Ge=["onClick","disabled"],Te={class:"card custom-border h-[calc(40vh)] lg:h-[calc(66vh)]"},He={key:0,class:"custom-item-list"},Ue={class:"container"},Je=w({__name:"ItemsView",setup(i){const t=["Base Item","Build Material","Insight Material","Resonate Material","Ascension Material"],f=["Materials","Psychubes"],g=b(f[0]),p=k().items,m=b([]),c=b([]),x=D(),o=b(),n=a=>{o.value=a},s=a=>{c.value=a};return z(()=>{const a=p.find(d=>d.Name===x.selectedMaterial.Material);o.value=a||p.find(d=>d.Name==="Crystal Drop"),m.value=p.filter(d=>d.IsReleased),j(m.value,t)}),O(()=>{c.value=p.filter(a=>a.IsReleased),j(c.value,t)}),(a,d)=>(l(),u("div",Le,[e("div",Ae,[e("h2",Fe,h(a.$t("items")),1)]),e("div",Pe,[e("div",ze,[e("div",Oe,[e("div",Qe,[e("div",Ee,[(l(),u(y,null,$(f,(r,v)=>e("button",{key:v,onClick:R=>g.value=r,class:_(["hover:bg-info rounded-md text-white py-1 px-3",g.value===r?"border-button":""]),disabled:v!==0},h(a.$t(r)),11,Ge)),64))]),C(Ve,{listItems:m.value,categories:t,onFiltered:s},null,8,["listItems"])])]),e("div",Te,[g.value==="Materials"?(l(),u("div",He,[(l(!0),u(y,null,$(c.value,r=>{var v;return l(),N(ee,{key:r.Id,material:r,onClick:R=>n(r),class:_(((v=o.value)==null?void 0:v.Name)===r.Name?"custom-border-white":"custom-border-transparent")},null,8,["material","onClick","class"])}),128))])):M("",!0)])]),e("div",Ue,[C(Me,{selectedMaterial:o.value||{},categories:t},null,8,["selectedMaterial"])])])]))}}),tt=Q(Je,[["__scopeId","data-v-a74dbec7"]]);export{tt as default};
