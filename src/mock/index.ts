import Mock from 'mockjs'

Mock.setup({
    timeout: '200-600'
})

Mock.mock(
    '/index',
    'get',
    (req:any) => {
        return {
            title: '每天为您推荐一本好书',
            initPages:[
                {pic_url: require('../assets/img/01.png'), name:'三体：死神永生', author: '刘慈心', pic_id: parseInt((Math.random()*100000).toString())},
                {pic_url: require('../assets/img/02.png'), name:'人类简史', author: '尤瓦尔• 郝拉利', pic_id: parseInt((Math.random()*100000).toString())},
                {pic_url: require('../assets/img/03.png'), name:'徐三观卖血记', author: '余华', pic_id: parseInt((Math.random()*100000).toString())}
            ]
        }  
    }
)
Mock.mock(
    /\/bookDetails/,
    'get',
    (req:any) => {
        console.log(req);
        let {url} = req
        url = parseInt(url.slice(16))
        let arr1 = ['科幻','生活','露营','职场']
        let arr2 = [
            {pic_url: require('../assets/img/03-科幻分类_03.png'), pic_id: 1, name: "三体：死神永生", author: "作者：刘慈心", brief: "刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品..."},
            {pic_url: require('../assets/img/03-科幻分类_06.png'), pic_id: 2, name: "未来简史", author: "作者：尤瓦尔• 郝拉利", brief: "讲述了一段有关未来50年令人难以置信的故事。他剖析了各国..."},
            {pic_url: require('../assets/img/03-科幻分类_08.png'), pic_id: 3, name: "银河帝国", author: "作者：艾萨克·阿西莫夫", brief: "在机器人的帮助下，人类迅速掌握了改造外星球的技术，开启了恢..."},
            {pic_url: require('../assets/img/03-科幻分类_10.png'), pic_id: 4, name: "海底两万里", author: "作者：儒勒·凡尔纳", brief: "讲述了博物学家阿龙纳斯、其仆人康塞尔和鱼叉手尼德·兰一起随鹦鹉..."}
        ]
        let bookTitle = arr1[url]
        
         return {
             bookTitle: bookTitle,
             books: arr2
         }
    }
)
Mock.mock(
    '/search',
    'get',
    (req:any) => {
        console.log(req);
        
         return {
             bg: {pic_url: require('../assets/img/04-探索1_03.png'), name: '三体：死神永生', author: '刘慈心'},
             avators: [
                {pic_url: require('../assets/img/04-探索1_07.png'), pic_id: 1},
                {pic_url: require('../assets/img/04-探索1_09.png'), pic_id: 2},
                {pic_url: require('../assets/img/04-探索1_11.png'), pic_id: 3},
                {pic_url: require('../assets/img/04-探索1_13.png'), pic_id: 4}
             ],
             recomm_pic: require('../assets/img/04-探索1_20.png')
         }
    }
)
Mock.mock(
    '/home',
    'get',
    (req:any) => {
        return {
            cateRanks:[
                {pic_url: require('../assets/img/02-首页_13.png'), name:'科幻', pic_id: 1},
                {pic_url: require('../assets/img/02-首页_15.png'), name:'生活', pic_id: 2},
                {pic_url: require('../assets/img/02-首页_17.png'), name:'露营', pic_id: 3},
                {pic_url: require('../assets/img/02-首页_19.png'), name:'职场', pic_id: 4}
            ],
            authorRanks:[
                {pic_url: require('../assets/img/02-首页_25.png'), name:'刘慈欣', pic_id: 1},
                {pic_url: require('../assets/img/02-首页_27.png'), name:'田小花', pic_id: 2},
                {pic_url: require('../assets/img/02-首页_29.png'), name:'马尔克斯', pic_id: 3},
                {pic_url: require('../assets/img/02-首页_30.png'), name:'余秋雨', pic_id: 4}
            ],
            newRanks: [
                {pic_url: require('../assets/img/01.png'), author: "刘慈心", name:'三体：死神永生', pic_id: 1},
                {pic_url: require('../assets/img/02.png'), author: "尤瓦尔• 郝拉利", name:'人类简史', pic_id: 2},
                {pic_url: require('../assets/img/03.png'), author: "余华", name:'徐三观卖血记', pic_id: 3},
                {pic_url: require('../assets/img/02-首页长页面_03.png'), author: "尤瓦尔• 郝拉利", name:'刘慈欣', pic_id: 4},
                {pic_url: require('../assets/img/02-首页长页面_05.png'), author: "理查德·道金斯", name:'田小花', pic_id: 5},
                {pic_url: require('../assets/img/02-首页长页面_07.png'), author: "马尔克斯", name:'马尔克斯', pic_id: 6}
            ],
            hotSearchs: [
                {text:'2020排行榜', id: 1, color: 'c1'},
                {text:'职场热门', id: 2, color: 'c2'},
                {text:'都市言情', id: 3, color: 'c3'},
                {text:'哈弗大学经济管理类', id: 4, color: 'c4'},
                {text:'领导才能', id: 5, color: 'c5'}
            ],
            tabbarIcons: [
                {text:'2020排行榜', id: 1, color: 'c1'},
                {text:'职场热门', id: 2, color: 'c2'},
                {text:'都市言情', id: 3, color: 'c3'},
                {text:'哈弗大学经济管理类', id: 4, color: 'c4'},
                {text:'领导才能', id: 5, color: 'c5'}
            ]
        }
        
    }
)