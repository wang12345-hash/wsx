import { random } from "../wsx_module/random/index.js";
/*首页轮播图*/
export const banner=[
	{id:random(32),url:"/Resource/imgs/index/banner1.jpg"},
	{id:random(32),url:"/Resource/imgs/index/banner2.jpg"},
	{id:random(32),url:"/Resource/imgs/index/banner3.jpg"},
	{id:random(32),url:"/Resource/imgs/index/banner4.jpg"},
	{id:random(32),url:"/Resource/imgs/index/banner5.jpg"}
];

// 网站菜单
export const menuData=[
	{id:random(32),name:"首页",url:"main.html",en:"Home"},
	{id:random(32),name:'关于',url:"UINavigate/about.html",en:'About'}
];

// 网站更新日志
export const webLogs=[
	{id:random(32),title:"创建项目",time:"2024-08-01"},
	{id:random(32),title:"新增公共文件：common.css，common.js",time:"2024-08-10"},
	{id:random(32),title:"加入自定义js库",time:"2024-08-11"},
	{id:random(32),title:"更新首页模块",time:"2024-08-15"},
	{id:random(32),title:"更新网站首页，《更新日志》区块",time:"2024-08-19"}
];

// js库更新日志
export const jsLogs=[
	{id:random(32),title:"更新Query.js，将代码剥离出，作为独自的模块",time:"2024-07-21"},
	{id:random(32),title:"更新随机数模块，可以获取随机颜色值",time:"2024-07-25"},
	{id:random(32),title:"更新confirm模块、alert模块弹窗为浏览器原生弹窗",time:"2024-07-31"},
	{id:random(32),title:"更新获取页面zIndex最大值的模块方法",time:"2024-08-01"},
	{id:random(32),title:"更新数字格式函数，新增小数格式化校验",time:"2024-09-25"}
];

export const aboutMe=[
    {
        title:"家乡风光",
        string:`
            <p style="text-indent: 22pt;line-height:3rem;font-size: 2rem;">家乡的风光，是我心灵深处最美的画卷。每当我想起那片熟悉的土地，心中总会涌现出一股暖流，那是对家乡深深的眷恋和无尽的思念。</p>
            <p style="margin: 10px 0;text-align: center;">
                <img src="${getHoust()}/Resource/imgs/about/1-1.jpg" style="width:50%;" />
            </p>
            <p style="text-indent: 22pt;line-height:3rem;font-size: 2rem;">我的家乡坐落在江南水乡，是一个美丽而宁静的小村庄。清晨，当第一缕阳光洒落在村庄里，金黄色的光芒与袅袅的炊烟交织在一起，形成一幅宁静而温馨的画面。村庄四周环绕着青葱的稻田和碧绿的菜地，微风吹过，稻田中的稻穗轻轻摇曳，仿佛在向人们展示它们的丰收。</p>
            <p style="margin: 10px 0;text-align: center;">
                <img src="${getHoust()}/Resource/imgs/about/1-2.jpg" style="width:50%;" />
            </p>
            <p style="text-indent: 22pt;line-height:3rem;font-size: 2rem;">每当夏天来临，家乡的小河便成了我们孩子们的天堂。河水清澈见底，河底的小鱼小虾在水中欢快地游弋。我们会在河边嬉戏，捡起河边的鹅卵石，扔进水中，看着水面荡起一圈圈涟漪。傍晚时分，夕阳的余晖洒在河面上，整个小河都被染成了金黄色，美得让人心醉。</p>
            <p style="margin: 10px 0;text-align: center;">
                <img src="${getHoust()}/Resource/imgs/about/1-3.jpg" style="width:48%;" />
                <img src="${getHoust()}/Resource/imgs/about/1-4.jpg" style="width:48%;margin-left: 2%;" />
            </p>
            <p style="text-indent: 22pt;line-height:3rem;font-size: 2rem;">家乡的人们热情好客，每当有客人来访，他们总会拿出自家种的蔬菜、养的鸡鸭，热情地招待客人。在这里，你可以感受到浓浓的乡土气息和淳朴的民风。</p>
            <p style="margin: 10px 0;text-align: center;">
                <img src="${getHoust()}/Resource/imgs/about/1-5.jpg" style="width:48%;" />
                <img src="${getHoust()}/Resource/imgs/about/1-6.jpg" style="width:48%;margin-left: 2%;" />
            </p>
            <p style="margin: 10px 0;text-align: center;">
                <img src="${getHoust()}/Resource/imgs/about/1-7.jpg" style="width:50%;" />
            </p>
            <p style="text-indent: 22pt;line-height:3rem;font-size: 2rem;">如今，我已经离开家乡多年，但家乡的风光依然历历在目。每当我回到家乡，看到那片熟悉的土地和那片宁静的村庄，心中的那份眷恋和思念便会更加强烈。家乡的风光，将永远留在我的心中，成为我生命中最美的风景。</p>
        `
    },{
        title:"关于博主",
        string:`
            <p style="text-indent: 22pt;line-height:3rem;font-size: 2rem;">在这个世界上，没有两片完全相同的叶子，也没有两个完全相同的人。我，一个独一无二的存在，有着自己独特的性格、兴趣和梦想。</p>
            <p style="margin: 10px 0;text-align: center;">
                <img src="${getHoust()}/Resource/imgs/about/2-1.jpg" style="width:50%;" />
            </p>
            <p style="text-indent: 22pt;line-height:3rem;font-size: 2rem;">我热爱生活，对周围的一切充满好奇。我喜欢探索未知的世界，无论是自然界的奥秘还是人文的深厚。这种好奇心驱使我不断学习，不断成长。</p>
            <p style="text-indent: 22pt;line-height:3rem;font-size: 2rem;">我有一颗善良的心，总是愿意帮助他人。我相信，每一个微笑、每一句鼓励的话都可以为他人带来温暖和力量。我乐于在他人需要时伸出援手，因为我相信，这个世界需要更多的爱和关怀。</p>
            <p style="margin: 10px 0;text-align: center;">
                <img src="${getHoust()}/Resource/imgs/about/2-2.jpg" style="width:50%;" />
            </p>
            <p style="text-indent: 22pt;line-height:3rem;font-size: 2rem;">我热爱自己的工作，作为一名前端工程师，我致力于为用户带来更好的体验。我喜欢挑战自己，不断学习新的技术，将复杂的逻辑和美观的界面完美结合。每当我看到一个精心设计的界面得到用户的认可，我都会感到无比的满足和自豪。</p>
            <p style="text-indent: 22pt;line-height:3rem;font-size: 2rem;">我还有很多梦想，希望有一天能够环游世界，感受不同文化的魅力；希望能够在自己的领域里取得更高的成就，为社会做出更大的贡献。我知道，这些梦想需要付出努力和时间，但我愿意为之奋斗。</p>
            <p style="margin: 10px 0;text-align: center;">
                <img src="${getHoust()}/Resource/imgs/about/2-3.jpg" style="width:48%;" />
                <img src="${getHoust()}/Resource/imgs/about/2-4.jpg" style="width:48%;margin-left: 2%;" />
            </p>
            <p style="text-indent: 22pt;line-height:3rem;font-size: 2rem;">我热爱自己的工作，作为一名前端工程师，我致力于为用户带来更好的体验。我喜欢挑战自己，不断学习新的技术，将复杂的逻辑和美观的界面完美结合。每当我看到一个精心设计的界面得到用户的认可，我都会感到无比的满足和自豪。</p>
            <p style="text-indent: 22pt;line-height:3rem;font-size: 2rem;">这就是我，一个热爱生活、乐于助人、热爱工作并充满梦想的人。我相信，只要我保持对生活的热爱和追求，未来的路一定会更加宽广和精彩。</p>
        `
    }
];