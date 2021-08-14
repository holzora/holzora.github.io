function disptime(){  
    var today=new Date();  
    var hh=today.getHours();  
    var mm=today.getMinutes();  
    var ss = today.getSeconds();  
    document.getElementById("myclock").innerHTML="<span>"+hh+":"+mm+":"+ss+"</span>"  
     }
    var mytime = setInterval("disptime()",1000);

console.log("\n %c 霍西佐拉 %c https://holzora.com \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");

/*
function show_runtime(){window.setTimeout("show_runtime()",1000);
    X=new Date("05/14/2021 23:00:00");
    Y=new Date();T=(Y.getTime()-X.getTime());M=24*60*60*1000;
    a=T/M;A=Math.floor(a);b=(a-A)*24;B=Math.floor(b);c=(b-B)*60;C=Math.floor((b-B)*60);D=Math.floor((c-C)*60);
    runtime_span.innerHTML="本站已运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"}show_runtime();
*/

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://stats.holzora.com/mhc/fx.php";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: '呼啸沙漠',
            artist: 'Novasonic',
            url: 'mp3/Novasonic - 呼啸沙漠.mp3',
            cover: 'img/cabal.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#ebd0c2'
        },
        {
            name: '黄昏湖畔',
            artist: 'Novasonic',
            url: 'mp3/Novasonic - 黄昏湖畔.mp3',
            cover: 'img/cabal.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#46718b'
        },
        {
            name: '勒克斯港',
            artist: 'Novasonic',
            url: 'mp3/Novasonic - 勒克斯港.mp3',
            cover: 'img/cabal.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#43718b'
        },
        {
            name: '暮色雨林',
            artist: 'Novasonic',
            url: 'mp3/Novasonic - 暮色雨林.mp3',
            cover: 'img/cabal.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#46318b'
        },
        {
            name: '血色冰封',
            artist: 'Novasonic',
            url: 'mp3/Novasonic - 血色冰封.mp3',
            cover: 'img/cabal.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#36718b'
        },
        {
            name: '遗忘废墟',
            artist: 'Novasonic',
            url: 'mp3/Novasonic - 遗忘废墟.mp3',
            cover: 'img/cabal.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#26718b'
        },
        {
            name: 'The Saltwater Room',
            artist: 'Owl City',
            url: 'mp3/The Saltwater Room - Owl City.mp3',
            cover: 'img/trs.png',
            lrc: 'lrc/The Saltwater Room - Owl City.lrc',
            theme: '#26716b'
        },
        {
            name: 'Patema Inverse',
            artist: '大岛满',
            url: 'mp3/大岛满 - Patema Inverse.mp3',
            cover: 'img/pm.jpg',
            lrc: 'lrc/大岛满 - Patema Inverse.lrc',
            theme: '#D52B91'
        },
        {
            name: '星の在り処',
            artist: 'う～み',
            url: 'mp3/う～み - 星の在り処.mp3',
            cover: 'img/xzsz.jpg',
            lrc: 'lrc/う～み - 星の在り処.lrc',
            theme: '#FFD700'
        },
        {
            name: '2年目の春',
            artist: 'S.E.N.S.',
            url: 'mp3/S.E.N.S. (神思者) - 2年目の春 (第2年的春天).mp3',
            cover: 'img/hxgsn.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#8B2500'
        },
        {
            name: 'Pearl White Story',
            artist: 'S.E.N.S.',
            url: 'mp3/S.E.N.S. (神思者) - Pearl White Story.mp3',
            cover: 'img/hxgsn.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#6E6E6E'
        },
        {
            name: '夜空',
            artist: 'S.E.N.S.',
            url: 'mp3/S.E.N.S. (神思者) - 夜空.mp3',
            cover: 'img/hxgsn.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#EED2EE'
        },
        {
            name: '爽風',
            artist: 'S.E.N.S.',
            url: 'mp3/S.E.N.S. (神思者) - 爽風.mp3',
            cover: 'img/hxgsn.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#CDAF95'
        },
        {
            name: 'Speed of Light',
            artist: '塞壬唱片/二宮愛/DJ OKAWARI',
            url: 'mp3/塞壬唱片-MSR _ 二宮愛 _ DJ OKAWARI - Speed of Light.mp3',
            cover: 'img/sol.jpg',
            lrc: 'lrc/塞壬唱片-MSR _ 二宮愛 _ DJ OKAWARI - Speed of Light.lrc',
            theme: '#9AFF9A'
        },
        {
            name: 'Till the Bell Tolls',
            artist: '塞壬唱片',
            url: 'mp3/Till the Bell Tolls - 塞壬唱片.mp3',
            cover: 'img/ttbt.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#8B1A1A'
        },
        {
            name: '秋绪',
            artist: '塞壬唱片/田井中彩智',
            url: 'mp3/塞壬唱片-MSR _ 田井中彩智 - 秋绪.mp3',
            cover: 'img/qx.jpg',
            lrc: 'lrc/塞壬唱片-MSR _ 田井中彩智 - 秋绪.lrc',
            theme: '#43CD80'
        },
        {
            name: 'Alive',
            artist: '塞壬唱片/Alive Until Sunset',
            url: 'mp3/ALIVE - 塞壬唱片-MSR_Alive Until Sunset.mp3',
            cover: 'img/a.jpg',
            lrc: 'lrc/ALIVE - 塞壬唱片-MSR_Alive Until Sunset.lrc',
            theme: '#1AE61A'
        },
        {
            name: 'Reversed Time',
            artist: '塞壬唱片',
            url: 'mp3/Reversed Time - 塞壬唱片-MSR.mp3',
            cover: 'img/rt.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#2248DD'
        },
        {
            name: '月亮代表我的心',
            artist: '邓丽君',
            url: 'mp3/邓丽君 - 月亮代表我的心.ogg',
            cover: 'img/yldbwdx.jpg',
            lrc: 'lrc/邓丽君 - 月亮代表我的心.lrc',
            theme: '#94E61A'
        },
        {
            name: '滴答',
            artist: '侃侃',
            url: 'mp3/侃侃 - 滴答 (吉他版).mp3',
            cover: 'img/dd.jpg',
            lrc: 'lrc/侃侃 - 滴答 (吉他版).lrc',
            theme: '#573CC4'
        },
        {
            name: '犯贱',
            artist: '徐良/阿悄',
            url: 'mp3/徐良 - 犯贱.mp3',
            cover: 'img/fj.jpg',
            lrc: 'lrc/徐良 - 犯贱.lrc',
            theme: '#6F7691'
        },
        {
            name: '不得不爱',
            artist: '潘玮柏/弦子',
            url: 'mp3/潘玮柏 _ 弦子 - 不得不爱.mp3',
            cover: 'img/bdba.jpg',
            lrc: 'lrc/潘玮柏 _ 弦子 - 不得不爱.lrc',
            theme: '#917D6F'
        },
        {
            name: 'Fireflies',
            artist: 'Various Artists/Nikki Simmons',
            url: 'mp3/Various Artists _ Nikki Simmons - Fireflies (Funk Fiction Remix).mp3',
            cover: 'img/ff.jpg',
            lrc: 'lrc/Various Artists _ Nikki Simmons - Fireflies (Funk Fiction Remix).lrc',
            theme: '#FF0000'
        },
        {
            name: '少女終末旅行',
            artist: '末廣健一郎',
            url: 'mp3/末廣健一郎 - 少女終末旅行 -Main Theme-.mp3',
            cover: 'img/snzmlx.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#006633'
        },
        {
            name: '終ワリノ歌',
            artist: '末廣健一郎',
            url: 'mp3/末廣健一郎 - 終ワリノ歌 (终结之歌).mp3',
            cover: 'img/snzmlx.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#CCCCFF'
        },
        {
            name: '挪威的森林',
            artist: '伍佰',
            url: 'mp3/伍佰 - 挪威的森林.mp3',
            cover: 'img/nwdsl.jpg',
            lrc: 'lrc/伍佰 - 挪威的森林.lrc',
            theme: '#FFFF66'
        },
        {
            name: '一番の宝物',
            artist: 'karuta',
            url: 'mp3/一番の宝物 (Original Version)-karuta.mp3',
            cover: 'img/ibntm.jpg',
            lrc: 'lrc/一番の宝物 (Original Version)-karuta.lrc',
            theme: '#CCCCCC'
        },
        {
            name: '素敌だね',
            artist: 'Rikki',
            url: 'mp3/Rikki (中野律纪) - 素敌だね.mp3',
            cover: 'img/stkdn.jpg',
            lrc: 'lrc/Rikki (中野律纪) - 素敌だね.lrc',
            theme: '#48D1CC'
        },
        {
            name: 'Scarborough Fair',
            artist: '山田タマル',
            url: 'mp3/Scarborough Fair-山田タマル.mp3',
            cover: 'img/sf.jpg',
            lrc: 'lrc/Scarborough Fair-山田タマル.lrc',
            theme: '#87CEFA'
        },
        {
            name: 'ぶれないアイで',
            artist: '初音ミク/Mitchie M',
            url: 'mp3/ぶれないアイで-初音ミク,Mitchie M.mp3',
            cover: 'img/jdde.jpg',
            lrc: 'lrc/ぶれないアイで-初音ミク,Mitchie M.lrc',
            theme: '#FFD700'
        },
        {
            name: '瓦妮莎的微笑',
            artist: 'Richard Clayderman',
            url: 'mp3/Richard Clayderman - 瓦妮莎的微笑.flac',
            cover: 'img/wnsdwx.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#8EE5EE'
        },
        {
            name: 'Far Away from Home',
            artist: 'Groove Coverage',
            url: 'mp3/Far Away from Home-Groove Coverage.mp3',
            cover: 'img/fafh.jpg',
            lrc: 'lrc/Far Away from Home-Groove Coverage.lrc',
            theme: '#8B0000'
        },
        {
            name: 'Daisy',
            artist: 'STEREO DIVE FOUNDATION',
            url: 'mp3/Daisy-STEREO DIVE FOUNDATION.mp3',
            cover: 'img/d.jpg',
            lrc: 'lrc/Daisy-STEREO DIVE FOUNDATION.lrc',
            theme: '#00EE76'
        },
        {
            name: '亡灵序曲',
            artist: 'Masque_Jupiter',
            url: 'mp3/Masque_Jupiter - 亡灵序曲 (钢琴版).mp3',
            cover: 'img/wlxq.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#00FFFF'
        },
        {
            name: '柠檬',
            artist: '游助',
            url: 'mp3/遊助 - 檸檬.mp3',
            cover: 'img/nm.jpg',
            lrc: 'lrc/遊助 - 檸檬.lrc',
            theme: '#BEBEBE'
        },
        {
            name: '君に贈る詩',
            artist: 'ダフ',
            url: 'mp3/ダフ - 君に贈る詩.mp3',
            cover: 'img/knyru.jpg',
            lrc: 'lrc/ダフ - 君に贈る詩.lrc',
            theme: '#D2691E'
        },
        {
            name: '美人鱼',
            artist: '林俊杰',
            url: 'mp3/美人鱼 - 林俊杰.ogg',
            cover: 'img/mry.jpg',
            lrc: 'lrc/美人鱼 - 林俊杰.lrc',
            theme: '#0000ff'
        },
        {
            name: '圣痕',
            artist: 'セイ',
            url: 'mp3/Stigmata-Ceui.mp3',
            cover: 'img/s.jpg',
            lrc: 'lrc/Stigmata-Ceui.lrc',
            theme: '#00FFFF'
        },
        {
            name: 'Summer Fantasy',
            artist: '傅许',
            url: 'mp3/傅许 - Summer Fantasy.mp3',
            cover: 'img/sf-2.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#CD661D'
        },
        {
            name: '遠く君へ',
            artist: '東山奈央',
            url: 'mp3/遠く君へ (bonus track)-東山奈央.mp3',
            cover: 'img/tkkh.jpg',
            lrc: 'lrc/遠く君へ (bonus track)-東山奈央.lrc',
            theme: '#CAFF70'
        },
        {
            name: '遠真夏のフォトグラフ',
            artist: 'Azusa',
            url: 'mp3/Azusa - 真夏のフォトグラフ.mp3',
            cover: 'img/sxdzp.jpg',
            lrc: 'lrc/Azusa - 真夏のフォトグラフ.lrc',
            theme: '#ff4081'
        }
    ]
});